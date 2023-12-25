import { Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from './components/footer/Footer'
import AppContext from './context/AppContext'
import ContentPage from './pages/contentPage/ContentPage'

function App() {

  return (
    <>

      <AppContext>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:title" element={<ContentPage />} />
        </Routes>
        <Footer />
      </AppContext>

    </>
  )
}

export default App
