const ratingInputs = document.getElementsByClassName('rating-value')
const ratingInputsArray = [...ratingInputs];
let rating = 0

ratingInputsArray.map((ratingInput) => {
    ratingInput.addEventListener('click', () => {
        rating = ratingInput.value
    })
})

const ratingForm = document.getElementById('rating-form')
ratingForm.addEventListener('submit', (e) => {
    e.preventDefault()
    document.getElementById('rating-selected').innerHTML = rating
    document.getElementById('thank-you-page').style.display = 'flex'
    ratingForm.style.display = 'none'
});