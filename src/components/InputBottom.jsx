import './InputBottom.scss';
import { changeActiveColor } from "../redux/notes/notesSlice"
import { useDispatch } from "react-redux";

function InputBottom() {
    const dispatch = useDispatch();

    const changeColor = (color) => {
        dispatch(changeActiveColor(color));
    }



    return (
        <div className='input-bottom'>
            <div className="buttons">
                <button className='red button' onClick={() => changeColor("rgba(240,85,85,0.8)")}></button>
                <button className='green button' onClick={() => changeColor("rgba(146, 240, 126, 0.8)")}></button>
                <button className='blue button' onClick={() => changeColor("rgb(23, 157, 204,0.8)")}></button>
                <button className='yellow button' onClick={() => changeColor("rgb(255, 255, 139,0.8)")}></button>
            </div>
            {/* <button className='add-note'>Add Note</button> */}
        </div>
    )
}

export default InputBottom