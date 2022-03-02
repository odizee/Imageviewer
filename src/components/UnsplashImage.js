import React from 'react'

//Style
import '../Styles/UnsplashImage.scss'

export const UnsplashImage = ({url, key}) => {
  return (
    <div>
        <img src={url} alt="" key={key}/>
    </div>
  )
}
