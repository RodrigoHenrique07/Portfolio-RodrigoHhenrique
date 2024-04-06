import { Swiper } from 'swiper/react';
import styled from "styled-components";


export const ContainerSlide = styled.div`

  width: 100%;
  display: none;


  > .swiper {
    min-height: 500px;
    > .swiper-wrapper{
      > .swiper-slide{
        >div{
          height: 460px;

          @media(max-width: 375px){
            width: 278px;
            height: 430px;
          }
        }
      }
    }

    @media(max-width: 480px) {
      min-height: 500px;
    }
  }


  @media(max-width: 980px){
    display: block;
  }




`;
