import { Footer, Loader, Navbar, Services, Transactions, Wallets } from './components'
import { LandingMain, Contracts } from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <div className='gradient-bg-welcome sticky top-0 z-50'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<LandingMain />} />
          <Route path='/services' element={<Services />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/wallets' element={<Wallets />} />
          <Route path='/contracts' element={<Contracts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
