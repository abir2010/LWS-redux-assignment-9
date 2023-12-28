import Navbar from "./../components/Navbar";
import ProjectsList from "./../components/ProjectsList";
import TeamList from "./../components/TeamList";
import AddTaskHeader from "./../components/AddTaskHeader";
import TasksList from "./../components/TasksList";
import { useState } from "react";

export default function Home() {
  const [searchText, setSearchText] = useState("");
  const [projectList, setProjectList] = useState([]);
  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <div className="container relative">
        <div className="sidebar">
          <ProjectsList  />
          <TeamList />
        </div>
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
          <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
            <AddTaskHeader />
            <TasksList searchText={searchText} />
          </main>
        </div>
      </div>
    </div>
  );
}
