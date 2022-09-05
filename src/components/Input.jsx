import './Input.scss';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Input() {
    const [note, setNote] = useState("");
    const dispatch = useDispatch();
    const color = useSelector(state => state.notes.activeColor);

    const notify = () => {toast.warn("Please select a color!", {
        position: toast.POSITION.BOTTOM_LEFT
      })}

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note) return;
        if (!color) {
            notify();
            return;
        }
        dispatch(addNote({ note, color }));
        setNote("");
    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            e.preventDefault();
            handleSubmit(e);
        }
    }

    return (
        <div className='input'>
            <h1 className='header'>My Notes</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    type="textarea"
                    className='note'
                    value={note}
                    cols="5"
                    rows="40"
                    autoFocus
                    onChange={(e) => setNote(e.target.value)}
                    onKeyDown={onEnterPress}
                    style={{ backgroundColor: color }} />
            </form>
            <ToastContainer autoClose={2500}/>
        </div>
    )
}

export default Input