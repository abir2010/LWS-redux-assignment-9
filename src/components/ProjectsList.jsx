import { useGetProjectsQuery } from "../features/projects/projectsApi";
import ProjectsListItem from "./ProjectsListItem";
import Error from "./ui/Error";
import Loading from "./ui/Loading";

export default function ProjectsList() {
  const { data: projects, isLoading, isError, error } = useGetProjectsQuery();

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error} />;
  } else if (!isError && !isLoading && projects?.length === 0) {
    content = <Error message={"No Projects Found :("} />;
  } else if (!isError && !isLoading && projects?.length > 0) {
    content = projects.map((project) => (
      <ProjectsListItem key={project.id} project={project} />
    ));
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}
