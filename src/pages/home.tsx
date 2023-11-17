import { useEffect } from 'react';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SectionTag } from '@/components';
import { useFilmStore, useFilmsListQuery } from '@/features/film';
import { FilmComponent } from '@/features/film';
import { getImage } from '@/utils';

const Home = () => {
  const setListFilm = useFilmStore((state) => state.setListFilm);
  const listFilm = useFilmStore((state) => state.listFilm);
  const { data } = useFilmsListQuery();
  const hotFilm = data?.items.slice(0, 11);

  useEffect(() => {
    if (data) {
      setListFilm(data.items);
    }
  }, [data, setListFilm]);

  return (
    <div>
      <SectionTag nameTag="Hot Film" />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 1,
          depth: 50,
          modifier: 4,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-full"
      >
        {data &&
          data.items?.map((el) => (
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
      <div
        className="grid grid-cols-12 
    allowFullScreen: true,mt-5 gap-4"
      >
        <div className="col-span-12 xl:col-span-9 grid cols-span-12 ">
          <div className="col-span-12">
            <SectionTag nameTag="film bộ" />
            <div className="grid grid-cols-12 gap-4 md:col-span-12">
              {listFilm &&
                listFilm.map((el) => (
                  <div
                    key={el._id}
                    className="col-span-6 md:col-span-4 lg:col-span-2 xl:col-span-2"
                  >
                    <FilmComponent
                      position="above"
                      year={el.year}
                      thumb_url={getImage(el.thumb_url)}
                      name={el.name}
                      slug={el.slug}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="col-span-12 flex justify-center items-center mt-11">
            {/* <Pagination /> */}
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
    </div>
  );
};

export default Home;
