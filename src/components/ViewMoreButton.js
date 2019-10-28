import React, { Component } from "react";

class ViewMoreButton extends Component {
    render(){
        return(
            <div>
                <button><a href={this.props.link.url}>View More Upcoming Releases</a></button>
            </div>
        )
    }
    
}

export default ViewMoreButton;
