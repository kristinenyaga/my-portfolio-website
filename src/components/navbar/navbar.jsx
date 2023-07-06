import { Link } from "react-router-dom"
import namelogo from "../../assets/namelogo.svg"
// import { NavLink } from "react-router-dom";
import { motion } from "framer-motion"

const Navbar = () => {
  const liVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.5,
        duration: 1,
        delayChildren: 0.5
        
        
      }
      
    }
}
  return (
    <header className='w-full flex flex-col shadow-xl sticky top-0'>
      <nav className='flex justify-between items-center flex-row w-full mb-10 pt-2 bg-black' >
        <p className="flex justify-items-start text-lg font-medium">Christine <span className="text-teal-500 ml-2">Nyaga</span></p>
        <div className=" md:hidden xs:inline-flex lg:inline-flex">
          <img src={namelogo}  alt="name logo" className="h-12 mt-2 hover:scale-110 duration-75" />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:1}} className="hidden md:inline-flex">
          <motion.ul 
          className='flex flex-row gap-2 justify-items-end'>
            <Link href="#" className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4' >
              <motion.li variants={liVariants} initial="hidden" animate="visible">home</motion.li>
            </Link>
            <Link href="#" className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4' >
              <motion.li variants={liVariants} initial="hidden" animate="visible">about</motion.li>
            </Link>
            <Link href="#" className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4' >
              <motion.li variants={liVariants} initial="hidden" animate="visible">projects</motion.li>
            </Link>
            <Link href="#" className='py-1.5 px-2 text-sm cursor-pointer hover:underline hover:underline-offset-4' >
              <motion.li variants={liVariants} initial="hidden" animate="visible">contact</motion.li>
            </Link>
            <a href="/Christine_Nyaga_Resume (1).pdf" target="_blank">
              <motion.button variants={liVariants} initial="hidden" animate="visible" type='button' className='text-sm text-center border p-2 rounded-md  border-teal-500 text-teal-500'>resume</motion.button>

            </a>

          </motion.ul>
        </motion.div>
      </nav>
    </header>
  )
}

export default Navbar