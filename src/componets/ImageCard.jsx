import React from 'react';
import '../styles.scss';

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
      <div className="grid transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}>
          <img
            style={{ width: '100%', display: 'block' }}
            alt={this.props.image.description}
            src={this.props.image.urls.regular} /></div>
        <div class="grid__body">
          <div class="relative">            
            <h1 class="grid__title">{this.props.image.title}</h1>
            <p class="grid__author">{this.props.image.author}</p>
          </div>
          <div class="mt-auto" >
           <span className="grid_tag">{this.props.image.alt_description}</span>
            
          </div>
        </div>
        
      </div>
    );
    
}
}

export default ImageCard;