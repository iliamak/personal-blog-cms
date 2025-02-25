import React from 'react';
import PersonalBlog from './components/PersonalBlog';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <PersonalBlog />
      </div>
    </DataProvider>
  );
}

export default App;