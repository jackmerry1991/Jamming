import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks:[]
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    let newPlayList = this.state.playlistTracks.push(track);
    this.setState({playListTracks: newPlayList});
  }

  removeTrack(track){
    let newPlaylistTracks = this.state.playlistTracks.filter(playlistTrack =>
			playlistTrack.id !== track.id);
		this.setState({playlistTracks: newPlaylistTracks});
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist(){
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: '',
        playlistTracks: []
  
      })
    })
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(searchResults => {
      this.setState({searchResults: searchResults})
    })
  }

  render(){
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults = {this.state.searchResults} onAdd={this.addTrack} playlistTracks = {this.state.playlistTracks}/>
          <Playlist playlistTracks = {this.state.playlistTracks} playlistName = {this.state.playlistName} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
    );

  }
}



