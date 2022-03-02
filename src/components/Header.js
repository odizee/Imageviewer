import React from 'react'
import '../Styles/Header.scss'

//CONTEXT
import { useContext } from 'react'
import UnsplashImageContext from '../context/UnsplashImageContext'

const Header = () => {

  const { images } = useContext(UnsplashImageContext)

  return (
    <div className='header-container'
      style={{ 
      backgroundImage: `url(${images[0]?.urls.regular})`,
    }}
    >
        <h1>Image Viewer</h1>
        <p>The internet’s source of freely-usable images. Powered by creators everywhere.</p>
    </div>
  )
}

export default Header