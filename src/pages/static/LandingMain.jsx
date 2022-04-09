import { Navbar, Welcome, Services, Transactions, Footer } from "../../components"

const LandingMain = () => {
  return (
      <>
        <div className='min-h-screen'>
            <Welcome />
        </div>

        <div className='min-h-screen'>
            <Services />
        </div>
      </>
  )
}

export default LandingMain
