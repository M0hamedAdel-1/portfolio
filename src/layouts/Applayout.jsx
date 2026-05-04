import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const Applayout = () => {
  return (
    <div className='app'>
      <Header/>
      <div className='pages'>
        <Outlet/>
      </div>

      <Footer/>
    </div>
  )
}

export default Applayout
