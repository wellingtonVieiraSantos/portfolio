import { GrMenu, GrClose } from 'react-icons/gr'

const NavBar = ({handleMenu, isOpen}) => {

  const menu = ['Home', 'About', 'Portfolio', 'Contact']

  return (
    <nav className="w-full h-20 text-secondary font-bold bg-slate-900
      text-lg flex justify-between items-center sticky top-0 left-0 md:bg-transparent md:backdrop-blur z-20 md:pr-4">
      <a href="#home">
        <div className="px-2 aspect-square flex items-center justify-between drop-shadow-main">
          <span>&#60;</span>
          <span className="text-5xl text-slate-100">T</span>
          <span>/&#62;</span>
        </div>
      </a>
      <div onClick={handleMenu}
      className="w-10 mr-3 aspect-square md:hidden flex justify-center items-center">
        {isOpen ?
        <GrClose className='text-2xl invert'/> :
        <GrMenu className='text-3xl invert'/>
      }
      </div>
      <ul className="hidden md:flex py-4 gap-10 md:gap-20 text-sm md:text-xl ">
        {menu.map(item => (
          <li key={item} className="relative cursor-pointer flex justify-center items-center after:absolute after:bottom-0 after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full after:hover:transition-all">
            <a href={'#' + item.toLowerCase()}><span>{item}</span></a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
