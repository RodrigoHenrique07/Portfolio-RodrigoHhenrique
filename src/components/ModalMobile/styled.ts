import styled from 'styled-components'

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0rem;
  top: 0rem;

  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(0.2813rem);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  @media (min-width: 901px) {
    display: none;
  }
`

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  width: 500px;

  padding: 40px;
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;

  > button {
    position: absolute;
    top: 40;
    right: 40px;
  }
`

export const MenuMobile = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

`

export const ListMenu = styled.li`
  > button {
    background: transparent;

    > a {
      color: #7B4AE2;
      text-align: center;
      font-family: Raleway;
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      &:hover{
        color: rgba(123, 74, 226, 0.50);
      }
    }
  }
`
