import { TagsProjetos, TrabalhosProjetos } from 'ui-library-rodrigo'
import { Swiper, SwiperSlide } from 'swiper/react'
import { trabalhos } from '../SectionProject/imagens'
import { useEffect, useState } from 'react'
import { ContainerSlide } from './styled'

export function SlideProjetos() {
  const [slidePerView, setSlidePerView] = useState(2)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 880) {
        setSlidePerView(1.6)
      } else if (window.innerWidth < 700) {
        setSlidePerView(1.1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
    <ContainerSlide>
    <Swiper
    slidesPerView={slidePerView}
    pagination={{ clickable: true }}


    >
        {trabalhos.map((item, index) => (
          <SwiperSlide key={index}>
            <TrabalhosProjetos
              titulo={item.title}
              text={item.description}
              img={item.src}
              url={item.link}
            >
              <TagsProjetos texto={item.tec01} />
              <TagsProjetos texto={item.tec02} />
            </TrabalhosProjetos>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContainerSlide>
    </>
  )
}
