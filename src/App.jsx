import { Footer, Loader, Navbar } from './components'
import LandingMain from './pages/static/LandingMain'

const App = () => {

  return (
    <>
      <Navbar />

      <div className='App'>
        <h1 className='text-3xl font-bold text-center'>
          Hello, Dave.
        </h1>

        <LandingMain />
      </div>

      <Footer />
    </>
  )
}

export default App
