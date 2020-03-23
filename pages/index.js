import { useState } from 'react';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';
import Layout from '../components/Layout';

export default function IndexPage() {
  const [url, setUrl] = useState('https://covid19.mathdro.id/api');
  const [selectedCountry, setSelectedCountry] = useState('WORLDWIDE');
  return (
    <Layout setUrl={setUrl} setSelectedCountry={setSelectedCountry}>
      <Stats url={url} selected={selectedCountry}></Stats>
    </Layout>
  );
}
