import { DetailsPage, MainPage } from "../pages";

export const appRoutes = [
  {
    path: "/",
    name: "main",
    component: <MainPage />,
  },
  {
    path: "/detailed/:artistId",
    name: "detailed",
    component: <DetailsPage />,
  },
];
