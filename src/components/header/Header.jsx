import logo from '@/assets/logo.svg'
import Navbar from './NavBar'

function Header () {
  return (
    <header className='container mx-auto max-w-7xl justify-between md:flex'>
      <img
        className='mx-auto mb-2 flex h-40 w-40 md:mx-0'
        src={logo}
        alt='logo'
      />
      <Navbar />
    </header>
  )
}

export default Header
