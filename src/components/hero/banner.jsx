// import line from "../../assets/line.svg"
import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {
  return (
    <div className="mx-auto flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <h2 className="leading-8  text-3xl">Hi, I'm  </h2>
        <div className="w-0.5 h-24 bg-teal-400 rotate-90"/>
      </div>
      <p className="text-5xl text-gray-600 ">Christine Nyaga</p>
      <h1 className="lg:text-6xl text-2xl capitalize xs:text:3xl">
        A{' '}
      <span className="lg:text-6xl text-3xl capitalize  xs:text:3xl">
          <Typewriter
            words={['<backend developer/>', '<frontend developer />','<full stack developer/>']}
            loop={4}
            cursorBlinking
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={100}
            delaySpeed={500}
            
            // onType={handleType}
          />

        </span>
        </h1>
      <p className="max-w-screen-md">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
        Explore my latest projects and articles, showcasing my expertise in React.
        js and web development.</p>
      <button type='button' className='text-md text-center border p-2 px-6 rounded-md  border-teal-500 text-teal-500 w-1/4 mt-6' onClick={() => window.open('https://github.com/kristinenyaga')}>resume</button>
    </div>
  )
}

export default Banner