import React from 'react';
import store from '../store';
import { Link } from 'react-router';
import $ from 'jquery';
import MovieTile from './movieTile';
import DateModal from './DateModal';


export default React.createClass({
  getInitialState: function() {
    return {
      movieList: []
    }
  },
  componentDidMount: function() {
    $.ajax({
      type: 'GET',
      url: 'http://api.themoviedb.org/3/discover/movie?api_key=a58ee2b2b3d056e1c69c74b37c98c39a',
      success: (data) => {
        this.setState({movieList: data.results})
      }
    })
  },
  movieSearch: function(searchTerm) {
    $.ajax({
      type: 'GET',
      url: `http://api.themoviedb.org/3/search/movie?api_key=a58ee2b2b3d056e1c69c74b37c98c39a&query="${this.refs.searchTerm.value}"`,
      success: (data) => {
        this.setState({movieList: data.results})
      }
    })
  },
  render: function() {
    let movieList = this.state.movieList.map(function(movie, i, arr){
      if(movie.poster_path === null) {
        console.log('bad images');
      }
      return (
        <MovieTile key={i} original_title={movie.original_title} url={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} showModal={DateModal}/>
      )
    })
    return (
      <div>
        <header>
          <input ref="searchTerm" type="text"/> <input type="submit" value="Movie Search" onClick={this.movieSearch}/>
          <Link to={`dates`}><input type="button" value="Find a Date"/> </Link>
          <input type="button" value="Log out" onClick={store.session.logout} />
        </header>
        <main>
          <h1>Movies</h1>
          {movieList}
        </main>
      </div>
    )
  }
})
