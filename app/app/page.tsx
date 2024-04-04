import PokeCard from './components/PokeCard';
import Link from 'next/link'

export default async function Home() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.round(Math.random() * 1302)}`)
  const data = await res.json()
  return (
    <main className="flex min-h-screen flex-col items-center space-y-24 p-24">
      <Link href="/" className="text-4xl ease-in duration-150 hover:text-slate-300">Poke DB</Link>
      <PokeCard
        id={data.id}
        name={data.name}
        sprite={data["sprites"]["other"]["official-artwork"]["front_default"]}
        types={data.types}
      />
      <Link href="/team-builder" className="text-2xl ease-in duration-150 px-3 py-2 outline outline-indigo-700 rounded hover:bg-indigo-700 ">Team Builder</Link>
    </main>
  );
}
