import { BiMailSend } from 'react-icons/bi'

const Contact = () => {
  return (
    <section className='bg-slate-950 flex text-slate-100' id='contact'>
      <div className='w-[min(1000px,100%)] flex flex-col p-5 gap-4 m-auto'>
        <h2 className='text-3xl text-violet-500 font-semibold'>Contact</h2>
        <p>I can send you an email or, if you prefer, you can reach out to me through social media.</p>
        <a href="mailto:wtvsantos@gmail.com">
          <div className='w-60 flex items-center p-2 gap-2 border border-violet-500 rounded-lg'>
            <BiMailSend className='text-lg'/>
            <span>wtvsantos@gmail.com</span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact
