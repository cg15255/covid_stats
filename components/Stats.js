import useStats from '../utils/useStats';
import styled from 'styled-components';
import { numberWithCommas } from '../utils/withCommas';

export default function Stats({ url, selected }) {
  const stats = useStats(url);
  if (!stats) return <p>Loading...</p>;
  console.log(stats);
  let date = new Date(stats.lastUpdate);
  return (
    <Wrapper>
      <h2>{selected} STATS</h2>
      <small>
        Last Updated: {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </small>
      <div className='statBlock'>
        <h3>Confirmed Cases:</h3>
        <span>
          {stats.confirmed ? numberWithCommas(stats.confirmed.value) : 'N/A'}
        </span>
      </div>
      <div className='statBlock'>
        <h3>Deaths:</h3>
        <span>
          {stats.deaths ? numberWithCommas(stats.deaths.value) : 'N/A'}
        </span>
      </div>
      <div className='statBlock'>
        <h3>Recovered:</h3>
        <span>
          {stats.recovered ? numberWithCommas(stats.recovered.value) : 'N/A'}
        </span>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h2 {
    font-size: 2.1rem;
    margin: 2rem;
    text-transform: uppercase;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  span {
    font-size: 2rem;
    font-family: 'Montserrat';
    color: #aaa;
    letter-spacing: -1px;
  }
  small {
    display: block;
    margin-bottom: 3rem;
    margin-top: -1rem;
  }
  .statBlock {
    font-family: 'Roboto Condensed';
    margin: 1rem auto;
    padding: 2rem 3rem;
    background: white;
    max-width: 400px;
    border-radius: 0.5rem;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;
