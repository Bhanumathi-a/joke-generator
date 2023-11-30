//console.log('joke')
let btn = document.querySelector('#joke-btn')
let joke = document.querySelector('#joke')

let randomJoke = (e) => {
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        //console.log(JSON.parse(this.responseText))

        let data = JSON.parse(this.responseText)

        let joke = document.querySelector('#joke')

        joke.innerHTML = `${data.value}`

        // console.log(data.value)
      } else {
        console.log('error')
      }
    }
  }
  xhr.send()
}
document.addEventListener('click', randomJoke)
document.addEventListener('DOMContentLoaded', randomJoke)
