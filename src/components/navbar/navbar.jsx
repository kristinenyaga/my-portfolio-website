import namelogo from "../../assets/namelogo.svg"
// import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header className='w-full flex flex-col'>
      <nav className='flex justify-between items-center flex-row w-full mb-10 pt-3' >
        <p className="flex justify-items-start text-lg font-medium">Christine <span className="text-teal-500 ml-2">Nyaga</span></p>
        <div>
          <img src={namelogo}  alt="name logo" className="h-12 mt-2 hover:scale-110 duration-75" />
        </div>
        <div className='flex flex-row gap-2 justify-items-end'>
          <a className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4 font-satoshi'>home</a>
          <a className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4 font-satoshi'>about</a>
          <a className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4 font-satoshi' >projects</a>
          <a className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4 font-satoshi'>contact</a>
          <button type='button'  className='text-sm text-center border p-2 rounded-md  border-teal-500 text-teal-500' onClick={()=>window.open('https://github.com/kristinenyaga')}>resume</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar