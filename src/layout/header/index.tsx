import { ChangeEvent, useEffect, useState } from 'react';

import HeaderListItem from './components/header-list-item';
import MenuButton from './components/menu-button';
import ProfileButton from './components/profile-button';
import SearchButton from './components/search-button';
import { ThemeButton } from './components/theme-button';
import motchill from '../../assets/images/motchill.png';
import { Input } from '@/components';
import { useFilmStore } from '@/features/film';
import { useDebounce } from '@/hooks';

const HeaderComponent = () => {
  const listFilm = useFilmStore((state) => state.listFilm);
  const setListFilm = useFilmStore((state) => state.setListFilm);

  const [searchFilm, setSearchFilm] = useState('');

  const debounceValue = useDebounce(searchFilm, 1000);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchFilm(e.target.value);
  };

  useEffect(() => {
    const result = listFilm.filter(
      (f) => f.name?.toLowerCase().includes(debounceValue.toLowerCase()),
    );

    setListFilm(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceValue]);

  return (
    <>
      <div className="w-full bg-[#333333] flex justify-center items-center px-4">
        <div className="w-full flex justify-between items-center py-5 md:w-4/5 lg:w-4/5">
          <MenuButton />
          <img src={motchill} alt="logo" className="w-28 lg:w-40" />
          <form>
            <Input
              placeholder="Search film..."
              className="hidden w-80 lg:block"
              value={searchFilm}
              onChange={handleChangeInput}
            />
          </form>
          <div className="flex justify-between items-center gap-4">
            <SearchButton />
            <ThemeButton />
            <ProfileButton />
            {}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex bg-[#2d2d2d] justify-center items-center py-3">
        <HeaderListItem />
      </div>
    </>
  );
};

export default HeaderComponent;
