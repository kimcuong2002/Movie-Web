/* eslint-disable no-restricted-imports */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import HeaderListItem from './components/header-list-item';
import MenuButton from './components/menu-button';
import ProfileButton from './components/profile-button';
import SearchButton from './components/search-button';
import { ThemeButton } from './components/theme-button';
import motchill from '../../assets/images/motchill.png';
import { Input } from '@/components/ui/input';

const HeaderComponent = () => {
  return (
    <>
      <div className="w-full bg-yellow-900 flex justify-center items-center px-4">
        <div className="w-full flex justify-between items-center py-5 md:w-4/5 lg:w-3/5">
          <MenuButton />
          <img src={motchill} alt="logo" className="w-28 lg:w-40" />
          <Input
            placeholder="Search film..."
            className="hidden w-80 lg:block"
          />
          <div className="flex justify-between items-center gap-4">
            <SearchButton />
            <ThemeButton />
            <ProfileButton />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-orange-900 justify-center items-center py-3">
        <HeaderListItem />
      </div>
    </>
  );
};

export default HeaderComponent;
