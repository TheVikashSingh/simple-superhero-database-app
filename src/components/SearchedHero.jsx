import React from 'react'

const SearchedHero = (props) => {

    const heroArray = props.detailedArr[0];
    const name = heroArray.Name;
    const gender = heroArray.gender;
    const age = heroArray.age;
    const weight_in_kg = heroArray.weight_in_kg;
    const backstory = heroArray.backstory;
    const powers = heroArray.powers;
    const weakness = heroArray.weakness;

  return (
    <><br />
    <div style={{display:"flex", justifyContent:"center", fontFamily:"Verdana"}}>
    <div style={{border : "5px solid crimson", 
            display:"inline-block", flexWrap:"wrap",
            boxShadow:"5px 5px 5px red", backgroundColor:"black",
            color:"white",
            justifyContent:"center", alignItems:"center", 
            padding: "10px", borderRadius: "10px"}}>

        <span style={{fontWeight : "bold",color:"yellow"}}>Name: </span>
        <span>{name}</span>
        <br />
        <span style={{fontWeight : "bold",color:"yellow"}}>Gender: </span>
        <span>{gender}</span>
        <br />
        <span style={{fontWeight : "bold",color:"yellow"}}>Age: </span>
        <span>{age}</span>
        <br />
        <span style={{fontWeight : "bold",color:"yellow"}}>Weight: </span>
        <span>{weight_in_kg}kg</span>
        <br />
        <span style={{fontWeight : "bold"}}>Backstory: </span>
        <span style={{color:"red"}}>{backstory}</span>
        <br />   
        <span style={{fontWeight : "bold",color:"yellow"}}>Powers: </span>
        <span>{powers}</span>
        <br />   
        <span style={{fontWeight : "bold",color:"green"}}>Weakness: </span>
        <span>{weakness}</span>
    </div>    
    </div>
    </>
  )
}

export default SearchedHero