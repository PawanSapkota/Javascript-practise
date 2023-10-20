console.log('asynchronous');


// AJAX Calls using http request.
// const request = new XMLHttpRequest();
// request.open('GET','https://inshorts.deta.dev/news?category=sports');
// request.send();
// console.log(request.responseText);

// request.addEventListener('load',function(){
    
//     const {data} = JSON.parse(this.responseText);
//     console.log(data);    

// });

const getCountryData = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

    })
}
getCountryData('portugal')

//Promise




