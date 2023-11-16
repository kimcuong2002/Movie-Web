import { FC } from 'react';

import { BsFillPlayCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import { Label } from '../../../components';
import { FilmType } from '@/features/film';

const FilmComponent: FC<FilmType> = ({
  _id,
  position = 'vertical',
  year,
  name,
  thumb_url,
  slug,
}) => {
  return (
    <div
      className={`${
        position === 'horizontal' && 'w-full grid grid-cols-12 h-32'
      }`}
    >
      <div
        key={_id}
        className={`relative group cursor-pointer overflow-hidden rounded-md ${
          position === 'horizontal' && 'col-span-4 w-full h-32 rounded-none'
        }`}
      >
        <img
          src={thumb_url}
          alt=""
          className={`top-0 left-0 w-full h-64 object-cover cursor-pointer group-hover:scale-125 transition-transform duration-300 ${
            position === 'horizontal' &&
            'col-span-4 border-2 solid border-white'
          }`}
        />
        <Label
          className={`text-left p-1 w-32 rounded-r-lg text-lg inline-block bg-[#A3765D] absolute top-[10%] translate-y-[-50%] ${
            position === 'horizontal' && 'text-xs w-[70] '
          }`}
        >
          Year: {year}
        </Label>
        <Link to={`/${slug}`}>
          <BsFillPlayCircleFill
            className="absolute top-1/2 left-1/2  translate-y-[-50%] translate-x-[-50%] text-6xl !hidden group-hover:!block scale-75 transition-transform duration-500"
            sx={{ fontSize: 80 }}
          />
        </Link>
        <Label
          className={`${
            position === 'above'
              ? 'absolute bottom-0 w-full text-white text-center left-1/2 translate-x-[-50%] py-1 text-lg bg-[rgba(0,0,0,0.7)] '
              : 'hidden'
          }`}
        >
          {name}
        </Label>
      </div>
      <p
        className={`!text-center h-32 col-span-8 w-full text-overflow-ellipsis-one white-space-nowrap text-black text-base uppercase cursor-pointer mt-2 dark:text-white ${
          position === 'above' ? 'hidden' : ''
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default FilmComponent;
