import React from 'react';
import '../styles.css';

class ImageCard extends React.Component {

    constructor(props) {
        super(props)
        
        this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

    
    render() {
        //const style = this.state.hover ? {display: 'none'} : {display: 'block'}
    return(
        <div>        
            <div 
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}>
            <img
            style={{width:'100%', display:'block'}} 
            alt={this.props.image.description} 
            src={this.props.image.urls.small} /></div>
            {this.state.isHovering && <div className="text-block">{this.props.image.description}</div>}
        </div>
    );
}
}

export default ImageCard;