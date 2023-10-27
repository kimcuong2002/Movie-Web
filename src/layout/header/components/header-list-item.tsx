/* eslint-disable no-restricted-imports */
import { Link } from 'react-router-dom';

import { HEADER_LIST_ITEMS } from '../constant';
import { Button } from '@/components/ui/button';
import { useActiveMenu } from '@/hooks';

const HeaderListItem = () => {
  const { checkActive } = useActiveMenu();
  return (
    <div className="hidden lg:flex w-3/5 justify-between items-center ">
      {HEADER_LIST_ITEMS.map((el) => (
        <div key={el.id}>
          <Link
            to={el.link}
            key={el.id}
            className="group"
            isActive={checkActive(el.link)}
          >
            <Button variant="ghost" className="uppercase text-ellipsis">
              {el.headerItemName}
            </Button>
          </Link>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default HeaderListItem;
