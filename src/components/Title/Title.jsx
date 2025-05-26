import "./Title.css";
export default function Title({ title, sub_heading }) {
  return (
    <div className="section__title">
      <p>{sub_heading}</p>
      <h2>{title}</h2>
    </div>
  );
}
