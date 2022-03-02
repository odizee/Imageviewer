import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const UnsplashImageContext = createContext({})

export const UnsplashImageProvider = ({ children }) => {

    const [images, setImages] =  useState([])

    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = () => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`).then(res => setImages([...images, ...res.data]))
    }

    return (
        <UnsplashImageContext.Provider 
            value={{
                images, fetchImages
            }}
        >
            {children}
        </UnsplashImageContext.Provider>
    )
}

export default UnsplashImageContext