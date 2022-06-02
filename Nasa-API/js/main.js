//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=7TjuAdlbd2zXDcBaNc2a0p2r7aoZqze7KLgchMrb&date=${choice}`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data.hdurl
      document.querySelector('#title-of-image').innerText = data.title
      document.querySelector('#image-description').innerText = data.explanation
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

