import NavBar from "../../components/NavBar"
import About from '../../components/About'
import Portfolio from '../../components/Portfolio'
import SocialMediaBar from '../../components/SocialMediaBar'
import Landing from '../../components/Landing'
import Contact from "../../components/Contact"

const Home = () => {
  return (
    <div className=" bg-slate-900 flex">
        <NavBar/>
        <main className="min-h-screen w-screen flex flex-col">
          <SocialMediaBar/>
          <Landing/>
          <About/>
          <Portfolio/>
          <Contact/>
          <div className='h-10 bg-slate-900 flex justify-center p-4 text-xs text-slate-300'>Created by Ton</div>
        </main>
    </div>
  )
}

export default Home
