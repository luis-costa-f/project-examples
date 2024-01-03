import { IFoto } from "./Interfaces"

const Foto = (dados: IFoto) => {    
    return (
        <div className="foto">
            <img src={dados.urls.small} alt={dados.alt_description} />
        </div>
    )
}

export default Foto
