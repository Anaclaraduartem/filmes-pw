Interface Props{
busca:string,
    setBusca:React.Dispatch<React.SetStateAction<string>>

}

export default function Buscador({busca,setBusca}: Props){
    return(
        <div>
        <input
            value={busca}
            onChance =(evento) => setBusca(evento.target.value)}
            />
            <CgSearch/>
        </div>
    )
}
