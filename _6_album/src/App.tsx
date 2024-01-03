import { useEffect, useState } from 'react';
import FotoAmpliada from './components/FotoAmpliada';
import FotoList from './components/FotoList';
import { IFotos } from './components/Interfaces';
import Searchbar from './components/Searchbar';
import { searchImageByCategory } from './services/RandomImage';

const App = (): JSX.Element => {

    const [query, setQuery] = useState<string>("");
    const [categoria, setCategoria] = useState<string>("");
    const [fotos, setFotos] = useState<IFotos>();
    const [fotoAmpliada, setFotoAmpliada] = useState<IFotos | null>(null);
    const [activateSearch, setActivateSearch] = useState<boolean>(false)

    useEffect(() => {
        async function fetchData() {
            setFotos(await searchImageByCategory("", ""))
        }

        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            setFotos(await searchImageByCategory(query, categoria))
        }

        if (activateSearch){
            fetchData();
            setActivateSearch(false);
        }
    }, [activateSearch])

    return (
        <div className='container'>
            <Searchbar setActivateSearch={setActivateSearch} setCategoria={setCategoria} setQuery={setQuery}/>
            <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada} />
            {fotoAmpliada && <FotoAmpliada dados={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />}
        </div>
    )
}

export default App
