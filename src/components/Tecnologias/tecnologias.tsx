import { Title, TopicosTag } from 'ui-library-rodrigo'
import * as S from './styled'
import { TechsDiaDia, TechsOutros } from './imagens'

import arrowUp from '@assets/ArrowUp.svg'

export function SectionTeclonogias() {
  return (
    <>
      <S.Container id='skills'>
        <S.InfoTop>
          <TopicosTag icon="🧑‍💻" texto="Skills · Experiências" />
          <Title texto="Tecnologias e habilidades" />
        </S.InfoTop>

        <S.Techs>
          <S.TechText>Techs que uso no dia a dia</S.TechText>
          <S.TechsDiadia>
            {TechsDiaDia.map((techs, index) => (
              <S.iconTech key={index} src={techs.src} alt={techs.alt} />
            ))}
          </S.TechsDiadia>
        </S.Techs>

        <S.Techs>
          <S.TechText>Outras techs com que já realizei projetos</S.TechText>
          <S.TechsDiadia>
            {TechsOutros.map((techs, index) => (
              <S.iconTech key={index} src={techs.src} alt={techs.alt} />
            ))}
          </S.TechsDiadia>
        </S.Techs>

        <S.ReturnTopo href='#home'>
          <p>Voltar para o topo</p>
          <img src={arrowUp} alt="" />
        </S.ReturnTopo>
      </S.Container>
    </>
  )
}
