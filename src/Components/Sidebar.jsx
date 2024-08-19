
const Sidebar = () => {
  return (
    <div className=" w-full h-full text-white">
      <div className="maintext  xl:mb-1 max-2xl:ml-16 2xl:w-10/12 xl:w-10/12 mt-32 p-6 text-wrap leading-relaxed ">
        <p className="paragraph xl:top-11 mb-10">Hi, I'm Yuslash <span style={{ color: '#705df2' }}>Developer</span></p>
        <p className="mb-4 text-sm font-medium text-gray-300 tracking-normal">Crafting immersive <span className="text-white">experiences</span> with code and <span className="text-white">creativity</span>.</p>
        <p className="mb-4 leading-6 text-sm font-semibold text-gray-300 tracking-normal  ">I'm a passionate developer with a diverse skill set in <span className="text-white">web technologies</span>, <span className="text-white">3D graphics</span>, and <span className="text-white">cybersecurity</span>.  With a B.Sc. in Computer Science specializing in <span className="text-white">Cyber Security</span>,</p> 
        <p className="leading-6 text-sm font-semibold text-gray-300 tracking-normal  ">I have a solid foundation in programming, ethical hacking, and networking. My journey has led me to explore and master various tools and technologies that allow me to create immersive and secure digital experiences.</p>
        <div className="flex m-2 mt-4">
          <div className=" icons px-5">
          <i className="icon ml-2 fa-brands fa-twitter fa-2xs"></i>
          <div className=" font-semibold tracking-normal text-purple-300 top text-sm">Twitter</div>
        </div>
          <div className="icons px-5">
            <i className="icon ml-1.5 fa-brands fa-github fa-2xs"></i>
            <div className=" font-semibold tracking-normal text-purple-300 top text-sm ">Github</div>
          </div>
          <div className="icons px-5">
            <i className="icon ml-3 fa-brands fa-linkedin fa-2xs"></i>
            <div className=" font-semibold tracking-normal text-purple-300 top text-sm">LinkedIn</div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Sidebar
