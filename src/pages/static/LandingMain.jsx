import { Navbar, Welcome, Services, Transactions, Footer } from "../../components"

const LandingMain = () => {
  return (
      <>
        <div className='min-h-screen'>
            <div className='gradient-bg-welcome'>
                <Navbar />
            </div>

            <Welcome />
        </div>
      </>
  )
}

export default LandingMain
