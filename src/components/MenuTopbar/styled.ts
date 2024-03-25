import styled from 'styled-components';

export const Menu = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  gap: 30px;

  @media (max-width: 600px) {
    gap: 10px;

  }
`;

export const ItemMenu = styled.li``;

export const LinkMenu = styled.a`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  transition: color 0.3s;

  &:hover {
    color: rgba(123, 74, 226, 0.5);
  }


  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
