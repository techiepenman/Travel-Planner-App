import { handleSubmit } from './js/application'
import { checkDate } from './js/dateChecker'
import { runnApp } from './js/application'

import './styles/style.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/med-view.scss'
import './styles/lg-view.scss'

export {
    checkDate,
    handleSubmit,
    runnApp
   }

   const button = document.querySelector('#generate');
   button.addEventListener("click", runApp);