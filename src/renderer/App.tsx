import './App.css';
import { Form } from './components/Form';
import { Loading } from './components/Loading';
import { Results } from './components/Results';
import { Title } from './components/Title';
import { useCityWeather } from './hooks/useCityWeather';

function App() {
  const { loading, city, setCity, getWeather, results } = useCityWeather();

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form getWeather={getWeather} setCity={setCity} city={city} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
