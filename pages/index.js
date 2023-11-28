// pages/index.js
import Head from 'next/head';
import PasswordGenerator from './components/PasswordGenerator';

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>Gerador de Senhas</title>
      </Head>
      <div className={`bg-gradient-to-tr gradient min-h-screen flex flex-col items-center justify-center relative pt-10`}>
        <div className='text-3xl text-slate-200 font-extralight text-center mb-2 md:mb-4'>Gerador de senhas</div>
        <div className='text-md text-slate-200 font-extralight text-center mb-6 md:mb-8'>Password Generator</div>
        <div className="flex-grow"> {/* Adicionando um div flex-grow para ocupar o espaço disponível */}
          <PasswordGenerator />
        </div>
        <footer className="w-full bg-gray-800/50 shadow-sm shadow-white/80">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm sm:text-center dark:text-gray-400">
              © {currentYear} Desenvolvido por NextBI Development.
            </span>
            <span className='text-sm sm:text-center dark:text-gray-400'>Todos os direitos reservados.</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
