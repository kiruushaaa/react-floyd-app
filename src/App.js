import './App.css';
import DimensionalInput from './components/inputs/DimensionalInput/DimensionalInput';
import MatrixInput from './components/inputs/MatrixInput/MatrixInput';
import ResultSection from './components/ResultSection/ResultSection';
import {
  fillMatrixRandomActionCreator,
  runAlgorithmActionCreator,
} from './redux/app-reducer';

const App = (props) => {
  return (
    <div className='App'>
      <h1 className='App-title'>Алгоритм Флойда-Уоршалла</h1>
      <p className='App-intro'>
        Алгоритм нахождения длин кратчайших путей между всеми парами вершин во
        взвешенном ориентированном графе.
      </p>

      <div className='alg-container'>
        <DimensionalInput state={props.state} dispatch={props.dispatch} />

        <MatrixInput state={props.state} dispatch={props.dispatch} />

        <div className='btn-group'>
          <button
            className='btn alg-btn'
            type='button'
            onClick={() => props.dispatch(fillMatrixRandomActionCreator())}>
            Заполнить случайным образом
          </button>

          <button
            className='btn alg-btn'
            type='button'
            onClick={() => props.dispatch(runAlgorithmActionCreator())}>
            Показать результат
          </button>
        </div>

        {props.state.info && <ResultSection state={props.state} />}
      </div>
    </div>
  );
};

export default App;
