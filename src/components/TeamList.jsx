import TeamListItem from "./TeamListItem";

export default function TeamList() {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold">Team Members</h3>
      <div className="mt-3 space-y-4">
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
        <TeamListItem />
      </div>
    </div>
  );
}
