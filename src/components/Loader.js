import React from 'react'
import '../Styles/Loader.scss'

export const Loader = () => {
  return (
    <div className='loader'>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}
