export default function OptionCard({ title, desc, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`option-card ${active ? "option-card--active" : ""}`}
    >
      <strong>
        {active ? "✓ " : ""}
        {title}
      </strong>
      <span>{desc}</span>
    </button>
  );
}
