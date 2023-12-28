/* eslint-disable react/prop-types */
/* eslint-disable no-undef */

export default function TeamListItem({ member }) {
  const { name, avatar } = member || {};

  return (
    <div className="checkbox-container">
      <img src={avatar} className="team-avater" />
      <p className="label">{name}</p>
    </div>
  );
}
