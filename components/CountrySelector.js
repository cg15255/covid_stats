import useStats from '../utils/useStats';
import styled from 'styled-components';

export default function CountrySelector({ setUrl, setSelectedCountry }) {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  if (!countries) return <p>Loading...</p>;
  console.log(countries);
  function handleChange(e) {
    const myCountry = Object.entries(countries.countries).find(
      country => country[1] === e.target.value
    )[0];
    if (e.target.value === 'all') {
      setUrl('https://covid19.mathdro.id/api/');
    } else {
      setUrl(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
    }
    setSelectedCountry(myCountry);
  }

  return (
    <Wrapper>
      <select onChange={handleChange}>
        <option value='all'>Worldwide</option>
        {Object.entries(countries.countries).map(([country, code]) => {
          return (
            <option value={code} key={country}>
              {country}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  select {
    max-width: 100%;
    padding: 2rem;
    font-family: 'Montserrat';
    font-size: 1.8rem;
    outline: none;
    border: none;
  }
`;
