import * as S from "./styled";

import linkedin from '@assets/linkedin.svg'
import github from '@assets/github.svg'

export function Footer () {
  return(
    <>
      <S.ContainerFooter>

        <S.Tag>Copyright © Rodrigo Henrique · 2024</S.Tag>
        <S.Midia>
          <S.iconMidia href="https://www.linkedin.com/feed/" target="_blank">
            <img src={linkedin} alt="iconLikedin" />
          </S.iconMidia>
          <S.iconMidia href="https://github.com/RodrigoHenrique07" target="_blank">
            <img src={github} alt="iconGitHub" />
          </S.iconMidia>
        </S.Midia>

      </S.ContainerFooter>

    </>
  )
}
