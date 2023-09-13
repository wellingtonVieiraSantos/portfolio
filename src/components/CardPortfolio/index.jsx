import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

const CardPortfolio = (props) => {
  return (
    <div className='p-2 flex flex-col gap-3 '>
      <div className='aspect-square overflow-hidden'>
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
      <div className='flex gap-3 justify-end items-center'>
        {props.tecnologies.map(tec =>(
          <span key={tec.src} className='w-7'><img src={tec.src} alt={tec.alt} /></span>
        ))}
      </div>
    </div>
  )
}

export default CardPortfolio
