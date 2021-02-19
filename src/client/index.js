// import { handleSubmit } from './js/application'
import { checkCity } from './js/dateChecker.js'
import { runApp } from './js/application'
// import { getData } from './js/application'
import { postData } from './js/application'
// import { updateUI } from './js/application'

import './styles/style.scss'
import './styles/footer.scss'
// import './styles/form.scss'
import './styles/header.scss'
import './styles/med-view.scss'
import './styles/lg-view.scss'

export {
    checkCity,
    // handleSubmit,
    runApp,
    // getData,
    postData
    // updateUI
   }

   const button = document.querySelector('#generate');
   const input = document.querySelector('#city').value;

   button.addEventListener("click", runApp);
   