import { useMemo } from 'react';

import { CiPlay1 } from 'react-icons/ci';
import { Link, useParams } from 'react-router-dom';

// eslint-disable-next-line no-restricted-imports
import SectionTag from '@/components/section-tag/section-tag';
import { useFilmDetailQuery, useFilmsListQuery } from '@/features/film';
import { Episode } from '@/features/film';
// eslint-disable-next-line no-restricted-imports
import FilmComponent from '@/features/film/components/film-component';
import { getImage } from '@/utils';

const FilmDetail: React.FC<Episode> = () => {
  const params = useParams();

  const { data } = useFilmDetailQuery(params.slug!);
  const { data: filmData } = useFilmsListQuery();
  const hotFilm = filmData?.items.slice(0, 10);

  const slug = useMemo(() => {
    if (
      !data ||
      (data && !data.episodes.length && !data.episodes[0].server_data.length)
    )
      return '';

    return data.episodes[0].server_data[0].slug;
  }, [data]);

  const actor = useMemo(() => {
    const actorData = data?.movie.actor;
    return actorData;
  }, [data]);

  const country = useMemo(() => {
    const countryData = data?.movie.country;
    return countryData;
  }, [data]);

  return (
    <div className="grid grid-cols-12 gap-4  bg-opacity-5 w-">
      <div className="col-span-12 xl:col-span-9 grid grid-cols-12 gap-4 bg-[#181818] p-8 rounded-xs">
        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="h-full col-span-12 md:col-span-5 grid grid-cols-12 lg:h-4/5">
            <img
              src={data?.movie.thumb_url}
              alt="thumb"
              className="col-span-12 w-full rounded-xs"
            />
            <Link
              to={`${slug}`}
              className="h-14 col-span-12  w-full text-2xl flex justify-center items-center py-2 rounded-md bg-red-500 mt-4"
            >
              <button className="flex justify-center items-center py-2  ">
                <CiPlay1 />
                Xem Phim
              </button>
            </Link>
          </div>
          <div className="col-span-12 md:col-span-7 mt-4 ">
            <p className="text-3xl text-[#A3765D]">{data?.movie?.name}</p>
            <p className="text-xl my-4 text-white">{data?.movie.origin_name}</p>
            <div className="bg-[#222222] mt-2 p-4">
              <div className="grid grid-cols-12">
                <p className="text-gray text-[#9ca3af] col-span-5">
                  Trạng thái
                </p>
                <label className="col-span-7 text-white">
                  {data?.movie.episode_current}
                </label>
              </div>
              <div className="grid grid-cols-12 mt-2">
                <p className="text-gray text-[#9ca3af] col-span-5">
                  Thời lượng
                </p>
                <label className="col-span-7 text-white">
                  {data?.movie.time}
                </label>
              </div>
              <div className="grid grid-cols-12 mt-2">
                <p className="text-gray text-[#9ca3af] col-span-5">Số tập</p>
                <label className="col-span-7 text-white">
                  {data?.movie.episode_total}
                </label>
              </div>
              <div className="grid grid-cols-12 mt-2">
                <p className="text-gray text-[#9ca3af] col-span-5">
                  Tình trạng
                </p>
                <label className="col-span-7 text-white">
                  {data?.movie.status}
                </label>
              </div>
              <div className="grid grid-cols-12 mt-2">
                <p className="text-gray text-[#9ca3af] col-span-5">Ngôn ngữ</p>
                <label className="col-span-7 text-white">
                  {data?.movie.lang}
                </label>
              </div>
              <div className="grid grid-cols-12 mt-2">
                <p className="text-gray text-[#9ca3af] col-span-5">
                  Năm sản xuất
                </p>
                <label className="col-span-7 text-white">
                  {data?.movie.year}
                </label>
              </div>
              <div className="grid grid-cols-12 mt-2">
                <p className="text-gray text-[#9ca3af] col-span-5">
                  Năm sản xuất
                </p>
                <label className="col-span-7 text-white">
                  {country &&
                    country.map((country) => (
                      <p key={country.id}>{country.name}</p>
                    ))}
                </label>
              </div>
              <div className="grid grid-cols-12 mt-2">
                <p className="text-gray text-[#9ca3af] col-span-5">Diễn Viên</p>
                <label className="col-span-7 text-white">
                  {actor && actor.map((actor) => <p key={actor}>{actor}</p>)}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 bg-[#222222] p-4">
          <p className="text-xl uppercase text-center text-white">
            Nội dung film
          </p>
          <p
            className="text-[#9ca3af] mt-4"
            dangerouslySetInnerHTML={{ __html: data?.movie.content || '' }}
          ></p>
        </div>
      </div>
      <div className="hidden xl:block col-span-3">
        <SectionTag nameTag="film sắp chiếu" />
        <div className="grid grid-cols-12 gap-2 ">
          {hotFilm?.map((el) => (
            <div
              key={el._id}
              className="col-span-12  odd:bg-[rgba(34,34,34,1)]"
            >
              <FilmComponent
                name={el.name}
                position="horizontal"
                thumb_url={getImage(el.thumb_url)}
                slug={el.slug}
                year={el.year}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmDetail;
