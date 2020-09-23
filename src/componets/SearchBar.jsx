import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    
       this.state = {
           term: ''
       }

       //this.handleSubmit = this.handleSubmit.bind(this); <= (adding the this.bind to our function in the consructor will fix the this.bind undefined error)
       
    }
    
    handleSubmit = (e) => { // just passing an arrow function here to fix the this.bind error of undefined (handleSubmit = (e) => { ...)
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.handleSubmit} className="ui form" action=""> {/*second way of solving the this.bind error of undefined passing an arrow function for here*/}
                   <div className="field"> 
                   <label>Image Search</label>
                   <input onChange={(e) => this.setState({term: e.target.value})} value={this.state.term} type="search" name="" id="" placeholder="Searching from unsplash Api"/>
                   </div>
                </form>
            </div>
        )
    }
};

export default SearchBar;
