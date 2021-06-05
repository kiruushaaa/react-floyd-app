import './App.css';
import DimensionalInput from './components/inputs/DimensionalInput/DimensionalInput';
import MatrixInput from './components/inputs/MatrixInput/MatrixInput';
import ResultSection from './components/ResultSection/ResultSection';

const App = (props) => {
  return (
    <div className='App'>
      <h1 className='App-title'>Алгоритм Флойда-Уоршалла</h1>
      <p className='App-intro'>
        Алгоритм нахождения длин кратчайших путей между всеми парами вершин во
        взвешенном ориентированном графе.
      </p>

      <div className='alg-container'>
        <DimensionalInput
          state={props.state.appState}
          dispatch={props.dispatch}
        />

        <MatrixInput state={props.state.appState} dispatch={props.dispatch} />

        <div className='btn-group'>
          <button
            className='btn alg-btn'
            type='button'
            onClick={() => props.dispatch({ type: 'FILL_RANDOM_MATRIX' })}>
            Заполнить случайным образом
          </button>

          <button
            className='btn alg-btn'
            type='button'
            onClick={() => props.dispatch({ type: 'RUN_ALGORITHM' })}>
            Показать результат
          </button>
        </div>

        {props.state.appState.info && (
          <ResultSection state={props.state.appState} />
        )}
      </div>
    </div>
  );
};

export default App;
