async function fetchData(){

    try{
   const nomepokemon = document.getElementById("pknome").value.toLowerCase();
   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomepokemon}`);
   
   if(!response.ok){
       throw new Error ("Impossibile trovare il pokemon. Verificare che il nome sia stato inserito correttamente");
   }

   const data = await response.json();
   const pkSprite = data.sprites.front_default;
   const imgElement = document.getElementById("pokeSprite");

   imgElement.src = pkSprite;
   imgElement.style.display= "block";
   }
   catch(error){
       console.error(error);
   }

}