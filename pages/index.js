// pages/index.js
import Head from 'next/head';
import PasswordGenerator from './components/PasswordGenerator';

const Home = () => {

  return (
    <>
      <Head>
        <title>Gerador de Senhas</title>
      </Head>
      <div className={`bg-gradient-to-tr gradient absolute inset-0`} >
        <div className='text-3xl text-slate-200 font-extralight text-center pt-10'>Gerador de senhas</div>
        <div className='text-md text-slate-200 font-extralight text-center'>Password Generator</div>
        <PasswordGenerator />
      </div>
    </>
  );
};

export default Home;
