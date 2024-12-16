const init = () => {
  const inputForm = document.querySelector("form");
  inputForm.addEventListener('submit', e =>{
    e.preventDefault();
    const userInput = e.target.searchByID.value

    fetch(`http://localhost:3000/movies/${userInput}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        const titleDisplay = document.querySelector('#movieDetails h4')
        const summaryDisplay = document.querySelector('#movieDetails p')

        titleDisplay.textContent = data.title
        summaryDisplay.textContent = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);