import './App.css'
import Navbar from './components/Navbar'
import {Route, Routes ,useLocation} from 'react-router-dom'
import Home from './pages/Home'

function App() {

  // ako je path/owner skalnja se navbar
  const isOwner=useLocation().pathname.includes("owner");

  return (
    <>
     {!isOwner && <Navbar/>}
     <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
