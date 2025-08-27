import React from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchFemaleSupes from '../utils/http_females';



const SuperHeroes_FemalesRQ = () => {

const {data, isPending, isError, error} = useQuery({
    queryKey: ["female-superheroes"],
    queryFn: fetchFemaleSupes,
  });


  if(isPending){
    return <h2>Data is Loading...</h2>
  }

  if(isError){
    return <h2 style={{color : "red"}}>
      An Error has occurred - {error.info?.message || "Failed to get Supes"}
      </h2>
  }

  return (
    <>
    <div className='hero-div'><h1>Female SuperHeroes Page</h1></div>
    <ul className='all-heroes'>
      {data.map((heroes) => <li key={heroes.id} className='each-hero'>
        <h2 style={{color: "rgba(221, 10, 130, 1)"}}>{heroes.Name}</h2> <h5>About:</h5>{heroes.backstory}
        </li>)}
      </ul>
    </>
  );
}

export default SuperHeroes_FemalesRQ