import { use, useEffect } from 'react'
import AppRoute from './routes/AppRoute'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

function App() {
    const theme = useSelector((state) => state.theme.mode);
 useEffect(() => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
 }, [theme])


  return (
    <>
    <Navbar />
    <AppRoute />
    </>
  )
}

export default App
