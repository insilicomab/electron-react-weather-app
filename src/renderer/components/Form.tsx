import { FC, memo } from 'react';
import { FormType } from '../type/form';

export const Form: FC<FormType> = memo((props) => {
  const { city, setCity, getWeather } = props;
  return (
    <form onSubmit={getWeather}>
      <input
        type="text"
        name="city"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
});
