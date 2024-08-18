import { IFoto } from "./Interfaces";

const FotoAmpliada = ({dados, setFotoAmpliada}: IFoto) => {
    return (
        <div className="foto-ampliada-backdrop" onClick={() => setFotoAmpliada(null)}>
            <div className="foto-ampliada-container">
                <img src={dados.urls.regular} alt={dados.alt_description} />
            </div>
        </div>
    );
};

export default FotoAmpliada
