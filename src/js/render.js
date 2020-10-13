import refs from './refs.js';
import fetch from './fetch.js';
import template from '../template/coctail.hbs';

import debounce from 'lodash.debounce';

refs.input.addEventListener('input', debounce((e)=>{
  refsCoctailList
  // console.log(e.target.value)
  fetch.search = e.target.value
  fetch.getFetch()
  .then(data => {
    renderTemplate(data.drinks)
  // console.log(data.drinks)
  refs.input.value = ''
})
}, 500))

function renderTemplate(){
  const drink = template(data.drinks)
  // console.log(drink);
  refs.list.insertAdjacentHTML('beforeend', drink)
  const ingredients = document.querySelectorAll('.ingredients li')
  // console.log(ingredients)
  ingredients.forEach(el=>{
    if(el.textContent === ``) {
      el.style.display = `none`
    }
  })
}