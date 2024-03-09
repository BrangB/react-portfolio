import React from 'react'
import avatar from '../asset/Brang.jpg'
const Info = () => {
  return (
    <div className="info w-[100%] lg:w-[30%] flex items-center justify-center mb-20 md:mb-28 lg:mb-0">
        <div className="real-info  flex flex-col items-center justify-start px-8 py-20 lg:p-0 w-[100%] lg:w-[80%] bg-white h-[100%] relative rounded-xl">
          <div className="transparentOne hidden lg:block h-[80px]"></div>
          <img className="w-[120px] hidden lg:flex avatarImg h-[120px] rounded-sm lg:rounded-lg object-cover relative avatarImg lg:absolute -top-[50px]" src={avatar} alt="" />
          <h2 className="text-[#0B0909] text-3xl lg:text-xl font-bold">Brang Tsawm Aung</h2>
          <p className="text-[#0b0909a4] text-sm mt-3">Front-end Developer</p>
          <div className="socialIcon flex w-full items-center justify-center mt-5">
            <div className='w-9 h-9 lg:w-12 lg:h-12 bg-[#F2F7FC] m-1 hover:scale-110 transition-all duration-200 flex items-center justify-center p-3'><i className="fa-brands fa-facebook-f text-blue-600 text-lg md:text-xl"></i></div>
            <div className='w-9 h-9 lg:w-12 lg:h-12 bg-[#F2F7FC] m-1 hover:scale-110 transition-all duration-200 flex items-center justify-center p-3'><i className="fa-brands fa-instagram text-orange-700 text-lg md:text-xl"></i></div>
            <div className='w-9 h-9 lg:w-12 lg:h-12 bg-[#F2F7FC] m-1 hover:scale-110 transition-all duration-200 flex items-center justify-center p-3'><i className="fa-brands fa-github text-lg md:text-xl"></i></div>
          </div>
          <div className="details w-[95%] md:w-[85%] lg:w-[80%] bg-[#F2F5F9] rounded-lg mt-4 h-64 flex flex-col p-2 items-center justify-stretch overflow-x-scroll ">
            <div className='w-full h-[50px] flex items-center justify-start px-4 py-[35px] '>
              <i className="fa-solid fa-mobile-screen-button mr-4 text-lg"></i>
              <div>
                <p className='text-[#1a10039d] font-semibold'>Phone</p>
                <p className='font-semibold text-sm'>09-662020616</p>
              </div>
            </div>
            <hr className='w-[70%]'/>
            <div className='w-full h-[50px] flex items-center justify-start px-4 py-[35px]'>
              <i className="fa-regular fa-envelope-open mr-4 text-lg"></i>
              <div className='flex flex-col flex-wrap'>
                <p className='text-[#1a10039d] font-semibold'>E-mail</p>
                <p className='font-semibold text-sm'>brangtsawmaung89@gmail.com</p>
              </div>
            </div>
            <hr className='w-[70%]'/>
            <div className='w-full h-[50px] flex items-center justify-start px-4 py-[35px] '>
              <i className="fa-solid fa-location-dot mr-4 text-lg"></i>
              <div>
                <p className='text-[#1a10039d] font-semibold'>Location</p>
                <p className='font-semibold text-sm'>No 990, Insein, Yangon</p>
              </div>
            </div>
          </div>
          <div className="download absolute bottom-2 flex transition-all duration-200 w-[50px] h-[50px] bg-[#ffaf36f6] rounded-full p-2 items-center justify-around mt-4">
            <i className="fa-solid fa-download text-white"></i>
            <p className='absolute text-center'>Download Resume</p>
          </div>
        </div>
    </div>
  )
}

export default Info