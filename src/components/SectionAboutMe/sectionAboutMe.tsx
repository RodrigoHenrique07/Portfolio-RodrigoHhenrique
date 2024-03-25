
import avatar from '@assets/99925589.jpg';
import * as S from './styled';
export function SectionAboutMe() {
  return (
    <>
      <S.ContainerSectionAbout id='about'>
        <S.AboutMe>
          <S.Avatar src={avatar} />

          <S.AboutTexts>
            {/* <TopicosTag icon="🧐" texto="Sobre mim" />
            <Title texto="Rodrigo Henrique Ribeiro Correia Silva" /> */}

            <S.AbouteTopicos>
              <S.AboutList>
                👋 Me chamo Rodrigo Henrique Ribeiro CorreiaSilva, mas pode me
                chamar apenas de Rodrigo. Prazer!
              </S.AboutList>
              <S.AboutList>
                🎓 Graduado em Análise e Desenvolvimento de Sistemas pela
                Estácio de João Pessoa - Tambiá
              </S.AboutList>
              <S.AboutList>
                🎓 Graduado em Bacharel em Engenharia Ambiental pela Faculdade
                Internacional da Praíba
              </S.AboutList>
              <S.AboutList>
                💡 Interesse em desenvolvimento Front-end com React TS
              </S.AboutList>

              <S.AboutList>
                {`🚀 Tentando sempre evoluir e ser melhor do que ontem. "Um passo
                à frente e você não está mais no mesmo lugar"`}
              </S.AboutList>
            </S.AbouteTopicos>
          </S.AboutTexts>
        </S.AboutMe>
      </S.ContainerSectionAbout>
    </>
  );
}
