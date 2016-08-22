import Backbone from 'backbone';

export default Backbone.Model.extend({
  id: '_id',
  title: 'original_title',
  imgURL: 'poster_path',
  date: 'date',
  location: 'location'
})
