import { ArtistDetail, Home } from '../../pages';

export const appRoutes = [
  {
    path: '/',
    name: 'home',
    component: <Home />
  },
  {
    path: '/detailed/:artistId',
    name: 'artist Detail',
    component: <ArtistDetail />
  }
];
