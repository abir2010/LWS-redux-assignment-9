import sumitImg from "../assets/images/avatars/sumit.png";

export default function TeamListItem() {
  return (
    <div className="checkbox-container">
      <img src={sumitImg} className="team-avater" />
      <p className="label">Sumit Saha</p>
    </div>
  );
}
