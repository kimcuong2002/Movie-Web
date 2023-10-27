/* eslint-disable no-restricted-imports */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import demonslayer from '../assets/images/demonslayer.jpeg';
import FilmComponent from '@/components/film-component/film-component';

const HotFilmDatas = [
  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },
  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },
  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },
  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },
  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },

  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },
  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },
  {
    thumbnail: demonslayer,
    nameFilm: 'Demon Slayer',
    episode: '12',
  },
];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  return (
    <div>
      <Slider {...settings}>
        {HotFilmDatas.map((el) => (
          <div key={el.nameFilm}>
            <FilmComponent
              episode={el.episode}
              nameFilm={el.nameFilm}
              thumbnail={el.thumbnail}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
