/* eslint-disable no-restricted-imports */
// import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { IoMdSearch } from 'react-icons/io';

import { Input } from '@/components';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const SearchButton = () => {
  return (
    <div className="lg:hidden">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="w-10">
            <IoMdSearch />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 lg:hidden">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="grid grid-cols-1 items-center gap-4">
                <Input placeholder="Search Film..." />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default SearchButton;
