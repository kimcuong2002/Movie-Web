import { useMemo } from 'react';

import { FaRegStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/order
import { useFilmDetailQuery, useFilmsListQuery } from '@/features/film';

// eslint-disable-next-line no-restricted-imports
import FilmComponent from '@/features/film/components/film-component';
import { getImage } from '@/utils';

const FilmVideo = () => {
  const params = useParams();
  const { data } = useFilmDetailQuery(params.slug!);
  const { data: listFilm } = useFilmsListQuery();

  const name = data?.movie.name;
  const originName = data?.movie.origin_name;
  const year = data?.movie.year;
  const content = data?.movie.content;
  const country = data?.movie.country;

  const listEpisode = useMemo(() => {
    if (!data || (data && !data.episodes.length)) return [];

    return data.episodes[0].server_data;
  }, [data]);

  const linkVideo = useMemo(() => {
    if (!data || (data && !data.episodes.length)) return '';

    return data.episodes[0].server_data.find((i) => i.slug === params.id)
      ?.link_embed;
  }, [data, params]);

  const iframeProps = {
    src: linkVideo,
    name: 'header',
    className: 'w-full h-full',
    allowFullScreen: true,
  };

  return (
    <div>
      <div className="relative group w-full h-[700px]">
        <iframe {...iframeProps} title="Film video" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <p className="uppercase font-bold text-lg">danh sách phát: </p>
        {listEpisode.map((episode) => (
          <Link key={episode.slug} to={`/${params.slug}/${episode.slug}`}>
            <button
              className={`py-1 px-4 bg-[#A3765D] ${
                episode.name === params.id ? 'bg-slate-500' : ''
              } rounded-sm mt-2`}
            >
              Tập {episode.name}
            </button>
          </Link>
        ))}
      </div>
      <hr className="my-4" />
      <p className="text-2xl text-[#A3765D] font-bold">{name}</p>
      <p className="text-xl text-gray font-bold my-4">
        {originName}({year})
      </p>
      <p className="text-xl text-gray font-bold my-4">
        {country?.map((country) => <p key={country.id}>{country.name}</p>)}
      </p>
      <p
        className="text-[#9ca3af] bg-[#222222] p-4"
        dangerouslySetInnerHTML={{ __html: content || '' }}
      ></p>
      <div className="flex items-center gap-2 my-4">
        <FaRegStar />
        Có thể bạn muốn xem
      </div>
      <>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={5}
          coverflowEffect={{
            rotate: 50,
            stretch: 5,
            depth: 100,
            modifier: 4,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper w-full"
        >
          {listFilm &&
            listFilm.items?.map((el) => (
              <div key={el._id}>
                <SwiperSlide>
                  <FilmComponent
                    name={el.name}
                    thumb_url={getImage(el.thumb_url)}
                    year={el.year}
                    slug={el.slug}
                  />
                </SwiperSlide>
              </div>
            ))}
        </Swiper>
      </>
    </div>
  );
};

export default FilmVideo;
