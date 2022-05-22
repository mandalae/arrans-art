import './App.css';
import {useState, useEffect} from 'react';

function importAll(r) {
  return r.keys().map(r);
}

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/)));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <span className="headline">Arran's Art</span>
      </header>
      {images.map(image => {
        return <img src={image} className="photo var3" />;
      })}
    </div>
  );
}

export default App;
