

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