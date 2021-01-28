      
const dogLink = 'https://dog.ceo/api/breeds/image/random/3';


let button = document.querySelector('button');

const photo = document.getElementById('dog-image1');
const photo1 = document.getElementById('dog-image2');
const photo2 = document.getElementById('dog-image3');

const docs = document.querySelector('#dogs');

button.addEventListener('click', loadImage);

function loadImage() {
    fetch(dogLink).then( res => res.json()).then(({message})=>{
        photo.innerHTML = `<img src=${message[0]}>`;
        photo1.innerHTML = `<img src=${message[1]}>`;
        photo2.innerHTML = `<img src=${message[2]}>`;
      }
    )
}