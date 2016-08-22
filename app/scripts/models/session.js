import Backbone from 'backbone';
import $ from 'jquery';
import settings from '../settings';

export default Backbone.Model.extend({
  login: function(data) {
    var promise = new Promise((resolve, reject) => {
      $.ajax({
        type: 'POST',
        url: `https://baas.kinvey.com/user/${settings.appKey}/login`,
        data: JSON.stringify(data),
        contentType: 'application/json',
        error: function(e) {console.log(e);}
      })
      .then((s) => {
        this.set({
          username: s.username, authtoken: s._kmd.authtoken, _id: s._id
        });
        resolve('passed to the then');
      }).fail((e) => {
        console.error('your login failed: ', e);
        reject('this didn\'t work');
      })
    });
    return promise;
  },
  signup: function(data) {
    $.ajax({
      type: 'POST',
      url: `https://baas.kinvey.com/user/${settings.appKey}`,
      data: JSON.stringify({username: data.username, password: data.password, email: data.email}),
      contentType: 'application/json',
      success: (s) => {
        this.set({
          username: s.username, authtoken: s._kmd.authtoken, _id: s._id, email: s.email
        });
      },
      error: function(e) {console.log(e);}
    })
  }
})
