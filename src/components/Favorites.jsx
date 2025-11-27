import RoomComponent from './RoomComponent'

export default function Favorites() {
  // Example favorites list (3 items). Replace with API data when available.
  const favorites = [
    { roomNumber: '101', floor: '1', availability: 'Available', seats: '25', equipment: 'Projector' },
    { roomNumber: '202', floor: '2', availability: 'Occupied', seats: '18', equipment: 'TV' },
    { roomNumber: '301', floor: '3', availability: 'Available', seats: '40', equipment: 'Projector, Microphone' },
  ]

  return (
    <div className="page">
      <h3>Favorites</h3>

      {/* Render favorite rooms - this is a static example of 3 items. */}
      {favorites.map((r) => (
        <RoomComponent
          key={r.roomNumber}
          roomNumber={r.roomNumber}
          floor={r.floor}
          availability={r.availability}
          seats={r.seats}
          equipment={r.equipment}
        />
      ))}
    </div>
  )
}
