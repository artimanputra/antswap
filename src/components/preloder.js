import React from 'react';
// import './css/glowing.css'// Make sure to adjust the path to your CSS file
import { logo } from '../assets';

function Prelode() {
  return (
    <div className='landing h-screen flex justify-center items-center'>
      <source src="/video.mp4" className='filter brightness-150 shadow-lg' type="video/mp4" />
    </div>
  );
}

export default Prelode;
