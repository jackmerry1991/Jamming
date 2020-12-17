import React from 'react';
import './Track.css';

export class Track extends React.Component{

    renderAction(){
        return this.props.isRemoval ? '-' : '+';

    }

    render(){
        return (
            <div className="Track">
                <div className="Track-information">
                <h3>{this.track.name}</h3>
                <p>{this.track.artist} | {this.track.album}</p>
                </div>
            <button className="Track-action">{this.renderAction()}</button>
            </div>
        )
    }
}