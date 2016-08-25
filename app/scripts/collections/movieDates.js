import Backbone from 'backbone';
import settings from '../settings';
import movieDate from '../models/movieDate';

export default Backbone.Collection.extend({
  model: movieDate,
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/movieDates`,
})
