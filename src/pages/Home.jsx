import Navbar from "./../components/Navbar";
import ProjectsList from "./../components/ProjectsList";
import TeamList from "./../components/TeamList";
import AddTaskHeader from "./../components/AddTaskHeader";
import TasksList from "./../components/TasksList";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container relative">
        <div className="sidebar">
          <ProjectsList />
          <TeamList />
        </div>
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <AddTaskHeader />
            <TasksList />
          </main>
        </div>
      </div>
    </div>
  );
}
