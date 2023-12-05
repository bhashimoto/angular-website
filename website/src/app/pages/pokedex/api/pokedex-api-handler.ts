
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

async function getPokemonList(limit:number, offset:number):Promise<[next: string, pokemons: pokemon[]]> {
    const url = `${baseURL}pokemon?limit=${limit.toString()}&offset=${offset.toString()}`;
    //console.log(url);
    return await getPokemonListFromUrl(url);
}

async function getPokemonListFromUrl(url:string):Promise<[next: string, pokemons: pokemon[]]>{
    var ret:pokemon[] = [];

    const jsonData = await (await fetch(url)).json();
    //console.log(jsonData);
    var pokemonList:string[] = jsonData.results?.map((result: { url: string; }):string => {
        return result.url;
    })
    
    ret = await  Promise.all(pokemonList.map(async (url) => {
        return await getPokemon(url);
    }));

    return [jsonData.next, ret];
}

async function getPokemon(input:string | number):Promise<pokemon>{
    const url = (typeof input === "number") ?`${baseURL}pokemon/${input}` : input ;
    //console.log(url);
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
export { getPokemon, getPokemonList, getPokemonListFromUrl };