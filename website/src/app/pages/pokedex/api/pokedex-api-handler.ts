
const baseURL = 'https://pokeapi.co/api/v2/';

type pokemon = {
    id: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    types: string[];
    stats: {
        hp: number;
        attack: number;
        defense: number;
        special_attack: number;
        special_defense: number;
        speed: number;
    };
    moves: string[];
};

async function getPokemon(id:string):Promise<pokemon>{
    const url = `${baseURL}pokemon/${id}`;
    console.log(url);
    const jsonData = await (await fetch(url)).json();
    
    const data:pokemon = {
        id: jsonData.id,
        name: jsonData.name,
        image: jsonData.sprites.other['official-artwork'].front_default,
        height: jsonData.height,
        weight: jsonData.weight,
        types: jsonData.types.map((typeSlot:any) => typeSlot.type.name),
        stats: {
            hp: jsonData.stats[0].base_stat,
            attack: jsonData.stats[1].base_stat,
            defense: jsonData.stats[2].base_stat,
            special_attack: jsonData.stats[3].base_stat,
            special_defense: jsonData.stats[4].base_stat,
            speed: jsonData.stats[5].base_stat,
        },
        moves: jsonData.moves.map((moveItem:any) => moveItem.move.name),
    }

    // Cleaning things
    data.name = data.name.slice(0,1).toUpperCase() + data.name.slice(1);
    data.moves.sort();

    return data;
    //console.log(data);
}

//getPokemon('1');
export type { pokemon };
export { getPokemon };