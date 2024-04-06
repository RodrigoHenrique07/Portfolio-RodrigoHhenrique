import { MenuTopbar } from "../MenuTopbar/menuTopbar";
import * as S from "./styled";

import closemodal from '@assets/icon-close.svg'

interface modal {
  onclick: () => void,
}

export function ModalMobile ({onclick}: modal) {
  return(
    <>
      <S.ContainerModal  >

        <S.Dropdown>
              <button onClick={onclick}  >
                <img src={closemodal} alt="" />
              </button>
              <S.MenuMobile>
                <S.ListMenu> <button onClick={onclick}><a href="#home">Home</a></button> </S.ListMenu>
                <S.ListMenu> <button onClick={onclick}><a href="#about">Sobre mim</a></button> </S.ListMenu>
                <S.ListMenu> <button onClick={onclick}><a href="#project">Projetos</a></button> </S.ListMenu>
                <S.ListMenu> <button onClick={onclick}><a href="#skills">Skills</a></button> </S.ListMenu>
              </S.MenuMobile>
        </S.Dropdown>

      </S.ContainerModal>

    </>
  )
}
