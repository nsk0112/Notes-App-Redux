import './Notes.scss'
import { useSelector } from "react-redux";

function Notes() {
    const elements = useSelector(state => state.notes.notesList);
    const filterWord = useSelector(state => state.notes.searchFilter);

    return (
        <div className='notes'>
            {
                elements.filter(element => element.note.includes(filterWord)).map((element) => (
                    <div className="note" key={element.note} >
                        <p className="text" style={{ backgroundColor: element.color }}>{element.note}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Notes;
