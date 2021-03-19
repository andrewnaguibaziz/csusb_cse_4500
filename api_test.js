
/*
//          https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400


var request = new XMLHttpRequest()

request.open('GET', 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400', true)
request.onload = function () 
{
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) 
    {
        data.forEach((movie) => {
        console.log(movie.title)
        })
    } 
    else 
    {
        console.log('error')
    }
}

request.send()

*/
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});