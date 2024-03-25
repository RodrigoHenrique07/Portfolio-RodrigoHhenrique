import styled from 'styled-components'

export const ContainerFooter = styled.div`
  width: 100%;
  background: rgba(123, 74, 226, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;


  padding: 27px 140px;

  @media (max-width: 1500px) {
    padding: 27 60px;
  }

  @media (max-width: 680px) {
    flex-direction: column-reverse;
    gap: 15px;
  }

  @media (max-width: 480px) {
    padding: 27px 24px;
  }


`

export const Tag = styled.p`
color: rgba(255, 255, 255, 0.50);

`;

export const Midia = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const iconMidia = styled.a`

transition: all .3s;

&:hover{
  transform: translateY(-10px);
}
`
