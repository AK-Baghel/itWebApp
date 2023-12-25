import { Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from './components/footer/Footer'
import AppContext from './context/AppContext'

function App() {

  return (
    <>

      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AppContext>

    </>
  )
}

export default App
