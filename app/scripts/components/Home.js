import React from 'react';
import store from '../store';
import $ from 'jquery';
import MovieTile from './movieTile';

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
    console.log(this.state);
    let movieList = this.state.movieList.map(function(movie, i, arr){
      return (
        <MovieTile key={i} original_title={movie.original_title} poster_path={movie.poster_path}/>
      )
    })
    return (
      <div>
        <header>
          <input ref="searchTerm" type="text"/> <input type="submit" placeholder="Search" onClick={this.movieSearch}/>
        </header>
        <main>
          <h1>This is the movie tile </h1>
          {movieList}
        </main>
      </div>
    )
  }
})
