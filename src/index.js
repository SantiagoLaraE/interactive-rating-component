const rating = document.querySelector('.rating');
const thankYou = document.querySelector('.thank-you');

const form = document.querySelector('#ratingForm');
const submitBtn = document.querySelector('.rating__form-submit');
const error = document.querySelector('.rating__form-error');

const formResultsContainer = document.querySelector('.thank-you__results span')


const formSubmitted = (e) => {
    e.preventDefault();
    const ratingScore = form['ratingInput'].value;
    if(ratingScore === ''){
        error.classList.remove('inactive');
    }else{
        rating.classList.add('inactive');
        thankYou.classList.remove('inactive');
        formResultsContainer.innerHTML = ratingScore;
    }
    
}


submitBtn.addEventListener('click', formSubmitted);