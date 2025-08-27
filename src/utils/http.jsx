async function fetchMaleSupes(){
    let url = "http://localhost:3000/superheroes_male";
    const response = await fetch(url);
    if(!response.ok){
        const error = new Error("An Error occured when fetching Male Supes!!!");
        error.code = response.status;
        error.info = await response.json();
        throw error;
    }

    const data = await response.json();

    return data;
}

export default fetchMaleSupes
