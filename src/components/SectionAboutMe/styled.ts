import styled from 'styled-components';

export const ContainerSectionAbout = styled.section`
  padding: 120px 0 50px 0;

  border-bottom: 1px solid rgba(123, 74, 226, 0.2);

  @media (max-width: 480px) {
    padding: 70px 0 50px 0;
  }

`;

export const AboutMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media (max-width: 1280px) {
    flex-direction: column;
    gap: 30px;

  }


`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const AboutTexts = styled.div`

>button{
    margin-bottom: 24px;
  }

  @media (max-width: 1700px) {
    width: 1005;
    max-width: 800px;
  }

  @media (max-width: 1480px) {
    width: 1005;
    max-width: 700px;
  }


`;
export const AbouteTopicos = styled.ul`
  margin-top: 24px;


`;
export const AboutList = styled.li`
color: rgba(255, 255, 255, 0.50);
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 25px;
margin-top: 5px;


&:first-child {
    margin-bottom: 20px;

}

&:last-child {
    margin-top: 20px;

}

@media (max-width: 480px) {
  margin-top: 20px;
}

`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);

  text-align: justify;
  font-size: 20px;
  font-weight: 400;
  margin: 16px 0;
`;

export const MidiaSocial = styled.div`
  display: flex;
  gap: 5px;
`;

export const IconRede = styled.a``;

export const Mockup = styled.div`
  width: 100%;
  max-width: 555px;
`;



export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
