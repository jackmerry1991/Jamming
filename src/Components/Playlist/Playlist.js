import React from 'react';
import {TrackList} from '../TrackList/TrackList';
import './Playlist.css'

export class Playlist extends React.Component{
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = {
            isLoading: true
        }
    }

    handleNameChange(event){
        this.props.onNameChange(event.target.value);
    }

    componentDidMount(){
        this.setState(
            {isLoading: false}
        )
    }


    render(){
        return(
            <div className="Playlist">
            <input value={this.props.playlistName} onChange={this.handleNameChange}/>
            {this.isLoading ? <p>Loading...</p> : <p></p> }
            <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
               
            <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}