import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='p-10 py-20'>
            <footer className="rounded-lg m-4 bg-gray-800/50 shadow-sm shadow-white/80">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm sm:text-center dark:text-gray-400">
                        © {currentYear} Desenvolvido por NextBI Development.
                    </span>
                    <span className='text-sm sm:text-center dark:text-gray-400'>Todos os direitos reservados.</span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
