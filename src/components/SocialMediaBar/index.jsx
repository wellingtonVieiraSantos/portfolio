import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const SocialMediaBar = () => {
  return (
    <div className='flex items-center justify-end
      text-slate-100 text-xl gap-6 p-4 backdrop-blur-sm sticky top-0 sm:text-3xl'>
      <a href="https://linkedin.com/in/wellingtonsantos2022/" target='_blank' rel='external'>
        <FaLinkedin className='hover:text-violet-500 hover:drop-shadow-main cursor-pointer transition-all'/>
      </a>
      <a href="https://github.com/wellingtonVieiraSantos" target='_blank' rel='external'>
        <FaGithub className='hover:text-violet-500 hover:drop-shadow-main cursor-pointer transition-all'/>
      </a>
      <a href="https://instagram.com/tonsantos_26" target='_blank' rel='external'>
        <FaInstagram className='hover:text-violet-500 hover:drop-shadow-main cursor-pointer transition-all'/>
      </a>
   </div>
  )
}

export default SocialMediaBar
