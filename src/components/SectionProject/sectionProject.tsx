import * as S from './styled'

import { trabalhos } from './imagens'
import { TagsProjetos, Title, TopicosTag, TrabalhosProjetos } from 'ui-library-rodrigo'



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
            <a href={trabalho.link} target='_blank'>

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
            </a>
          ))}
        </S.ProjectCardsList>
      </S.ContainerSectionProject>
    </>
  )
}
