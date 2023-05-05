import React, { useEffect, useState } from 'react'

const TextRotator = ({asGPT}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % asGPT.length);
      }, 3000);
  
      return () => clearInterval(intervalId);
    }, [currentIndex, asGPT.length]);
  return (
    <span className='blue_gradient'>{asGPT[currentIndex]}</span>
  )
}

export default TextRotator