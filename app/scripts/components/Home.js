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
    let imageURL;
    let movieList = this.state.movieList.map(function(movie, i, arr){
      if(movie.poster_path === null) {
        imageURL = '../../assets/images/missing.png';
      } else {
        imageURL = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
      }
      return (
        <MovieTile key={i} original_title={movie.original_title} url={imageURL} overview={movie.overview} showModal={DateModal}/>
      )
    })
    return (
      <div>
        <header id="homeHeader">
        <h1 className="logo"><i className="fa fa-film" aria-hidden="true"></i> Movie Friends</h1>
        <button className="btn" id="logoutBtn" onClick={store.session.logout}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
        <form className="searchForm" onSubmit={this.movieSearch}>
          <input ref="searchTerm" className="searchBar" placeholder="Find a Movie!" type="text"/> <button className="specialBtn" type="submit"> <i className='fa fa-search' aria-hidden='true'></i></button>
        </form>
          <Link to={`dates`}><input id="friends" type="button" className="btn" value="Movies Other People are Seeing"/> </Link>
        </header>
        <main id="homeMain">
          {movieList}
        </main>
      </div>
    )
  }
})
