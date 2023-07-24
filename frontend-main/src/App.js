import './app.css';
import Header from './header/Header';
import Pane from './pane/Pane';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='middlecontainer'>
        <Pane/>
      </div>
    </div>
  );
}

export default App;
