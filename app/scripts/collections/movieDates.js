import Backbone from 'backbone';
import movieDate from '../models/movieDate';

export default Backbone.Collection.extend({
  model: movieDate,
  url: 'https://baas.kinvey.com/appdata/kid_H1K9VUQ9/movieDates'

})
