import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'sf-components';

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <sf-counter start={1} step={5}></sf-counter>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <sf-checkbox label="Check me"></sf-checkbox>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
