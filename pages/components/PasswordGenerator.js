// components/PasswordGenerator.js
import { useState } from 'react';
import cryptoRandomString from 'crypto-random-string';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwordStrength, setPasswordStrength] = useState('');

  const generatePassword = () => {
    const atLeastOneChecked = includeUppercase || includeLowercase || includeNumbers || includeSymbols;

    if (!atLeastOneChecked) {
      window.alert('Por favor, marque pelo menos uma opção.');
      return;
    }

    const characterSet = [
      includeUppercase && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      includeLowercase && 'abcdefghijklmnopqrstuvwxyz',
      includeNumbers && '0123456789',
      includeSymbols && '!@#$%^&*()_+[]{}|;:,.<>?-/°ºª¹²³£¢¬§/?₢'
    ].filter(Boolean).join('');

    const newPassword = cryptoRandomString({ length: passwordLength, characters: characterSet });
    setPassword(newPassword);

    const strength = assessPasswordStrength(newPassword);
    setPasswordStrength(strength);
  };

  const copyToClipboard = () => {
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  const assessPasswordStrength = (password) => {
    const lengthScore = password.length >= 8 ? 1 : 0;
    const uppercaseScore = /[A-Z]/.test(password) ? 1 : 0;
    const lowercaseScore = /[a-z]/.test(password) ? 1 : 0;
    const numberScore = /\d/.test(password) ? 1 : 0;
    const symbolScore = /[\W_]/.test(password) ? 1 : 0;

    const totalScore = lengthScore + uppercaseScore + lowercaseScore + numberScore + symbolScore;

    if (totalScore === 5) {
      return 'Forte';
    } else if (totalScore >= 3) {
      return 'Moderada';
    } else {
      return 'Fraca';
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white/10 shadow-lg rounded-lg border-gray-200 shadow-black/50">
      <h2 className="text-2xl items-center text-center font-semibold mb-4 text-white">Critérios de criação</h2>

      <div className="mb-4">
        <label className="block text-white text-md font-light mb-2">Quantidade de caracteres: {passwordLength}</label>
        <input
          type="range"
          min="1"
          max="25"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block text-md font-light mb-2 text-gray-100">Inclua com...</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {renderCheckbox('Letras maiúsculas', includeUppercase, setIncludeUppercase)}
          {renderCheckbox('Letras minúsculas', includeLowercase, setIncludeLowercase)}
          {renderCheckbox('Números', includeNumbers, setIncludeNumbers)}
          {renderCheckbox('Caracteres especiais', includeSymbols, setIncludeSymbols)}
        </div>
      </div>

      <button
        className="text-white focus:outline-1 transition-all focus:ring-4 font-medium rounded-full text-sm px-5 py-1 text-center mb-2 bg-green-600 hover:bg-green-800 focus:ring-green-300"
        onClick={generatePassword}
      >
        Gerar!
      </button>

      {password && (
        <div className="mt-4">
          <div className="text-lg text-white font-semibold mb-2">Sua senha:</div>
          <input
            type="text"
            value={password}
            className="bg-gray-800/50 p-2 rounded w-full text-white"
            readOnly
            disabled
          />
          <span
            className="text-blue-200 font-semibold text-sm bg-slate-800 rounded-md px-2.5 py-1 hover:text-slate-200 hover:bg-slate-950 transition-all cursor-pointer inline-block mt-2"
            onClick={copyToClipboard}
          >
            Copiar
          </span>
          <label className="block mt-4 text-sm font-semibold text-gray-100 italic">
            Força da senha: {passwordStrength}
          </label>
        </div>
      )}
    </div>
  );
};

// Função auxiliar para renderizar checkbox
const renderCheckbox = (label, checked, onChange) => (
  <div className="flex items-center">
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
      className="mr-2"
    />
    <label className="mr-4 text-gray-100">{label}</label>
  </div>
);

export default PasswordGenerator;
