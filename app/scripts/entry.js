import ReactDOM from 'react-dom';
import router from './router';
import settings from './settings';
import { browserHistory } from 'react-router';
import store from './store';
import $ from 'jquery';


$(document).ajaxSend(function(evt, xhr, jquerySettings) {
  if (jquerySettings.url.indexOf('kinvey') > -1){
    if (localStorage.authtoken) {

        xhr.setRequestHeader('Authorization', 'Kinvey ' + localStorage.authtoken);
      } else {
  
  xhr.setRequestHeader('Authorization', settings.basicAuth)}
}})

ReactDOM.render(router, document.getElementById('container'))



// if (jquerySettings.url.indexOf('kinvey') > -1) {
//   if (localStorage.authtoken) {
//     xhr.setRequestHeader('Authorization', `Kinvey ${localStorage.authtoken}`);
//   } else {
//     browserHistory.push('/');
//     xhr.setRequestHeader('Authorization', `Basic ${store.settings.basicAuth}`);
//   }
// }
