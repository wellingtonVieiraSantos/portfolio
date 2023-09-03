
const NavBar = () => {

  return (
    <nav className="h-screen w-10 text-violet-500 font-bold
      text-lg flex flex-col sticky top-0 md:w-20 md:text-3xl">
      <a href="#">
        <div className="w-10 py-2 px-[0.125rem] mb-8 flex items-center justify-between drop-shadow-main">
          <span>&#60;</span>
          <span className="text-sm md:text-3xl text-slate-100">T</span>
          <span>/&#62;</span>
        </div>
      </a>
      <ul className="h-2/3 flex flex-col py-4 gap-10 md:gap-20 drop-shadow-main text-sm md:text-xl ">
        <li className="w-full h-20 hover:drop-shadow-main-hover cursor-pointer flex justify-center items-center">
          <a href="#about"><span className="inline-block rotate-90">About</span></a></li>
        <li className="w-full h-20 hover:drop-shadow-main-hover cursor-pointer flex justify-center items-center">
          <a href="#about"><span className="inline-block rotate-90">Portfolio</span></a></li>
        <li className="w-full h-20 hover:drop-shadow-main-hover cursor-pointer flex justify-center items-center">
          <a href="#about"><span className="inline-block rotate-90">Contact</span></a></li>
      </ul>
    </nav>
  )
}

export default NavBar
