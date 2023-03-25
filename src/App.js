
import { useState } from 'react';
import './App.css';

import ListTask from './components/listTask/ListTask';
import NavbarP from './components/navbar/NavbarP';

function App() {
  const [status, setStatus] = useState("all")
  console.log(status)
  return (
    <div className="App">
      <NavbarP setStatus={setStatus} />

      <ListTask status={status} />

    </div>
  );
}

export default App;