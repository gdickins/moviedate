import Session from './models/session';
import movieDates from './collections/movieDates';
import movieDate from './models/movieDate';

export default {
  session: new Session(),
  movieDates: new movieDates(),
}
