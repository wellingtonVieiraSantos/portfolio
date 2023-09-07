import { GrMenu, GrClose } from 'react-icons/gr'

const NavBar = ({handleMenu, isOpen}) => {

  return (
    <nav className="w-full h-20 text-violet-500 font-bold bg-slate-950
      text-lg flex justify-between items-center sticky top-0 left-0 md:bg-transparent md:backdrop-blur z-20 md:pr-4">
      <a href="#">
        <div className="px-2 aspect-square flex items-center justify-between drop-shadow-main">
          <span>&#60;</span>
          <span className="text-5xl text-slate-100">T</span>
          <span>/&#62;</span>
        </div>
      </a>
      <div onClick={handleMenu}
      className="w-10 mr-3 aspect-square border border-violet-900 md:hidden flex justify-center items-center">
        {isOpen ?
        <GrClose className='text-2xl invert'/> :
        <GrMenu className='text-3xl invert'/>
      }
      </div>
      <ul className="hidden md:flex py-4 gap-10 md:gap-20 drop-shadow-main text-sm md:text-xl ">
        <li className="hover:drop-shadow-main-hover cursor-pointer flex justify-center items-center">
          <a href="#about"><span>About</span></a></li>
        <li className="hover:drop-shadow-main-hover cursor-pointer flex justify-center items-center">
          <a href="#portfolio"><span>Portfolio</span></a></li>
        <li className="hover:drop-shadow-main-hover cursor-pointer flex justify-center items-center">
          <a href="#contact"><span>Contact</span></a></li>
      </ul>
    </nav>
  )
}

export default NavBar
