// import { handleSubmit } from './js/application'
import { checkDate } from './js/dateChecker'
import { runApp } from './js/application'
import { getData } from './js/application'
import { postData } from './js/application'
import { updateUI } from './js/application'

import './styles/style.scss'
import './styles/footer.scss'
// import './styles/form.scss'
import './styles/header.scss'
import './styles/med-view.scss'
import './styles/lg-view.scss'

export {
    checkDate,
    // handleSubmit,
    runApp,
    getData,
    postData,
    updateUI
   }

   const button = document.querySelector('#generate');
   button.addEventListener("click", runApp);