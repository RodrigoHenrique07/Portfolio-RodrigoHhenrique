import { ItemMenu, LinkMenu, Menu } from './styled';

export function MenuTopbar() {
  return (
    <>
      <Menu>
        <ItemMenu>
          <LinkMenu>Home</LinkMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkMenu>Sobre mim</LinkMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkMenu>Skills</LinkMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkMenu>Contato</LinkMenu>
        </ItemMenu>
      </Menu>
    </>
  );
}
