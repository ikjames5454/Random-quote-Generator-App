// const randomQuote = document.getElementById('RandomQuote');
// const author = document.getElementById('authors');
// const button = document.getElementById('Button');
// const sound = document.querySelector('.sound');


// const containers = async () => {
//   button.innerText = 'Generating Quote';
//   try {
//     console.log('1')
//     const response = await fetch('https://quotable.io/random');
//     const json = await response.json();
//     console.log(json)
    
//     func(json);
//     button.innerText = 'Generate'
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   } finally{
//     setTimeout(() => {
//       button.style.backgroundColor = '';
//       button.style.color = ''})
//   }
// };


// const func = (place) => {
//      author.innerText = place.author
//      randomQuote.innerText = place.content

// }

// button.onclick = () => {
//   button.style.backgroundColor = 'black';
//   button.style.color = 'white'; 
//  containers()}

//  const playSound = () => {
//   let speech = new SpeechSynthesisUtterance(`${randomQuote.innerText} by ${author.innerText}`);
//   speechSynthesis.speak(speech);

//  }

//  sound.onclick = playSound;

//  window.onload = () => {
//   containers();
 
//   setInterval(containers, 30000);
// };
// const randomQuote = document.getElementById('RandomQuote');
// const author = document.getElementById('authors');
// const button = document.getElementById('Button');
// const sound = document.querySelector('.sound');

// const containers = async () => {
//   button.innerText = 'Generating Quote';
//   try {
//     console.log('1');
//     const response = await fetch('https://quotable.io/random');  
//     const json = await response.json();
//     console.log(json);
    
//     func(json);
//     playSound();
//     button.innerText = 'Generate';
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   } finally {
//     setTimeout(() => {
//       button.style.backgroundColor = '';
//       button.style.color = '';
//     });
//   }
// };

// const func = (place) => {
//   author.innerText = place.author;
//   randomQuote.innerText = place.content;
// };

// const playSound = () => {
//   let speech = new SpeechSynthesisUtterance(`${randomQuote.innerText} by ${author.innerText}`);
//   speechSynthesis.speak(speech);
// };

// button.onclick = () => {
//   button.style.backgroundColor = 'black';
//   button.style.color = 'white'; 
//   containers();
// };

// sound.onclick = playSound;


// window.onload = () => {
//   containers();
  
//   setInterval(containers, 30000);
// };
const randomQuote = document.getElementById('RandomQuote');
const author = document.getElementById('authors');
const button = document.getElementById('Button');
const sound = document.querySelector('.sound');

let selectedVoice;


const setVoice = () => {
  const voices = speechSynthesis.getVoices();
  const preferredVoices = ['Google UK English Male', 'Google US English', 'Microsoft Zira - English (United States)', 'Microsoft David - English (United States)'];
  
  selectedVoice = voices.find(voice => preferredVoices.includes(voice.name)) || voices[0];
};

const containers = async () => {
  button.innerText = 'Generating Quote';
  try {
    console.log('1');
    const response = await fetch('https://quotable.io/random');  
    const json = await response.json();
    console.log(json);
    
    func(json);
    playSound();
    button.innerText = 'Generate';
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setTimeout(() => {
      button.style.backgroundColor = '';
      button.style.color = '';
    });
  }
};

const func = (place) => {
  author.innerText = place.author;
  randomQuote.innerText = place.content;
};

const playSound = () => {
  let speech = new SpeechSynthesisUtterance(`${randomQuote.innerText} by ${author.innerText}`);
  speech.voice = selectedVoice;
  speechSynthesis.speak(speech);
};

button.onclick = () => {
  button.style.backgroundColor = 'black';
  button.style.color = 'white'; 
  containers();
};

sound.onclick = playSound;


window.onload = () => {
  setVoice();
  containers();
  
  setInterval(containers, 30000);
};


speechSynthesis.onvoiceschanged = setVoice;
