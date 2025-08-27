import React from 'react';
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SuperHeroes_MalesRQ from "./components/SuperHeroes_MalesRQ";
import SuperHeroes_FemalesRQ from './components/SuperHeroes_FemalesRQ';
import Navbar from './components/Navbar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Navbar />
      <Home />
    </>
  },
  {
    path: "/Superheroes-Male",
    element: <>
    <Navbar />
    <SuperHeroes_MalesRQ />
    </>
  },
  {
    path: "/Superheroes-Female",
    element: <>
    <Navbar />
    <SuperHeroes_FemalesRQ />
    </>
  }
]);

const App = () => {
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App