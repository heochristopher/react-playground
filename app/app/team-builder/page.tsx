'use client'

import Image from "next/image";
import Link from "next/link";
import PokeCard from "../components/PokeCard";
import { useState } from "react";


export default function TeamBuilder(pokemonName: string) {
  const [hidden, setHidden] = useState(true)
  const [found, setFound] = useState(false)
  const [pokemon, setPokemon] = useState(
    {id: null, name: null, sprite: null, types: null}
  )
  const [team, setTeam] = useState<any[]>([])
  async function submit(formData: any) {
    const query = formData.get("query")
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
    if (res.status !== 200) {
      setFound(false)
      setHidden(false)
      setTimeout(()=> {setHidden(true)}, 2000)
    } else {
      const data = await res.json()
      setFound(true)
      setPokemon(
        {
          id: data.id,
          name: data.name,
          sprite: data["sprites"]["other"]["official-artwork"]["front_default"],
          types: data.types 
        }
      )
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24 relative">
      <Link href="/" className="text-4xl ease-in duration-150 hover:text-slate-300 ">Poke DB</Link>
      <h2 className="text-2xl my-24">Team Builder</h2>
      <h2 className="text-xl my-24">Team</h2>
      <ul className="flex flex-row space-x-4 border-y-1 mb-16">
        {team.map((pokemon: any) =>
          <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprite}
              types={pokemon.types}
            />
        )}
      </ul>
      <label htmlFor="name" className="mb-6">Search (by name)</label>
      <form action={submit} className="flex flex-row space-x-4 mb-16">
        <input type="text" name="query" className="text-black"/>
        <button type="submit" className="ease-in duration-150 px-2 py-1 outline outline-indigo-700 rounded hover:bg-indigo-700">Submit</button>
      </form>
      <h3 className={`text-xl px-2 py-1 rounded bg-red-700  ${hidden ? "hidden" : "block"}`}>Pokemon not found</h3>
      {
        found ?
          <button onClick={() => {setTeam([...team, {
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon.sprite,
            types: pokemon.types
          }])
          }}>
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              sprite={pokemon.sprite}
              types={pokemon.types}
            />
          </button>
          :
          null
      }
      
    </main>
  );
}
