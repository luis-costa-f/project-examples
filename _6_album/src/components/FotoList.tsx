import Foto from "./Foto"
import { IFoto, IFotos } from "./Interfaces"

const FotoList = ({ fotos }: IFotos) => {
    return (
        <div className="album">
            {
                fotos && fotos.map((foto: IFoto) => (
                    <Foto key={foto.id} alt_description={foto.alt_description} urls={foto.urls} />
                ))
            }
        </div>
    )
}

export default FotoList
