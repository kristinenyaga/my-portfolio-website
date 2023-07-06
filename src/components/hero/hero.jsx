import Email from "./email"
// import computer from "../../assets/computer.jpeg"
import { motion } from "framer-motion"

import Socials from "./socials"
import Banner from "./banner"
const Hero = () => {
  return (
    <div className="flex flex-row w-full h-[60vh] items-center gap-20 justify-between ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden xl:inline-flex h-[80vh] w-32 fixed bottom-0">
        <Socials />
      </motion.div>
      <motion.div
        initial={{ opacity: 0,y: -30 }}
        animate={{ opacity: 1,y:0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          delay: 0.7,
          duration: 1,
          bounce: 2
          
        }}
        className=" mx-auto gap-6">
         <Banner />
        </motion.div>

      <div className=" fixed right-0 bottom-0 h-[30vh]">
        <Email />
      </div>
    </div>
  )
}

export default Hero