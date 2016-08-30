import Backbone from 'backbone';
import settings from '../settings';

export default Backbone.Model.extend({
  id: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/movieDates`,
  title: 'original_title',
  imgURL: 'poster_path',
  date: 'date',
  location: 'location',
  attendees: []
})
