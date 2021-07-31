import styled from 'styled-components'
import 'react-multi-carousel/lib/styles.css'
import carouselImg1 from '../../imgs/carousel1.png'
import banner5 from '../../imgs/banner5.png'
import banner3 from '../../imgs/banner3.png'
import banner from '../../imgs/banner.png'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

export function Carousel1() {
  return (
    <CarouselContainer>
      <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false}>
        <div>
          <img src={banner} />
        </div>
        <div>
          <img src={banner5} />
        </div>
      </Carousel>
    </CarouselContainer>
  )
}

const ImagesContainer = styled.div`
  img {
    height: 300px;
    width: 444px;
    padding: 20px;
    margin: 10px;
  }
`
const CarouselContainer = styled.div`
  margin-bottom: 40px;
  img {
    max-height: 400px;
  }
  .teste {
    margin: 10px;
    margin-top: 90px;
  }
`
