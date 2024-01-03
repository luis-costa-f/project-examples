import { categorias } from "./dados"

const Searchbar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar fotos..." />
            <button >Pesquisar</button>
            <select>
                {
                    categorias.map((categoria) => (
                        <option value={categoria} key={categoria}>
                            {categoria}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default Searchbar
