

import * as S from './styled';
import { SectionTop } from '@/components/SectionTop/sectionTop';
import { SectionAboutMe } from '@/components/SectionAboutMe/sectionAboutMe';
import { SectionProject } from '@/components/SectionProject/sectionProject';

export function Layaout() {
  return (
    <S.ContainerLayout>
      <SectionTop />
      <SectionAboutMe />
      <SectionProject />
    </S.ContainerLayout>
  );
}
