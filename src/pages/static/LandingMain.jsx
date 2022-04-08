import { Welcome, Services, Transactions } from "../../components"

const LandingMain = () => {
  return (
      <>
        <div className='min-h-screen'>
            <div className='gradient-bg-welcome'>
                <Welcome />
            </div>

            <Services />
            <Transactions />
        </div>
      </>
  )
}

export default LandingMain
