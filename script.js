const url="https://pokeapi.co/api/v2/pokemon/";
const card=document.querySelector("#card");
const btn=document.querySelector("#btn");


let getPokedata=()=>{
    let id=Math.floor(Math.random()* 150) + 1;
    console.log(id);

    const finalUrl=url+id;
    console.log(finalUrl);
    fetch(finalUrl).then((response)=>response.json()).then((data)=>{
        generateCard(data);
        // console.log(data);
    });
};

// Generating cards
let generateCard=(data)=>{
    // getting necessary data and info to a variable
    console.log(data);
    const hp=data.stats[0].base_stat;
}

btn.addEventListener("click",getPokedata);

window.addEventListener("load",getPokedata);
