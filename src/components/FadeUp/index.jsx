import { motion, useAnimation, useInView } from "framer-motion"

import { useEffect, useRef } from 'react'

const FadeUp = ({children}) => {

  const ref = useRef(null)

  const isInView = useInView(ref, {once: false})

  const mainControls = useAnimation()

  useEffect(()=>{
    if(isInView){
      mainControls.start('visible')
    }
  },[isInView])

  const variants={
    hidden:{opacity:0, y: 200},
    visible:{opacity:1, y: 0}
  }

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        initial='hidden'
        animate={mainControls}
        transition={{duration: 1, delay: .5}}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default FadeUp
