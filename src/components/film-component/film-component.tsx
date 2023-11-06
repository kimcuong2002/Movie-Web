import { FC } from 'react';

import { BsFillPlayCircleFill } from 'react-icons/bs';

import { Label } from '..';
// eslint-disable-next-line no-restricted-imports
import { FilmType } from '@/ts/types/film';

const FilmComponent: FC<FilmType> = ({
  id,
  position = 'vertical',
  poster_path,
  episode,
  filmName,
  release_date,
  author,
}) => {
  return (
    <div className={`${position === 'horizontal' && 'flex'}`}>
      <div
        key={id}
        className={`relative w-48 h-100 group cursor-pointer overflow-hidden rounded-md ${
          position === 'horizontal' && '!w-24 !h-32'
        }`}
      >
        <img
          src={poster_path}
          alt=""
          className={`top-0 left-0 w-full h-64 object-cover cursor-pointer group-hover:scale-125 transition-transform duration-300 ${
            position === 'horizontal' && '!w-24 !h-32'
          }`}
        />
        <Label
          className={`text-left p-1 w-32 rounded-r-lg text-lg inline-block bg-[#A3765D] absolute top-[10%] translate-y-[-50%] ${
            position === 'horizontal' && 'text-xs'
          }`}
        >
          Episode: {episode}
        </Label>
        <BsFillPlayCircleFill
          className="absolute top-1/2 left-1/2  translate-y-[-50%] translate-x-[-50%] text-6xl !hidden group-hover:!block scale-75 transition-transform duration-500"
          sx={{ fontSize: 80 }}
        />
        <Label
          className={`${
            position === 'above'
              ? 'absolute bottom-0 w-full text-white text-center left-1/2 translate-x-[-50%] py-1 text-xl bg-[rgba(0,0,0,0.7)]'
              : 'hidden'
          }`}
        >
          {filmName}
        </Label>
      </div>
      <div className={`${position === 'horizontal' && 'flex flex-col px-3'}`}>
        <Label
          className={`text-center text-black text-xl uppercase cursor-pointer mt-2 dark:text-white ${
            position === 'above' ? 'hidden' : ''
          }`}
        >
          {filmName}
        </Label>
        <Label
          className={`text-lg uppercase ${position === 'above' && 'hidden'}`}
        >
          {author}
        </Label>
        <Label className="inline-block">{release_date}</Label>
      </div>
    </div>
  );
};

export default FilmComponent;
