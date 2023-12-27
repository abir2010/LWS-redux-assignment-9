import ProjectsListItem from "./ProjectsListItem";

export default function ProjectsList() {
  return (
    <div>
      <h3 className="text-xl font-bold">Projects</h3>
      <div className="mt-3 space-y-4">
        <ProjectsListItem />
        <ProjectsListItem />
        <ProjectsListItem />
        <ProjectsListItem />
        <ProjectsListItem />
      </div>
    </div>
  );
}
