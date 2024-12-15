import React from 'react'

const StartHere = () => {
  return (
    
    // <div class="relative">
    //     <img src='/images/banner.jpg' alt="Image" className="w-full"/>

    //     <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
    //     </div>
    //     <div class="absolute top-0 left-0 flex  flex-wrap items-center justify-center w-full h-full bg-blue-600 bg-opacity-30 z-20">
    //         <h1 class="text-white text-center">
    //         The Vital Role of Community Support in Mental Health: Exploring the Importance of Connectedness for Mental Well-Being
    //         </h1>
    //     </div>
    // </div>
    <div className='w-full h-screen shadow-[rgba(0,0,0,0.3)_0px_18px_36px_-18px_inset]' >
      <div className='flex flex-col items-center justify-between h-screen' >
        <div className='flex flex-row items-center w-full h-16 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl py-2 px-5 ' >
            <img src='/icons/logo2.webp' className='w-12 pl-5' />
            <p className= ' pl-4   text-[#19283A] text-xl ' >Start Here</p>
        </div>
        <div className='w-full h-full flex flex-col  bg-[#e9e8e8] overflow-y-auto custom-scrollbar' >
          <div className=' ml-24 mb-10 mt-10 w-10/12 h-auto rounded-2xl bg-white border-l border-gray-400 ' >
              <div className=' flex flex-row items-center justify-center bg-[#2015FF] w-full h-80 rounded-2xl ' >
                <img src='/icons/logo.png' className='w-44' />
                <h1 className='text-3xl text-white' >Join the Mental Health Communities</h1>
              </div>
              <div className='ml-12 mt-5 w-11/12 ' >
                <p className='py-5' > <span className='text-2xl font-semibold ' >Welcome to Community</span> &ndash; 
                  A Safe Space for Mental Health Support & Awareness</p>
                <p>At Community, we believe in the power of connection, understanding, and support when it comes to mental health. Our community is dedicated to providing a platform where individuals can freely share their experiences, insights, and resources related to mental health issues, in a safe and supportive environment.</p>
                <p className='py-5 text-xl ' >What We Offer:</p>
                <ul className='list-disc ml-10'>
                  <li>
                  <span className='text-xl' >Supportive Conversations:</span> Share your personal experiences and connect with others who truly understand.
                  </li>
                  <li><span className='text-xl' >
                    Mental Health Resources:</span> Access articles, videos, and expert advice on various mental health topics to help guide your journey.</li>
                  <li><span className='text-xl' >Expert Discussions:</span> Participate in discussions with mental health professionals and thought leaders.</li>
                  <li><span className='text-xl' >Safe and Respectful Environment:</span> Our community is built on respect, kindness, and empathy, ensuring that everyone feels heard and supported.</li>
                  <li><span className='text-xl' >Community Events: </span>Join in on workshops, webinars, and other events focused on mental health awareness and self-care practices.</li>
                </ul>
                <p className='py-5 text-xl ' >Why Join Us?</p>
                <ul className='list-disc ml-10'>
                  <li>You're not alone. We understand the importance of mental health, and by joining this community, you can share your journey, learn from others, and find support.
                  </li>
                  <li>We are a judgment-free space where people from all walks of life can come together to talk, share, and grow.</li>
                  <li>Whether you're struggling with mental health challenges or simply looking to better understand mental well-being, you'll find a place to belong here.</li>
                </ul>
                <p className='pt-5 pb-3' >Remember, your mental health matters, and we are here to support you every step of the way. Together, we can break the stigma around mental health and create a more informed, compassionate world.</p>
                <p className='mb-10'>Join us today and be a part of a community that cares. 💚</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartHere