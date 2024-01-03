import { ISearch } from "./Interfaces";
import { categorias } from "./dados";

const Searchbar = ({setActivateSearch, setCategoria, setQuery}: ISearch) => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Pesquisar fotos..." onChange={(e) => setQuery(e.target.value)}/>
            <button onClick={() => setActivateSearch(true)}>Pesquisar</button>
            <select onChange={(e) => {setCategoria(e.target.value); setActivateSearch(true);}}>
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
