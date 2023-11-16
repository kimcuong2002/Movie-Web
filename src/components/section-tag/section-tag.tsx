import { FC } from 'react';

import { Label } from '..';

type Props = {
  nameTag: string;
};

export const SectionTag: FC<Props> = ({ nameTag }) => {
  return (
    <div className="mb-5">
      <Label className="text-[#A3765D] uppercase text-2xl">{nameTag}</Label>
      <hr className="w-full border-[#A3765D] border-21" />
    </div>
  );
};
