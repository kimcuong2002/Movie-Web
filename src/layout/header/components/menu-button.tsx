/* eslint-disable no-restricted-imports */
import { AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { HEADER_LIST_ITEMS } from '../constant';
import { Button } from '@/components';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const MenuButton = () => {
  return (
    <div className="lg:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-10 h-10">
            <AiOutlineMenu className="w-5 lg:hidden" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 lg:hidden">
          <div className="grid gap-4">
            <div className="grid gap-2">
              {HEADER_LIST_ITEMS.map((el) => (
                <Link to={el.link} key={el.id}>
                  <Button variant="ghost" className="uppercase">
                    {el.headerItemName}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MenuButton;
