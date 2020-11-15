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
            <div className="segment flex flex-row items-baseline" style={{width:"100%", paddingBottom:"20px"}}>
                <form onSubmit={this.handleSubmit} className="ui form" action=""> {/*second way of solving the this.bind error of undefined passing an arrow function for here*/}
                   <div className="ui input focus"> 
                   
                   <input onChange={(e) => this.setState({term: e.target.value})} value={this.state.term} type="search" name="" id="" placeholder="Search"/>
                   </div>
                </form>
                <span class="inline-flex bg-gray-400 ml-4 text-white rounded-full h-6 p-4 cursor-pointer justify-center items-center">unsplash</span>
                <span class="inline-flex bg-gray-400 ml-2 text-white rounded-full h-6 p-4 cursor-pointer justify-center items-center">photos</span>
                <span class="inline-flex bg-gray-400 ml-2 text-white rounded-full h-6 p-4 cursor-pointer justify-center items-center">cameras</span>
                <span class="inline-flex bg-gray-400 ml-2 text-white rounded-full h-6 p-4 cursor-pointer justify-center items-center">flowers</span>
            </div>
        )
    }
};

export default SearchBar;
