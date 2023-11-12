import { CiPlay1 } from 'react-icons/ci';
import { useParams } from 'react-router-dom';

import { useFilmDetailQuery } from '@/features/film';

const FilmDetail = () => {
  const params = useParams();

  const { data } = useFilmDetailQuery(params.slug!);
  const actorData = data?.movie.actor;
  // const countryData = data?.movie.country?.[0];
  return (
    <div className="grid grid-cols-12 gap-4  bg-opacity-5 w-">
      <div className="col-span-9 grid grid-cols-12 gap-4 bg-[#181818] p-8 rounded-xs">
        <div className="col-span-12 grid grid-cols-12 gap-4">
          <div className="col-span-5 grid grid-cols-12">
            <img
              src={data?.movie.thumb_url}
              alt="thumb"
              className="col-span-12 w-full rounded-xs"
            />
            <button className="col-span-12 mt-6 w-full text-2xl flex justify-center items-center py-2 rounded-md bg-red-500">
              <CiPlay1 />
              Xem Phim
            </button>
          </div>
          <div className="col-span-7 ">
            <p className="text-3xl text-[#A3765D]">{data?.movie?.name}</p>
            <p className="text-xl text-white">{data?.movie.origin_name}</p>
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
                <p className="text-gray text-[#9ca3af] col-span-5">Diễn Viên</p>
                <label className="col-span-7 text-white">
                  {actorData && actorData.map((el) => <p key={el}>{el}</p>)}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="col-span-12 bg-[#222222] p-4">
          <p className="text-xl uppercase text-center">Nội dung film</p>
          <p
            className="text-[#9ca3af] mt-4"
            dangerouslySetInnerHTML={{ __html: data?.movie.content || '' }}
          ></p>
        </div>
      </div>
      <div className="col-span-3 bg-red-100"></div>
    </div>
  );
};

export default FilmDetail;
