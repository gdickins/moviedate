import Backbone from 'backbone';
import settings from '../settings';

export default Backbone.Model.extend({
  idAttribute: '_id',
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/movieDates`,
  defaults: {
    title: 'original_title',
    overview: 'overview',
    date: 'date',
    location: 'location',
    attendees: []
  }
})
