import { useEffect, useState } from 'react';
import FotoAmpliada from './components/FotoAmpliada';
import FotoList from './components/FotoList';
import { IFotos } from './components/Interfaces';
import Searchbar from './components/Searchbar';
import { searchImageByCategory } from './services/RandomImage';

const App = (): JSX.Element => {

    const [query, setQuery] = useState<string>("")
    const [categoria, setCategoria] = useState<string>("")
    const [fotos, setFotos] = useState<IFotos>([])

    useEffect(() => {
        async function fetchData() {
            setFotos(await searchImageByCategory(query, categoria))
        }

        fetchData()
    }, [query, categoria])

    return (
        <div className='container'>
            <Searchbar />
            <FotoList fotos={fotos} />
            <FotoAmpliada />
        </div>
    )
}

export default App
