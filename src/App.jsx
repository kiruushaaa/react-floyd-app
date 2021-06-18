import React from 'react';
import './App.css';
import DimensionalInputContainer from './components/inputs/DimensionalInput/DimensionalInputContainer';
import Controls from './components/Controls/Controls';
import MatrixInputContainer from './components/inputs/MatrixInput/MatrixInputContainer';
import ResultSectionContainer from './components/ResultSection/ResultSectionContainer';

const App = () => {
  return (
    <div className='App'>
      <h1 className='App-title'>Алгоритм Флойда-Уоршалла</h1>
      <p className='App-intro'>
        Алгоритм нахождения длин кратчайших путей между всеми парами вершин во
        взвешенном ориентированном графе.
      </p>

      <div className='alg-container'>
        <DimensionalInputContainer />
        <MatrixInputContainer />
        <Controls />
        <ResultSectionContainer />
      </div>
    </div>
  );
};

export default App;
