import { BiLogoGmail,BiLogoWhatsapp } from 'react-icons/bi'
import { LiaLinkedinIn, LiaInstagram } from 'react-icons/lia'
import {LuGithub} from 'react-icons/lu'

const Socials = () => {
  return (
    <div className='flex flex-col gap-24 justify-end text-xl ml-4 '>
      <div className='flex flex-col gap-8 ml-8'>
      <a>
        <span className='icons'>
          <LuGithub />
        </span>
      </a>
      <a>
        <span className='icons'>
        <LiaInstagram />
        </span>
      </a>
      <a>
        <span className='icons'>
          <BiLogoWhatsapp />
        </span>
      </a>
      <a>
        <span className='icons'>
          <BiLogoGmail />
        </span>
      </a>
        <a>
        <span className='icons'>
          <LiaLinkedinIn />
        </span>
        </a>
      </div>
      <div className=' w-28 h-28 border rounded-full inline-flex justify-center items-center border-teal-500 '>
        hire me
      </div>

    </div>
  )
}

export default Socials