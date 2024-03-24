import styled from 'styled-components';

export const ContainerSectionProject = styled.section`
  padding: 50px 0 100px 0;

  border-bottom: 1px solid rgba(123, 74, 226, 0.2);

`;

export const PortfolioTitle = styled.div`

  width: 100%;
  max-width: 600px;
  margin-bottom: 100px;

  >button{
    margin-bottom: 24px;
  }
`;

export const ProjectCardsList = styled.div`

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 50px;

  @media (max-width: 980px){
    align-items: center;
    justify-content: center;
  }





`;


export const Cards = styled.div`


  transition: transform 0.3s ease-out, filter 0.3s ease-out;
cursor: pointer;

&:hover{
  transform: scale(1.1, 1.1);
}
`;








