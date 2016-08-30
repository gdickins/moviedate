import Session from './models/session';
import movieDates from './collections/movieDates';
import movieDate from './models/movieDate';

export default {
  session: new Session(),
  // movieDate: new movieDate(),
  movieDates: new movieDates(),
}
