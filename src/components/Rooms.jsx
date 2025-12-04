import { useState } from 'react'
import RoomComponent from './RoomComponent'
import FilterComponentRoom from './FilterComponentRoom'

export default function Rooms() {
  const [query, setQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({})

  // Example rooms array — currently set to 5 items for demo.
  // You can change the number of rooms here or replace this with a
  // server/API response to show any amount of rooms.
  const rooms = [
    { roomNumber: '101', floor: '1', availability: 'Available', seats: '25', equipment: 'Projector, Whiteboard' },
    { roomNumber: '102', floor: '1', availability: 'Available', seats: '20', equipment: 'TV, Whiteboard' },
    { roomNumber: '201', floor: '2', availability: 'Occupied', seats: '30', equipment: 'Projector' },
    { roomNumber: '202', floor: '2', availability: 'Available', seats: '18', equipment: 'Conference Phone' },
    { roomNumber: '301', floor: '3', availability: 'Available', seats: '40', equipment: 'Projector, Microphone' },
  ]

  return (
    <div className="page">
      <div className="rooms-top" style={{ position: 'relative' }}>
        <input
          className="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search rooms or features..."
        />
        <button
          onClick={() => setShowFilters((s) => !s)}
          style={{ marginLeft: 10, padding: '8px 10px', borderRadius: 6, cursor: 'pointer' }}
        >
          Filters
        </button>

        {showFilters && (
          <div style={{ position: 'absolute', top: 48, right: 0, zIndex: 50 }}>
            <FilterComponentRoom onFilterChange={setFilters} initialFilters={filters} />
          </div>
        )}
      </div>

      {/* map the rooms array to RoomComponent instances */}
      {rooms.map((r) => (
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
