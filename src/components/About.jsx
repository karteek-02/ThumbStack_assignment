import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm V.Karteek, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Greetings! I'm V Karteek, a dedicated final year CSE undergraduate at IIIT Bhubaneswar. 
                With a profound interest in programming and styling languages, my aim is to provide a seamless digital experience.
                  As a tech enthusiast, I'm always eager to explore new technologies and apply them to solve complex problems.
                   Outside of my academic pursuits, I find joy in playing cricket and badminton, reflecting my love for teamwork and strategy."
                 </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;


// ALL Done