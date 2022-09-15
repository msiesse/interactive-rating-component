const ratingInputs = document.getElementsByClassName('rating-value')
const ratingInputsArray = [...ratingInputs];
let rating = 0

ratingInputsArray.forEach((ratingInput) => {
    ratingInput.addEventListener('click', (e) => {
        rating = ratingInput.value
        e.target.focus()
    })
})

const ratingForm = document.getElementById('rating-form')
ratingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('rating-selected').innerHTML = rating
    document.getElementById('thank-you-page').style.display = 'flex'
    ratingForm.style.display = 'none'
});