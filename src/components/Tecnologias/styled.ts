import styled from 'styled-components'

export const Container = styled.section`
  padding: 120px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;
  justify-content: center;


  @media (max-width: 480px) {
    padding: 70px 0;
    gap: 50px;
  }
`

export const InfoTop = styled.div`
  text-align: center;
  >button{
    margin-bottom: 15px;
  }
`

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;

`

export const TechText = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: Raleway;
  font-size: 24px;
  font-weight: 400;
`

export const TechsDiadia = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap: 30px;
  }
`

export const TechsOutras = styled.div``

export const iconTech = styled.img``
