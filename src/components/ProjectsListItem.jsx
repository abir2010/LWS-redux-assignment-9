/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  addToProjectList,
  removeFromProjectList,
} from "../features/filter/filterSlice";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
export default function ProjectsListItem({ project }) {
  const { projectName, colorClass } = project || {};

  const [select, setSelect] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addToProjectList(projectName));
  }, []);

  const handleCheck = (e) => {
    setSelect(e.target.checked);
    if (!select) {
      dispatch(addToProjectList(projectName));
    } else {
      dispatch(removeFromProjectList(projectName));
    }
  };

  return (
    <div className="checkbox-container">
      <input
        onChange={(e) => handleCheck(e)}
        type="checkbox"
        className={colorClass}
        checked={select}
      />
      <p className="label">{projectName}</p>
    </div>
  );
}
