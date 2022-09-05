import './Search.scss'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchFilter } from "../redux/notes/notesSlice";


function Search() {
    const [searchWord, setSearchWord] = useState("");
    const dispatch = useDispatch();
    // const logsearch = useSelector(state => state.notes.searchFilter)

    const handleChange = (event) => {
        // console.log(searchWord);
        setSearchWord(event.target.value);
        // console.log(searchWord);
        dispatch(changeSearchFilter(searchWord));
        // console.log(logsearch);
    }

    return (
        <div className='search'>
            <input
                type="text"
                placeholder='Search for notes...'
                value={searchWord}
                onChange={handleChange} />
        </div>
    )
}

export default Search