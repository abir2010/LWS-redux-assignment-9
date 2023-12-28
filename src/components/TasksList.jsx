/* eslint-disable react/prop-types */
import { useGetTasksQuery } from "../features/tasks/tasksApi";
import TasksListItem from "./TasksListItem";
import Loading from "./ui/Loading";
import Error from "./ui/Error";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function TasksList({ searchText }) {
  const [projects, setProjects] = useState([]);
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();

  const { projectList } = useSelector((state) => state.filter) || {};

  useEffect(() => {
    setProjects(projectList);
  }, [projectList]);

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error} />;
  } else if (!isError && !isLoading && tasks?.length === 0) {
    content = <Error message={"No Projects Found :("} />;
  } else if (!isError && !isLoading && tasks?.length > 0) {
    const filterByText = (task) => {
      if (task.taskName.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
    };

    const filterByProject = (task) => {
      const index = projects.findIndex((p) => p === task.project.projectName);

      if (index !== -1) return true;
    };

    content = tasks
      .filter((task) => filterByProject(task))
      .filter((task) => filterByText(task))
      .map((task) => <TasksListItem key={task.id} task={task} />);
  }

  return <div className="lws-task-list">{content}</div>;
}
