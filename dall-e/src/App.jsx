import { Routes, Route } from "react-router-dom";
import App1 from './App1'
import App2 from './App2'


function App() {
  return (
    <Routes>
      <Route path="/" element={<App1/>}/>
      <Route path="/image" element={<App2/>}/>
    </Routes>
  );
}

export default App;
