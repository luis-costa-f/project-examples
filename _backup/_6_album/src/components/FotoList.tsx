import Foto from "./Foto"
import { IFotos, IImageApi } from "./Interfaces"

const FotoList = ({ fotos, setFotoAmpliada }: IFotos) => {
    return (
        <div className="album">
            {
                fotos && fotos.map((foto: IImageApi) => (
                    <Foto key={foto.id} dados={foto} setFotoAmpliada={setFotoAmpliada}/>
                ))
            }
        </div>
    )
}

export default FotoList
