import { FC } from 'react';

import { Label } from '..';

type Props = {
  nameTag: string;
};

const SectionTag: FC<Props> = ({ nameTag }) => {
  return <Label>{nameTag}</Label>;
};

export default SectionTag;
