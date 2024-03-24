import { ButtonContato, ButtonDown, Title, Topbar, TopicosTag } from 'ui-library-rodrigo'
import linkedin from '@assets/linkedin.svg'
import github from '@assets/github.svg'
import imgavatar from '@assets/AvatarAndIcons.png'
import arrowDown from '@assets/ArrowLineDown.svg'
import whats from '@assets/WhatsappLogo.svg'

import logo from '@assets/logo.svg'

import * as S from './styled'
import { MenuTopbar } from '../MenuTopbar/menuTopbar'
export function SectionTop() {
  return (
    <>
      <S.ContainerSectionTop>
        <Topbar>
          <img src={logo} alt="" />
          <MenuTopbar/>
        </Topbar>

        <S.TopHomeMain>
          <S.Wrapper>
            <S.TopHomeTexts>
              <TopicosTag icon="👋" texto="Saudações!" />
              <Title texto="Rodrigo Henrique" />

              <S.Description>Front-end developer</S.Description>

              <S.MidiaSocial>
                <S.IconRede>
                  <img src={linkedin} alt="" />
                </S.IconRede>
                <S.IconRede>
                  <img src={github} alt="" />
                </S.IconRede>
              </S.MidiaSocial>
            </S.TopHomeTexts>

            <S.Mockup>
              <S.Avatar src={imgavatar} />
            </S.Mockup>
          </S.Wrapper>

          <S.Buttons>
            <ButtonDown texto="Baixar CV">
              <img src={arrowDown} />
            </ButtonDown>
            <ButtonContato texto="Vamos conversar">
              <img src={whats} alt="" />
            </ButtonContato>
          </S.Buttons>
        </S.TopHomeMain>
      </S.ContainerSectionTop>
    </>
  )
}
