import line from "../../assets/line.svg"
const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-col justify-items-start max-w-screen-xl justify-start">
        <div className="flex flex-row gap-2">
          <h2 className="leading-8  text-2xl">Hello </h2>
          <img src={line} alt="line" className="" />
        </div>
        <p className="text-4xl ">Christine Nyaga</p>
        <p className="text-5xl text-gray-600">Full Stack Web Developer</p>
        <p className="max-w-screen-md">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
          Explore my latest projects and articles, showcasing my expertise in React.
          js and web development.</p>
        <button type='button' className='text-md text-center border p-2 px-6 rounded-md  border-teal-500 text-teal-500' onClick={() => window.open('https://github.com/kristinenyaga')}>resume</button>
      </div>
      <div>
        <h1>hello</h1>
      </div>
    </div>

  )
}

export default Hero