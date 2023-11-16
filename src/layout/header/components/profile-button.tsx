import { BiLogIn } from 'react-icons/bi';
import { ImProfile } from 'react-icons/im';

import { Avatar, AvatarFallback, AvatarImage } from '@/components';
import { Button } from '@/components';
import { Popover, PopoverContent, PopoverTrigger } from '@/components';

const ProfileButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="grid grid-cols-1 items-center gap-4">
              <Button>
                <ImProfile className="mr-2 h-4 w-4" /> View Profile
              </Button>
            </div>
            <div className="grid grid-cols-1 items-center gap-4">
              <Button>
                <BiLogIn className="mr-2 h-4 w-4" /> Log out
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ProfileButton;
