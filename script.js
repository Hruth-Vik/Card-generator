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
    const imgSrc=data.sprites.other.dream_world.front_default;
    const pokeName=data.name;
    const statAttack=data.stats[1].base_stat;
    const statDefence=data.stats[2].base_stat;
    const statSpeed=data.stats[5].base_stat;
    card.innerHTML=`
    <p class="hp">
          <span>HP</span>
          ${hp}
        </p>
        <div id="img_div">
          <img src=${imgSrc} alt="" />
        </div>
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
          <span>type 1</span>
          <span>type 2</span>
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>attacks</p>
          </div>
          <div>
            <h3>${statDefence}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>`;
}

btn.addEventListener("click",getPokedata);

window.addEventListener("load",getPokedata);
