import { useGetTasksQuery } from "../features/tasks/tasksApi";
import TasksListItem from "./TasksListItem";
import Loading from "./ui/Loading";
import Error from "./ui/Error";

export default function TasksList() {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <Error message={error} />;
  } else if (!isError && !isLoading && tasks?.length === 0) {
    content = <Error message={"No Projects Found :("} />;
  } else if (!isError && !isLoading && tasks?.length > 0) {
    content = tasks.map((task) => <TasksListItem key={task.id} task={task} />);
  }

  return <div className="lws-task-list">{content}</div>;
}
