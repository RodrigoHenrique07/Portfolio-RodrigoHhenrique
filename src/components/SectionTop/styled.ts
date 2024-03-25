import styled from 'styled-components';

export const ContainerSectionTop = styled.section`
  padding: 38px 0 186px 0;

  border-bottom: 1px solid rgba(123, 74, 226, 0.2);


  @media (max-width: 480px) {
    padding: 38px 0 70px 0;
  }

`;

export const TopHomeMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 980px) {
      flex-direction: column;
  }

  @media (max-width: 480px) {
    align-items: start;
  }
`;

export const TopHomeTexts = styled.div`
  > button {
    margin-bottom: 25px;
  }
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
  text-align: justify;
  font-size: 20px;
  font-weight: 400;
  margin: 16px 0;

  @media (max-width: 480px){
    margin: 16px 0 40px  0;
  }


`;

export const MidiaSocial = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 980px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    display: none;
  }

`;

export const IconRede = styled.a`
transition: all .3s;

&:hover{
  transform: translateY(-10px);
}

`;

export const Mockup = styled.div`
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px){
    max-width: 100%;
    text-align: center;
  }
`;

export const Avatar = styled.img`
  width: 100%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;


  @media (max-width: 980px) {
      flex-direction: row;
      gap: 15px;
  }


`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;

  @media (max-width: 1600px) {
    width: 66%;
  }

  @media (max-width: 1480px) {
    width: 67.5%;
  }

  @media (max-width: 1280px) {
    width: 75%;
  }

  @media (max-width: 980px) {
    flex-direction: column-reverse;
    width: 100%;
    gap: 30px;

  }

  @media (max-width: 480px) {
    align-items: start;
  }



`;



export const BurgerIconContainer = styled.div`
  display: none;

  @media (max-width: 480px) {
    display: block;
  }
`;

export const BurgerIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: white;
  position: relative;

  transform: rotate(0deg);

  &:before, &:after {
    content: '';
    position: absolute;
    height: 3px;
    background-color: white;
    width: 100%;
  }

  &:before {
    top: -10px;
  }

  &:after {
    top: 10px;

  }
`;
