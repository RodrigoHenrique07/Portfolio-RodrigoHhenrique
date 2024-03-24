import { Title, TopicosTag } from 'ui-library-rodrigo'
import * as S from './styled'
import { TechsDiaDia, TechsOutros } from './imagens'

export function SectionTeclonogias() {
  return (
    <>
      <S.Container>
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
          <S.TechText>Techs que uso no dia a dia</S.TechText>
          <S.TechsDiadia>
            {TechsOutros.map((techs, index) => (
              <S.iconTech key={index} src={techs.src} alt={techs.alt} />
            ))}
          </S.TechsDiadia>
        </S.Techs>
      </S.Container>
    </>
  )
}
