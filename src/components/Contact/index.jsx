import { RiMailAddLine, RiMailCheckLine } from 'react-icons/ri'

const Contact = ({ handleCopy, text, isCopy}) => {
  return (
    <section className='bg-slate-950 flex text-slate-100' id='contact'>
      <div className='w-[min(1000px,100%)] flex flex-col p-5 gap-4 m-auto'>
        <h2 className='text-4xl text-violet-500 font-bold'>Contact</h2>
        <p>I can send you an email or, if you prefer, you can reach out to me through social media.</p>
        {isCopy ?
          <div
            onClick={handleCopy}
            className='w-60 flex items-center p-2 gap-8 border shadow-main border-green-900 shadow-green-800 cursor-wait'>
              <RiMailCheckLine className='text-xl'/>
            <span ref={text}>Copied</span>
          </div> :
          <div
            onClick={handleCopy}
            className='w-60 flex items-center p-2 gap-2 border border-violet-900 shadow-main shadow-violet-800 cursor-pointer'>
              <RiMailAddLine className='text-xl'/>
            <span ref={text}>wtvsantos@gmail.com</span>
          </div>
        }
      </div>
    </section>
  )
}

export default Contact
