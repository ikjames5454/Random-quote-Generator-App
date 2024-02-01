const randomQuote = document.getElementById('RandomQuote');
const author = document.getElementById('authors');
const button = document.getElementById('Button');
const sound = document.querySelector('.sound');


const containers = async () => {
  button.innerText = 'Generating Quote';
  try {
    console.log('1')
    const response = await fetch('http://quotable.io/random');
    const json = await response.json();
    console.log(json)
    
    func(json);
    button.innerText = 'Generate'
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally{
    setTimeout(() => {
      button.style.backgroundColor = '';
      button.style.color = ''})
  }
};


const func = (place) => {
     author.innerText = place.author
     randomQuote.innerText = place.content

}

button.onclick = () => {
  button.style.backgroundColor = 'black';
  button.style.color = 'white'; 
 containers()}

 sound.onclick = () => {
  let speech = new SpeechSynthesisUtterance(`${randomQuote.innerText} by ${author.innerText}`);
  speechSynthesis.speak(speech);

 }