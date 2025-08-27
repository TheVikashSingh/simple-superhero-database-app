async function fetchFemaleSupes(){

    const response = await fetch("http://localhost:3000/superheroes_females");

    if(!response.ok){
        const error = new Error("An Error has occurred when fetching the Female Superheroes");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const data = await response.json();

    return data;
}

export default fetchFemaleSupes
