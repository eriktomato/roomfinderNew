import ProfessorComponent from './ProfessorComponent'

export default function Professor() {
  // Example professor list — this is static for now. Replace with API data
  // (e.g. fetch /professors) when moving to a server-backed implementation.
  const professors = [
    { name: 'Dr. Erika Schmidt', faculty: 'Mathematik', timeRange: 'Di + Do, 14:00 - 16:00' },
    { name: 'Prof. Dr. Hans Bauer', faculty: 'Informatik', timeRange: 'Mo + Mi, 10:00 - 12:00' },
    { name: 'Dr. Anna Meier', faculty: 'Physik', timeRange: 'Fr, 09:00 - 11:00' },
    { name: 'Dr. Lukas Weber', faculty: 'Chemie', timeRange: 'Mi, 13:00 - 15:00' },
  ]

  return (
    <div className="page">
      <h3>Professor</h3>

      {/* Render the static list for now — change to API-driven data as required */}
      {professors.map((p) => (
        <ProfessorComponent
          key={p.name}
          name={p.name}
          faculty={p.faculty}
          timeRange={p.timeRange}
        />
      ))}
    </div>
  )
}
