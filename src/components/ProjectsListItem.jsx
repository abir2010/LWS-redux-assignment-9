/* eslint-disable react/prop-types */
export default function ProjectsListItem({ project }) {
  const { projectName, colorClass } = project || {};
  return (
    <div className="checkbox-container">
      <input type="checkbox" className={colorClass} defaultChecked />
      <p className="label">{projectName}</p>
    </div>
  );
}
