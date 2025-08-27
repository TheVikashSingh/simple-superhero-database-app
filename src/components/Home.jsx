import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import SearchedHero from './SearchedHero';


const Home = () => {

const [searchID, setSearchID] = useState("");
const [heroData, setHeroData] = useState([]);
const [searchAttempted, setSearchAttempted] = useState(false);
const queryClient = useQueryClient();

const {data,isPending,isError,error} = useQuery({
  queryKey: ["all-supes-id"],
  queryFn: async () => {
    const response1 = await fetch("http://localhost:3000/superheroes_male");
    const response2 = await fetch("http://localhost:3000/superheroes_females");

    if(!response1.ok){
      throw new Error("Failed in fetching male superheroes");
    }

    if(!response2.ok){
      throw new Error("Failed in fetching female superheroes");
    }

    const data1 = await response1.json();
    const data2 = await response2.json();
    const heroes = [...data1, ...data2];

    return heroes;
  }
});



const {mutate} = useMutation(
  {
    mutationFn: async (newHero) => {
      const response = await fetch("http://localhost:3000/superheroes_male", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHero)
    });
    if(!response.ok){
      throw new Error("Failed to add a Hero");
    }
    return response.json();
  },

  onSuccess: () => {
    alert("Hero added Successfully!");
    queryClient.invalidateQueries({queryKey:["all-supes-id"]});
  }
});

  
  const deleteMaleHeroMutation = useMutation({
    mutationFn: async (deleteMaleHeroID) => {
      const response = await fetch(`http://localhost:3000/superheroes_male/${deleteMaleHeroID}`, {
        method: "DELETE"
      });
      if(!response.ok){
        throw new Error("Failed to delete hero");
      }
      return deleteMaleHeroID;
    },
    onSuccess: (deleteMaleHeroID) => {
      console.log(`${deleteMaleHeroID} deleted!`);
      queryClient.invalidateQueries({queryKey: ["all-supes-id"]});
    }
  });
  

      if(isPending){
      return <h2>Data Loading...</h2>
    }

    if(isError){
      return <h2>Error Happened!</h2>
    }


    

  function fillInput(id){
    inputField.value = id;
    setSearchID(id);
  }


  function handleIDInput(){
    setHeroData(data.filter((value,index) => (value.id === searchID)));
    setSearchAttempted(true);
  }

  function handleChange(e){
    setSearchID(e.target.value);
  }

  function handleAddRandomMaleHero(){
    const newHero = {
    "id": "M97",
    "Name": "Hihi Man",
    "gender": "Male",
    "age": "no data",
    "weight_in_kg": "no data",
    "backstory": "Was just born",
    "powers": "Extreme Laziness",
    "extraterrestrial": false,
    "weakness": "pizza",
    "universe": "Marvel"
  };
    mutate(newHero);
  }

  function handleDeleteRandomMaleHero(){
    deleteMaleHeroMutation.mutate("M97");
  }

  return (
    <div>
    <div style={{display:"flex", justifyContent:"center"}}><h1>Welcome to Superhero World!</h1></div>
    <span style={{display:"flex", justifyContent:"center"}}>The list of all Superheroes are: </span>
    <div>
      <ul style={{listStyle: "none", display:"flex", flexWrap:"wrap", gap: "10px"}}>
        {data.map((heroes) => 
        <li key={heroes.id} style={{border:"1px solid black", padding:"15px"}} 
          onClick={() =>fillInput(heroes.id)}>
          {heroes.id}
        </li>)}
      </ul>
    </div>
    {/* <button onClick={handleAddRandomMaleHero}>Add a Random Male Hero</button>
    <button onClick={handleDeleteRandomMaleHero}>Delete a Random Male Hero</button> */}
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", gap:"10px"}}>
      <label>
        <button onClick={handleIDInput}>Enter ID:</button>
        <input id='inputField' type='text' maxLength="3" value={searchID} onChange={(e) => handleChange(e)}/>
      </label>
    </div>
    <div>
      {heroData.length > 0 ? <SearchedHero detailedArr = {heroData} /> : (searchAttempted && <h3>No hero</h3>)}
    </div>
    </div>
  )
}

export default Home