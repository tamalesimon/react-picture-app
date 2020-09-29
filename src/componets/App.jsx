import React from 'react';
import unsplash from '../api/unsplash'; 

import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {

            unsplashImages: []
        }

        //this.onSearchSubmit = this.onSearchSubmit.bind(this); <= solution number 1
        
    } 

    componentDidMount() {
        this.onSearchSubmit('pictures');
    }
    

    onSearchSubmit = async(term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term},           
        });
        
        console.log(this);
        this.setState({unsplashImages: response.data.results});
    }
    render() {
    return (
        <div className="ui container" style={{ margin: "10px"}}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            
            <ImageList images={this.state.unsplashImages}/>
        </div>
    );

    }

}
    


export default App;
