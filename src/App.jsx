import { Footer, Loader, Navbar, Services, Transactions } from './components'
import LandingMain from './pages/static/LandingMain'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className='gradient-bg-welcome sticky top-0 z-50'>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/services" element={<Services />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
