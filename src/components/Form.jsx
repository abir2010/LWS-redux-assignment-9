import { useNavigate, useParams } from "react-router-dom";
import { useGetProjectsQuery } from "../features/projects/projectsApi";
import { useGetTeamQuery } from "../features/team/teamApi";
import { useEffect, useState } from "react";
import {
  useAddTaskMutation,
  useEditTaskMutation,
  useGetTaskQuery,
} from "../features/tasks/tasksApi";

export default function Form() {
  const [taskName, setTaskName] = useState("");
  const [member, setMember] = useState("");
  const [projectName, setProjectName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [taskCheck, setTaskCheck] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const { data: editingTask } = useGetTaskQuery(id, {
    skip: !taskCheck,
  });

  const { data: projects } = useGetProjectsQuery();
  const { data: team } = useGetTeamQuery();
  const [addTask, { data: task }] = useAddTaskMutation();
  const [editTask, { data: editedTask }] = useEditTaskMutation();

  const {
    taskName: editTaskName,
    teamMember,
    project,
    deadline: editDeadline,
    status,
    id: editId,
  } = editingTask || {};
  const { name, avatar } = teamMember || {};
  const { projectName: editProjectName, colorClass } = project || {};

  const handleAddSubmit = (e) => {
    e.preventDefault();

    const project = projects.find((p) => p.projectName === projectName);
    const teamMember = team.find((t) => t.name === member);

    const data = {
      taskName,
      teamMember,
      project,
      deadline,
      status: "pending",
    };

    if (id === undefined) {
      addTask(data);
    } else {
      editTask({ id, data });
    }
    navigate("/");
  };

  useEffect(() => {
    if (id !== undefined) {
      setTaskCheck(true);
    }
    setTaskName(editTaskName);
    setMember(name);
    setProjectName(editProjectName);
    setDeadline(editDeadline);
  }, [id, name, editDeadline, editTaskName, editProjectName]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleAddSubmit} className="space-y-6">
      <div className="fieldContainer">
        <label htmlFor="lws-taskName">Task Name</label>
        <input
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          type="text"
          name="taskName"
          id="lws-taskName"
          required
          placeholder="Implement RTK Query"
        />
      </div>
      <div className="fieldContainer">
        <label>Assign To</label>
        <select
          onChange={(e) => setMember(e.target.value)}
          name="teamMember"
          id="lws-teamMember"
          required
        >
          <option value hidden>
            Select Job
          </option>
          {team?.length > 0 &&
            team.map((t) => {
              if (t.name === member) {
                return (
                  <option selected value={t.name} key={t.id}>
                    {t.name}
                  </option>
                );
              } else {
                return (
                  <option value={t.name} key={t.id}>
                    {t.name}
                  </option>
                );
              }
            })}
        </select>
      </div>
      <div className="fieldContainer">
        <label htmlFor="lws-projectName">Project Name</label>
        <select
          onChange={(e) => setProjectName(e.target.value)}
          id="lws-projectName"
          name="projectName"
          required
        >
          <option value hidden>
            Select Project
          </option>
          {projects?.length > 0 &&
            projects.map((p) => {
              if (p.projectName === editProjectName) {
                return (
                  <option selected value={p.projectName} key={p.id}>
                    {p.projectName}
                  </option>
                );
              } else {
                return (
                  <option value={p.projectName} key={p.id}>
                    {p.projectName}
                  </option>
                );
              }
            })}
        </select>
      </div>
      <div className="fieldContainer">
        <label htmlFor="lws-deadline">Deadline</label>
        <input
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          type="date"
          name="deadline"
          id="lws-deadline"
          required
        />
      </div>
      <div className="text-right">
        <button type="submit" className="lws-submit">
          Save
        </button>
      </div>
    </form>
  );
}
