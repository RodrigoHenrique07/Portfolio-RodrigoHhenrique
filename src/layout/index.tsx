

import * as S from './styled';
import { SectionTop } from '@/components/SectionTop/sectionTop';
import { SectionAboutMe } from '@/components/SectionAboutMe/sectionAboutMe';
import { SectionProject } from '@/components/SectionProject/sectionProject';
import { SectionTeclonogias } from '@/components/Tecnologias/tecnologias';


export function Layaout() {
  return (
    <S.ContainerLayout>
      <SectionTop />
      <SectionAboutMe />
       <SectionProject />
      <SectionTeclonogias/>


    </S.ContainerLayout>
  );
}
