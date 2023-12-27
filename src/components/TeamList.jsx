import { useGetTeamQuery } from "../features/team/teamApi";
import TeamListItem from "./TeamListItem";
import Loading from "./ui/Loading";
import Error from "./ui/Error";

export default function TeamList() {
  const { data: team, isLoading, isError, error } = useGetTeamQuery();

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error} />;
  } else if (!isError && !isLoading && team?.length === 0) {
    content = <Error message={"No Projects Found :("} />;
  } else if (!isError && !isLoading && team?.length > 0) {
    content = team.map((member) => (
      <TeamListItem key={member.id} member={member} />
    ));
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">{content}</div>
    </div>
  );
}
