import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'

const CardPortfolio = (props) => {

  const teste = 'react'
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
      <div className='flex gap-5 justify-end items-center'>
        {props.tecnologies.map(tec =>(
          <span datatype={tec.alt} key={tec.src}
          className='w-7 text-violet-500 font-bold relative after:absolute hover:after:content-[attr(datatype)]
          hover:after:border after:border-violet-500 after:p-2 after:right-0 after:mt-3 hover:after:bg-slate-950 '>
            <img src={tec.src} alt={`${tec.alt} icon`} />
          </span>
        ))}
      </div>
    </div>
  )
}

export default CardPortfolio
