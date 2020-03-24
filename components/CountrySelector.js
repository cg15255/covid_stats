import useStats from '../utils/useStats';
import styled from 'styled-components';

export default function CountrySelector({ setUrl, setSelectedCountry }) {
  const countries = useStats('https://covid19.mathdro.id/api/countries');
  if (!countries) return <p>Loading...</p>;
  function handleChange(e) {
    if (e.target.value === 'all') {
      setUrl('https://covid19.mathdro.id/api/');
      setSelectedCountry('WORLDWIDE');
    } else {
      setUrl(`https://covid19.mathdro.id/api/countries/${e.target.value}`);
      const selected = countries.countries.find(
        country => country.iso2 === e.target.value
      );
      setSelectedCountry(selected.name);
    }
  }

  return (
    <Wrapper>
      <select onChange={handleChange}>
        <option value='all'>Worldwide</option>
        {countries.countries.map(country => {
          return (
            <option value={country.iso2} key={country.iso3}>
              {country.name}
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
