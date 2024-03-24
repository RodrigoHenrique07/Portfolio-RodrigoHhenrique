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

  gap: 50px;



`;


export const Cards = styled.div`
  width: 22%;
 >div{
  height: 490px;
  img{
   border-radius: 16px;
   width: 100%;
   height: 200px;
  }
 }
`;








