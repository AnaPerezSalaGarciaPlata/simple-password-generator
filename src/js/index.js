// // El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const passwordLengthElement = document.getElementById('password-length');
// const rangeElement = document.getElementById('range')
const buttonGenerateElement = document.getElementById('generate-password');

const passwordSelectedRangeElement = document.getElementById('password-selected-range');

passwordSelectedRangeElement.addEventListener('change', () => {
  passwordLengthElement.innerText = passwordSelectedRangeElement.value;
});

// cuando el input cambie, cambia el valor de password-length

const generateRandomNumber = max => {
  return Math.floor(Math.random() * max);
};

const passwordCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

const generatePassword = () => {
  let passwordLength = parseInt(passwordLengthElement.innerText);

  let newPassword = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = generateRandomNumber(passwordCharacters.length);
    let randomChar = passwordCharacters.charAt(randomNumber);
    newPassword += randomChar;
  }

  passwordElement.value = newPassword;
};

buttonGenerateElement.addEventListener('click', generatePassword);
