import { Loader } from '../components/Loader'
import { UnsplashImage } from '../components/UnsplashImage'
import InfiniteScroll from 'react-infinite-scroll-component'


//Style
import '../Styles/Home.scss'
import Header from '../components/Header'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

//CONTEXT
import { useContext } from 'react'
import UnsplashImageContext from '../context/UnsplashImageContext'

export const Home = () => {
  
  const { images, fetchImages } = useContext(UnsplashImageContext)

  return (
    <div className='home-container'>
      <Header />
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
          >
          <SimpleReactLightbox>
            <SRLWrapper>
          <div className='images'>
            {images.map(image => (
              <UnsplashImage url={image.urls.regular} key={image.id} />
              ))}
          </div>
              </SRLWrapper>
            </SimpleReactLightbox>
        </InfiniteScroll>
    </div>
  )
}
