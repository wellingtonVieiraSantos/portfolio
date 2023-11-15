import { RiMailAddLine, RiMailCheckLine } from 'react-icons/ri'

import p from 'prop-types'

const Contact = ({ handleCopy, text, isCopy}) => {
  return (
    <section className='bg-slate-950 flex text-slate-100 py-20' id='contato'>
      <div className='w-[min(1024px,100%)] flex flex-col p-5 gap-4 m-auto'>
        <h2 className='text-4xl text-secondary font-bold'>Contato</h2>
        <p>Você pode entrar em contato comigo pelo meu email abaixo, ou se preferir me contate pelas redes sociais.</p>
        {isCopy ?
          <div
            onClick={handleCopy}
            className='w-72 flex justify-center items-center p-2 gap-8 border shadow-main border-green-900 shadow-green-800 cursor-wait rounded-lg'>
              <RiMailCheckLine className='text-xl'/>
            <span ref={text}>Copied</span>
          </div> :
          <div
            onClick={handleCopy}
            className='w-72 flex justify-center items-center p-2 gap-2 border border-secondary rounded-lg shadow-main shadow-secondary/80 cursor-pointer'>
              <RiMailAddLine className='text-xl'/>
            <span ref={text}>wtvsantos@gmail.com</span>
          </div>
        }
      </div>
    </section>
  )
}

export default Contact

Contact.propTypes = {
  handleCopy: p.func.isRequired,
  text: p.element.isRequired,
  isCopy: p.bool.isRequired
}
