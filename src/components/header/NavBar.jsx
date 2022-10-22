import { AppContext } from '@/Context.jsx'
import { useContext, useEffect } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'

import useLocalStorage from '../../hooks/useLocalStorage'
import SearchBar from './SearchBar.jsx'

function Navbar () {
  const { count, setOpen } = useContext(AppContext)
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.querySelector('body').className = theme
  }, [theme])

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <div className='relative mx-auto flex items-center gap-2 text-gray-600 dark:text-slate-300 md:mx-0 lg:gap-3'>
        <SearchBar />
        <div
          className='text-3xl'
          onClick={handleTheme}
        >
          {theme === 'light'
            ? (
              <BiSun className='transition-colors: cursor-pointer text-2xl text-slate-600 duration-300 hover:text-black dark:text-slate-200 dark:hover:text-white  lg:text-3xl' />
              )
            : (
              <BiMoon className='transition-colors: cursor-pointer text-2xl text-slate-600 duration-300 hover:text-black dark:text-slate-200 dark:hover:text-white  lg:text-3xl' />
              )}
        </div>
        <div>
          <BsBag
            onClick={() => setOpen(true)}
            className='transition-colors: cursor-pointer text-3xl  duration-300 hover:text-amber-500 lg:text-2xl'
          />
          <p className='absolute right-0 -mt-9 -mr-2 h-5 w-5 rounded-[50%] bg-red-500 text-center text-sm font-bold text-white '>
            {count}
          </p>
        </div>
      </div>
    </>
  )
}

export default Navbar
