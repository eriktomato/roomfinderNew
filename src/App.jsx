import { useState } from 'react'
import './App.css'
import Rooms from './components/Rooms'
import Favorites from './components/Favorites'
import Professor from './components/Professor'
import Bookings from './components/Bookings'
import Classes from './components/Classes'
import Profile from './components/Profile'

function App() {

  //icons für die navigation bar und alle components hinzufügen und icon für die app und umbennen in RoomFinder
  

  const pages = [
    { id: 'rooms', label: 'Rooms', component: Rooms },
    { id: 'favorites', label: 'Favorites', component: Favorites },
    { id: 'professor', label: 'Professor', component: Professor },
    { id: 'bookings', label: 'Bookings', component: Bookings },
    { id: 'classes', label: 'Classes', component: Classes },
    { id: 'profile', label: 'Profile', component: Profile },
  ]

  const [page, setPage] = useState('rooms')

  const CurrentPage = pages.find((p) => p.id === page).component


  

  return (
    <div className="app-root">
      

     

      <main>
        <CurrentPage />
      </main>

      <nav className="bottom-nav">
        {pages.map((p) => (
          <button
            key={p.id}
            className={p.id === page ? 'active' : ''}
            onClick={() => setPage(p.id)}
          >
            {p.label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default App
