import { Label } from '@radix-ui/react-dropdown-menu';
import { Link } from 'react-router-dom';

import { rules, socials } from './constant';
import motchill from '../../assets/images/motchill.png';

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center text-white bg-black py-20">
      <div className="w-full flex flex-col px-10 text-left gap-5 md:grid grid-cols-3 lg:w-3/5">
        <div>
          <img src={motchill} alt="" className="w-48" />
          <Label className="text-justify">
            Motchill - Xem phim Online Vietsub chất lượng cao miễn phí, nhiều
            thể loại phim phong phú, đặc sắc, giao diện trực quan, thuận tiện,
            tốc độ tải nhanh, thường xuyên cập nhật các bộ phim mới.
          </Label>
        </div>
        <div className="flex flex-col items-center">
          <Label className="uppercase text-lg">Điều khoản</Label>
          {rules.map((el) => (
            <Link
              to={el.link}
              key={el.rulesName}
              className="text-base text-left"
            >
              {el.rulesName}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-center">
          <Label className="text-lg uppercase">Social</Label>
          {socials.map((el) => (
            <Link
              to={el.link}
              key={el.socialsName}
              className="text-base text-left"
            >
              {el.socialsName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
