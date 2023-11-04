
import { motion } from "framer-motion"

const RespMenu = ({handleMenu}) => {
  const variants={
    hiddenBottom:{opacity:0, y: 50},
    hiddenTop:{opacity:0, y: -50},
    hiddenLeft:{opacity:0, x: -50},
    hiddenRight:{opacity:0, x: 50},
    visible:{opacity:1, y: 0},
    visibleLeft:{opacity:1, x: 0},
  }
  return (
    <div className="w-screen h-[calc(100vh-80px)] bg-white sticky top-0 z-10">
        <ul className="h-full bg-slate-950 flex flex-col justify-center items-center text-white gap-10 text-xl font-semibold" onClick={handleMenu}>
          <motion.div
            variants={variants}
            initial='hiddenTop'
            animate='visible'
            transition={{duration: .5, delay: .25}}>
          <li className="w-72 flex justify-center border border-secondary px-6 py-3 shadow-main shadow-secondary rounded-lg">
            <a href="#home" className="flex items-center gap-3">
              <span>&#60;</span><span className="text-3xl text-secondary">Home</span><span>/&#62;</span>
            </a>
          </li>
          </motion.div>
          <motion.div
            variants={variants}
            initial='hiddenRight'
            animate='visibleLeft'
            transition={{duration: .5, delay: .50}}>
          <li className="w-72 flex justify-center border border-secondary px-6 py-3 shadow-main shadow-secondary rounded-lg">
            <a href="#about" className="flex items-center gap-3">
              <span>&#60;</span><span className="text-3xl text-secondary">About</span><span>/&#62;</span>
            </a>
          </li>
          </motion.div>
          <motion.div
            variants={variants}
            initial='hiddenLeft'
            animate='visibleLeft'
            transition={{duration: .5, delay: .75}}>
            <li className="w-72 flex justify-center border border-secondary px-6 py-3 shadow-main shadow-secondary rounded-lg">
              <a href="#portfolio" className="flex items-center gap-3">
                <span>&#60;</span><span className="text-3xl text-secondary">Porfolio</span><span>/&#62;</span>
              </a>
            </li>
          </motion.div>
          <motion.div
            variants={variants}
            initial='hiddenBottom'
            animate='visible'
            transition={{duration: .5, delay: 1}}>
            <li className="w-72 flex justify-center border border-secondary px-6 py-3 shadow-main shadow-secondary rounded-lg">
              <a href="#contact" className="flex items-center gap-3">
                <span>&#60;</span><span className="text-3xl text-secondary">Contact</span><span>/&#62;</span>
              </a>
            </li>
          </motion.div>
        </ul>

    </div>
  )
}

export default RespMenu
