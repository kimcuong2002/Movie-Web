import { create } from 'zustand';

import { FilmData } from '../services/types';

type FilmStore = {
  listFilm: FilmData[];
  setListFilm: (_: FilmData[]) => void;
};

const useFilmStore = create<FilmStore>()((set) => ({
  listFilm: [],
  setListFilm: (data: FilmData[]) => {
    set({ listFilm: data });
  },
}));

export default useFilmStore;
