import React from 'react'
import TabBar from './TabBar'
import {Route, Routes, Link, NavLink,} from 'react-router-dom'
import Home from '../pages/Home'
import Resume from '../pages/Resume'
import Work from '../pages/Work'
import Contact from '../pages/Contact'

const NavAndDisplay = () => {
  return (
    <div className="navAndDisplay w-[100%] lg:w-[70%] flex flex-col items-center justify-center relative">
        <TabBar />
        <div className="display bg-white w-[100%] h-[100%] rounded-xl p-12">
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/resume' element={<Resume />} />
                <Route path='/work' element={<Work />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    </div>
  )
}

export default NavAndDisplay