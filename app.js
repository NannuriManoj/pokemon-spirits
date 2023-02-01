const section=document.querySelector("#container");
const source='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
for(let i=1;i<=151;i++){
    const pokemon=document.createElement('div');
    const label=document.createElement('span');
    label.innerText=`#${i}`;
    const newImg=document.createElement('img');
    newImg.src=`${source}${i}.png`;
    pokemon.appendChild(newImg)
    pokemon.appendChild(label);
    section.appendChild(newImg);
}