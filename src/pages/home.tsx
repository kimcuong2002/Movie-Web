/* eslint-disable no-restricted-imports */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Pagination from '@/components/pagination/pagination';
import SectionTag from '@/components/section-tag/section-tag';
import { useFilmsListQuery } from '@/features/film';
import FilmComponent from '@/features/film/components/film-component';
import { getImage } from '@/utils';

const Home = () => {
  const { data } = useFilmsListQuery();
  const hotFilm = data?.items.slice(0, 11);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    gap: 10,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div>
      <>
        <SectionTag nameTag="Hot Film" />
        <Slider {...settings}>
          {data &&
            data.items?.map((el) => (
              <div key={el._id}>
                <FilmComponent
                  name={el.name}
                  thumb_url={getImage(el.thumb_url)}
                  year={el.year}
                  slug={el.slug}
                />
              </div>
            ))}
        </Slider>
      </>
      <div className="grid grid-cols-12 mt-5 gap-4">
        <div className="col-span-9 grid cols-span-12 ">
          <div className="col-span-12">
            <SectionTag nameTag="film bộ" />
            <div className="grid grid-cols-12 gap-4">
              {data &&
                data.items?.map((el) => (
                  <div key={el._id} className="col-span-3">
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
        <div className="col-span-3">
          <SectionTag nameTag="film sắp chiếu" />
          <div className="grid grid-cols-12 gap-2">
            {hotFilm?.map((el) => (
              <div key={el._id} className="col-span-12">
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
