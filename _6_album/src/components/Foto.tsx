import { IFoto } from "./Interfaces"

const Foto = ({setFotoAmpliada, dados}: IFoto) => {    
    return (
        <div className="foto" onClick={() => setFotoAmpliada(dados)}>
            <img src={dados.urls.small} alt={dados.alt_description} />
        </div>
    )
}

export default Foto
