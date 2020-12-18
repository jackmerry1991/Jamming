import './App.css';
import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {searchResults: [
        {
          name: 'Track 1',
          artist: 'Artist 1',
          album: 'Album 1',
          id: 1
        },
        {
          name: 'Track 2',
          artist: 'Artist 2',
          album: 'Album 2',
          id: 2
        },
        {
          name: 'Track 3',
          artist: 'Artist 3',
          album: 'Album 3',
          id: 3
        }
      ],
      playlistName: 'New Playlist',
      playlistTracks:[
        {
          name: 'Track 1',
          artist: 'Artist 1',
          album: 'Album 1',
          id: 1
        }
      ]
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
    let trackUris = this.state.playlistTracks.map(track => track.uri);
    //remove later
    console.log(`${trackUris} saved`);
  }

  search(searchTerm){
    console.log(searchTerm);
  }


  render(){
    return(
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults searchResults = {this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistTracks = {this.state.playlistTracks} playlistName = {this.state.playlistName} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>
    );

  }
}



