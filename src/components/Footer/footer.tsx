import * as S from "./styled";

import linkedin from '@assets/linkedin.svg'
import github from '@assets/github.svg'

export function Footer () {
  return(
    <>
      <S.ContainerFooter>

        <S.Tag>Copyright © Rodrigo Henrique · 2024</S.Tag>
        <S.Midia>
          <S.iconMidia>
            <img src={linkedin} alt="iconLikedin" />
          </S.iconMidia>
          <S.iconMidia>
            <img src={github} alt="iconGitHub" />
          </S.iconMidia>
        </S.Midia>

      </S.ContainerFooter>

    </>
  )
}
