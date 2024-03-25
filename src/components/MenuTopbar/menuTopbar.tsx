import { ItemMenu, LinkMenu, Menu } from './styled';

export function MenuTopbar() {
  return (
    <>
      <Menu>
        <ItemMenu>
          <LinkMenu href='#home'>Home</LinkMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkMenu href='#about'>Sobre mim</LinkMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkMenu href='#project'>Projetos</LinkMenu>
        </ItemMenu>
        <ItemMenu>
          <LinkMenu href='#skills'>Skills</LinkMenu>
        </ItemMenu>

      </Menu>
    </>
  );
}
