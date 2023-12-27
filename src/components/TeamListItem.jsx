/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from "react";

export default function TeamListItem({ member }) {
  const [display, setDisplay] = useState({});
  const { name, avatar } = member || {};
  const img = `../assets${avatar}`;
  import(img).then((img) => setDisplay(img.default));

  return (
    <div className="checkbox-container">
      <img src={display} className="team-avater" />
      <p className="label">{name}</p>
    </div>
  );
}
