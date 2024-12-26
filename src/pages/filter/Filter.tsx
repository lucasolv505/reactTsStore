import Topo from "@/components/Topo"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "@/Context/ThemeContext"
import Footer from "@/components/Footer"

const games = [
    {
        id:0,
        name: 'Mass Effect 2',
        price: 78.99,
        genre: 'RPG',
        avaliable: true,
        cover:'/gamesCovers/mass-effect-2.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   
        id:1,
        name: 'Elden Ring',
        price: 29.90,
        genre: 'RPG',
        avaliable: true,
        cover:'/gamesCovers/elden-ring.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   
        id:2,
        name: 'Escape From Tarkov',
        price: 56.99,
        genre: 'FPS',
        avaliable: true,
        cover: '/gamesCovers/tarkov.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   
        id:3,
        name: 'Hades',
        price: 100.00,
        genre: 'RogueLike',
        avaliable: false,
        cover: '/gamesCovers/hades.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   
        id:4,
        name: 'Uncharted 2',
        price: 49.90,
        genre: 'Action/Adventure',
        avaliable: true,
        cover: '/gamesCovers/uncharted2.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   
        id:5,
        name: 'Death Stranding',
        price: 90.90,
        genre: 'Action/Adventure',
        avaliable: true,
        cover: '/gamesCovers/death-stranding.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   
        id:6,
        name: 'Call Of Dutty Modern Warfare 2',
        price: 100.90,
        genre: 'FPS',
        avaliable: true,
        cover: '/gamesCovers/mw2.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {   
        id:7,
        name: 'Dead Cells',
        price: 10.00,
        genre: 'RogueLike',
        avaliable: true,
        cover: '/gamesCovers/dead-cells.jpg',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    }
]


function Filter() {
    const [selectedGenre, setSelectedGenre] = useState('All')
    const [lines, setLines]=useState<any[]>([])
    const { theme } = useTheme()

    function GameLine({game}:{game:any}){
        return(

            <Link href={{
                pathname:`/product/${game.name.toLowerCase()}`,
                query: {cover:game.cover, price: game.price, name: game.name, genre: game.genre,avaliable: game.avaliable, id: game.id, desc: game.desc}
            }}
                >
                <div className="flex flex-row p-4 border-b-2 border-black" key={game.id}>

                    <div className="w-[100%] flex justify-center">
                        <img className="w-20" src={game.cover} alt={`${game.cover} cover`} /> 
                    </div>

                    <div className="w-[100%] text-center flex items-center justify-center" 
                    style={{
                        color: `var(--${theme === 'dark'?'lightestColor': 'bluedark'})`
                    }}>
                        {game.name}
                    </div>

                    <div className="w-[100%] text-center flex items-center justify-center"
                    style={{
                        color: `var(--${theme === 'dark'?'lightestColor': 'bluedark'})`
                    }}>
                        US${game.price.toFixed(2)}
                    </div>

                    <div className="w-[100%] text-center flex items-center justify-center"
                    style={{
                        color: `var(--${theme === 'dark'?'lightestColor': 'bluedark'})`
                    }}>
                        {game.genre}
                    </div>
                    
                </div>
            </Link>
        )
    }

    function createLine(genre:string){
        setSelectedGenre(genre)
        const filteredGames = genre === 'All'? games : games.filter((game:any)=> game.genre === genre)
        const gameLines = filteredGames.map((game:any)=> <GameLine key={game.id} game={game}/>)
        setLines(gameLines)
    }

    useEffect(()=>{
        createLine(selectedGenre)
    },[theme])

    return (
        <div>
            <Topo />

            <div className="p-4">
                <select value={selectedGenre} onChange={(e)=> {createLine(e.target.value)}}>
                    <option value="">Genre</option>
                    <option value="All">All</option>
                    <option value="RPG">RPG</option>
                    <option value="FPS">FPS</option>
                    <option value="Action/Adventure">Action/Adventure</option>
                    <option value="RogueLike">RogueLike</option>
                </select>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row w-[100%] bg-[var(--bluedark)] p-4 items-center">
                    <div className="w-full text-center text-white">Cover</div>
                    <div className="w-full text-center text-white">Title</div>
                    <div className="w-full text-center text-white">Price</div>
                    <div className="w-full text-center text-white">Genre</div>
                </div>
                {lines}
            </div>

            <Footer/>
        </div>
    )
}

export default Filter