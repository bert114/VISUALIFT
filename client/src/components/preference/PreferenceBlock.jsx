export default function PreferenceBlock({ title, children }) {
  return (
    <div className="preference-block">
      <h3>{title}</h3>
      {children}
    </div>
  );
}
