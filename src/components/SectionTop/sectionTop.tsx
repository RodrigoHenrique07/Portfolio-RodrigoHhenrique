import {
  ButtonContato,
  ButtonDown,
  Title,
  Topbar,
  TopicosTag
} from 'ui-library-rodrigo'
import linkedin from '@assets/linkedin.svg'
import github from '@assets/github.svg'
import imgavatar from '@assets/AvatarAndIcons.png'
import arrowDown from '@assets/ArrowLineDown.svg'
import whats from '@assets/WhatsappLogo.svg'

import logo from '@assets/logo.svg'

import * as S from './styled'
import { MenuTopbar } from '../MenuTopbar/menuTopbar'
import { useState } from 'react'
import { ModalMobile } from '../ModalMobile/modalMobile'
export function SectionTop() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.ContainerSectionTop id="home">
        <Topbar>
          <img src={logo} alt="" />
          <MenuTopbar />
        </Topbar>

        <S.BurgerIconContainer onClick={toggleMenu}>
          <S.BurgerIcon />
        </S.BurgerIconContainer>

        {isOpen && <ModalMobile onclick={toggleMenu}/> }

        <S.TopHomeMain>
          <S.Wrapper>
            <S.TopHomeTexts>
              <TopicosTag icon="👋" texto="Saudações!" />
              <Title texto="Rodrigo Henrique" />

              <S.Description>Front-end developer</S.Description>

              <S.MidiaSocial>
                <S.IconRede
                  href="https://www.linkedin.com/in/rodrigo-henrique-b73797229/"
                  target="_blank"
                >
                  <img src={linkedin} alt="" />
                </S.IconRede>
                <S.IconRede
                  href="https://github.com/RodrigoHenrique07"
                  target="_blank"
                >
                  <img src={github} alt="" />
                </S.IconRede>
              </S.MidiaSocial>
            </S.TopHomeTexts>

            <S.Mockup>
              <S.Avatar src={imgavatar} />
            </S.Mockup>
          </S.Wrapper>

          <S.Buttons>
            <a
              href="https://drive.google.com/file/d/11e0HdkP7eyTNc0_WskEIwCAl0LmskNYs/view?usp=sharing"
              target="_blank"
            >
              <ButtonDown texto="Baixar CV">
                <img src={arrowDown} />
              </ButtonDown>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5581991431409"
              target="_blank"
            >
              <ButtonContato texto="Vamos conversar">
                <img src={whats} alt="" />
              </ButtonContato>
            </a>
          </S.Buttons>
        </S.TopHomeMain>
      </S.ContainerSectionTop>
    </>
  )
}
