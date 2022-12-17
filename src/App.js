import logo from './logo.svg';
import './App.css';
import { FolderComponent } from './Components/FolderComponent';
import data from './Data/directory.json'
import { Folder } from './Components/Folder';

function App() {
  return (
    data.map(item => {
      return <Folder explorer={item} />
    })
  );
}

export default App;
