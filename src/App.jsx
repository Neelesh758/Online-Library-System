
import './App.css'
import Footer from './Components/footer'
import Home from './Components/Home'
import Maindiv from './Components/maindiv'
import NavigationBar from './Components/navigationBar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
