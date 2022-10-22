import { useContext, useState } from 'react'
import { AppContext } from '@/Context'

function Tags () {
  const [active, setActive] = useState('')
  const { filterProducts } = useContext(AppContext)

  const tags = [
    'Todo',
    'Cadenas',
    'Anillos',
    'Aretes',
    'Relojes',
    'Lentes'
  ]

  const handleTags = (e, tag) => {
    filterProducts(e)
    setActive(tag)
  }

  return (
    <div className='mt-4 flex justify-center'>
      <ul className='text-md flex overflow-x-auto p-1 pl-[2px] text-center font-medium text-gray-100'>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={(e) => handleTags(e, tag)}
            className={`tag mr-2 inline-block border-b-4 border-transparent py-2 px-3 transition-all hover:border-[#BAE8E8] duration-700 ${
              active === tag
                ? 'text-white  dark:outline dark:outline-2 dark:outline-slate-50'
                : 'text-black dark:bg-gray-100'
            } cursor-pointer`}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tags
