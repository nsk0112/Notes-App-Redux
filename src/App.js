import './App.scss';
import Input from './components/Input';
import InputBottom from './components/InputBottom';
import Notes from './components/Notes';
import Search from './components/Search';
import { useSelector } from "react-redux";

function App() {
  const bgColor = useSelector(state => state.notes.activeColor);

  return (
    <div className="App">
      <div className='left' style={{ backgroundColor: bgColor }}>
        <Input />
        <InputBottom />
      </div>
      <div className='right'>
        <Search />
        <Notes />
      </div>
    </div>
  );
}

export default App;
