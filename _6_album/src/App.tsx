import { useEffect, useState } from 'react';
import FotoAmpliada from './components/FotoAmpliada';
import FotoList from './components/FotoList';
import Searchbar from './components/Searchbar';
import { searchImageByCategory } from './services/RandomImage';

const App = (): JSX.Element => {

    const [query, setQuery] = useState<string>("")
    const [categoria, setCategoria] = useState<string>("")

    useEffect(() => {
        async function fetchData () {
            searchImageByCategory(query, categoria);
        }

        fetchData()
    }, [query, categoria])

    return (
        <div>
            <Searchbar />
            <FotoList />
            <FotoAmpliada />
        </div>
    )
}

export default App
