import ReactDOM from 'react-dom';
import router from './router';
import settings from './settings';
import $ from 'jquery';

ReactDOM.render(router, document.getElementById('container'))

$(document).ajaxSend(function(evt, xhr, jquerySettings) {
  if (jquerySettings.url.indexOf('kinvey') > -1){
  xhr.setRequestHeader('Authorization', settings.basicAuth)
}
})
