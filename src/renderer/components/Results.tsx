import { FC, memo } from 'react';
import { ResultsType } from '../type/results';

type Props = {
  results: ResultsType;
};

export const Results: FC<Props> = memo(({ results }) => {
  const { time, cityName, country, temperature, conditionText, icon } = results;
  return (
    <>
      {cityName && <div className="results-city">{cityName}</div>}
      {country && <div className="results-country">{country}</div>}
      {time && <div className="results-time">{time}</div>}
      {temperature && (
        <div className="results-temp">
          {temperature} <span>°C</span>
        </div>
      )}
      {conditionText && (
        <div className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </>
  );
});
