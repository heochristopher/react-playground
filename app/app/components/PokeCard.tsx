import Image from 'next/image'
import PokeType from './PokeType';

//{id}: {id: number}, {name}: {name: string}, {sprite}: {sprite: string}, {types}: {types: string[]}

export default function PokeCard(props: any) {
  return (
      <main className="flex flex-col w-48 rounded items-center justify-center ">
          <Image
              src={props.sprite}
              width={500}
              height={500}
              alt={props.name + "'s sprite"}
          />
      <h2 className="text-2xl mb-4">{props.name}</h2>
      <div className="flex flex-row space-x-4">{props.types.map((type: any) =>
         <PokeType
            key={type.slot}
            type={type.type.name}
          />
    )}</div>
    </main>
  );
}
