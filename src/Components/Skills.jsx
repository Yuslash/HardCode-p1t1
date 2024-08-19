import React from 'react'

const Skills = () => {
    x

  return (
    <div className='skills-container'>
    
          <h1 className='skills-text font-bold '>A GLIMPSE INTO MY <span className=' text-rose-500'>PASSIONS</span></h1>
          <h2 className=' text-violet-200 text-center mb-8'>" Passions fuel our creativity, drive our ambitions, and give meaning to every step we take. They turn dreams into reality <br></br> and transform ordinary lives into extraordinary journeys."</h2>
    <div className='blur-circle'></div>
          <div className='main-box'>
            <div className='child-box'>
                <div className='innerchild'>
                      <img src='/Rectangle.png'></img>
                      <div className='content-button'>
                          <p className=' text-2xl pb-3 font-semibold'>Tech Explorer Extraordinaire</p>
                          <p className=' max-w-80 text-xs pb-4'>Always on the hunt for the coolest tech trends and gadgets.</p>
                          <button className=''>
                              <p className='text-xs'>CHECK IT OUT</p>
                          </button>
                      </div>
                </div>
            </div>
              <div className='child-box'>
                  <div className='innerchild'>
                    <img src='/console.png'></img>
                      <div className='content-button'>
                          <p className=' text-2xl pb-3 font-semibold'>Gaming Geek & Proud</p>
                          <p className='text-xs pb-4 max-w-80'>Gaming is my jam! Let's dive into the latest games.</p>
                          <button className=''>
                              <p className='text-xs'>LET'S GO</p>
                          </button>
                      </div>
                  </div>
              </div>
              <div className='child-box'>
                  <div className='innerchild'>
                      <img src='/coding.png'></img>
                      <div className='content-button'>
                          <p className=' text-2xl pb-3 font-semibold'>Code Wizard in Action</p>
                          <p className='max-w-80 text-xs pb-4'>Turning ideas into reality, one line of code at a time.</p>
                          <button className=''>
                              <p className='text-xs'>LET ME COOK</p>
                          </button>
                      </div>
                  </div>
              </div>
              <div className='child-box'>
                  <div className='innerchild'>
                    <img src='/badminton.png'></img>
                      <div className='content-button'>
                          <p className=' text-2xl pb-3 font-semibold'>Sports Enthusiast for Life</p>
                          <p className='max-w-80 text-xs pb-4'>Staying active and loving every moment of it!</p>
                          <button className=''>
                              <p className='text-xs'>GET IN THE GAME</p>
                          </button>
                      </div>
                  </div>
              </div>
              
          </div>
        
          <div className='image-container'>
              <img src='/MaskTop.png'></img>
              <img src='/MaskBottom.png'></img>
          </div>

          <img className='console' src='/console.png'></img>
          <img className='game' src='/console.png'></img>
          <img className='captainamerica' src='/captainamerica.png'></img>
          <img className='Rectangle' src='/Rectangle.png'></img>
          <img className='coding' src='/coding.png'></img>
          <img className='badminton' src='/badminton.png'></img>

    </div>
    
  )
}

export default Skills
