import * as S from './styled'

import { trabalhos } from './imagens'
import { TagsProjetos, Title, TopicosTag, TrabalhosProjetos } from 'ui-library-rodrigo'

console.log(trabalhos)

export function SectionProject() {
  return (
    <>
      <S.ContainerSectionProject id='project'>
        <S.PortfolioTitle>
          <TopicosTag icon="🔗" texto=" Portfólio" />
          <Title texto="Trabalhos e projetos" />
        </S.PortfolioTitle>

        <S.ProjectCardsList>
          {trabalhos.map((trabalho, index) => (
            <S.Cards key={index}>
              <TrabalhosProjetos
                titulo={trabalho.title}
                text={trabalho.description}
                img={trabalho.src}
                url={trabalho.link}
              >
                <TagsProjetos texto={trabalho.tec01} />
                <TagsProjetos texto={trabalho.tec02} />
              </TrabalhosProjetos>
            </S.Cards>
          ))}
        </S.ProjectCardsList>
      </S.ContainerSectionProject>
    </>
  )
}
