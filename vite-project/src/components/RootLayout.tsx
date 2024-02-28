import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { IRoute } from '../interfaces';

const links: IRoute[] = [
     {
      id: 1,
       name: "Random beer",
       path: "/",
     },
     {
       id: 2,
       name: "Search Page",
       path: "/search",
     },
   ];
const RootLayout = () => {
  return (
    <>
      <Header links={links} />
      <main>
        <Outlet />
      </main>
   
    </>
  );
}

export default RootLayout