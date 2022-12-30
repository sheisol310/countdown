import React from 'react';
import CountdownTimer from './CountdownTimer'; // import the CountdownTimer component
import Photo from './Photo'; // import the CountdownTimer component
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/photo" element={<Photo />} />
      <Route path="/countdown" element={ <CountdownTimer />} />
    </Routes>
  );
}

export default App;