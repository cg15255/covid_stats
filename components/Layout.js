import styled from 'styled-components';
import CountrySelector from '../components/CountrySelector';

export default function Layout({ setUrl, setSelectedCountry, children }) {
  return (
    <Wrapper>
      <header>
        <h1>COVID-19 Stats</h1>
      </header>
      <main>{children}</main>
      <footer>
        <CountrySelector
          setUrl={setUrl}
          setSelectedCountry={setSelectedCountry}
        ></CountrySelector>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  background: var(--lightColor);
  color: var(--darkColor);
  margin: 0;
  main {
    padding: 2rem;
    text-align: center;
  }
  header,
  footer {
    background: white;
    padding: 1rem;
    text-align: center;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  h1 {
    color: var(--mainColor);
    font-size: 2.2rem;
  }
  footer {
    position: fixed;
    background: var(--mainColor);
    color: white;
    width: 100vw;
    bottom: 0;
    padding: 1rem;
  }
`;
