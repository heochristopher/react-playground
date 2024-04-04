const colors: any = {
    normal: "bg-[#aaaa99]",
    fire: "bg-[#ff4422]",
    water: "bg-[#3399ff]",
    electric: "bg-[#ddbb55]",
    grass: "bg-[#77cc55]",
    ice: "bg-[#66ccff]",
    fighting: "bg-[#bb5544]",
    poison: "bg-[#aa5599]",
    ground: "bg-[#ddbb55]",
    flying: "bg-[#8899ff]",
    psychic: "bg-[#ff5599]",
    bug: "bg-[#aabb22]",
    rock: "bg-[#bbaa66]",
    ghost: "bg-[#6666bb]",
    dragon: "bg-[#7766ee]",
    dark: "bg-[#775544]",
    steel: "bg-[#aaaabb]",
    fairy: "bg-[#ee99ee]"
}

export default function PokeType(props: any) {
    return (
        <main className={`flex rounded items-center justify-center ${colors[props.type]}`}>
            <h3 className="px-2 py-1">{props.type.toUpperCase()}</h3>
        </main>
    )
}