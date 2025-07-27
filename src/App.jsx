import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes ,useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import MyBookings from './pages/MyBookings';

function App() {

  // ako je path/owner skalnja se navbar
  const isOwner=useLocation().pathname.includes("owner");

  return (
    <>
     {!isOwner && <Navbar/>}
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/rooms/:id' element={<RoomDetails/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
