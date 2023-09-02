import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

const CardPortfolio = (props) => {
  return (
    <div className='w-full p-2 flex flex-col gap-3 hover:scale-110 transition-all'>
      <div className='w-full aspect-square overflow-hidden'>
        <img src={props.srcImg} alt={props.alt} className=''/>
      </div>
      <div className='flex justify-between items-center text-2xl text-violet-400'>
        <h3>{props.title}</h3>
        <div className='flex gap-2 '>
          <a href={props.hrefCode} target='_blank' rel='author'>
            <FaGithub/>
          </a>
          <a href={props.hrefPage} target='_blank' rel='author'>
            <BiLinkExternal/>
          </a>
        </div>
      </div>
      <p className='sm:text-xl'>{props.description}</p>
      <div className='flex gap-2 justify-end'>
        <span className='w-5'><img src="./src/assets/coloredIcons/html-5.png" alt="html 5 cover" /></span>
        <span className='w-5'><img src="./src/assets/coloredIcons/css-3.png" alt="css 3 cover" /></span>
        <span className='w-5'><img src="./src/assets/coloredIcons/js.png" alt=" javascript cover" /></span>
      </div>
    </div>
  )
}

export default CardPortfolio
