
import { checkCity } from './js/inputValidation.js'
import { runApp } from './js/application'
import { postData } from './js/application'

import './styles/style.scss'
import './styles/med-view.scss'
import './styles/lg-view.scss'

export {
    checkCity,
   
    runApp,
 
    postData
    
   }

   const button = document.querySelector('#generate');
   button.addEventListener("click", runApp);
   