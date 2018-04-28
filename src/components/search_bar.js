import React, {Component} from 'react';

//stateless component - functional component - dummy component
// const SearchBar = () => {
//     return <input />;
// };

//stateful component - class component - smart component
class SearchBar extends Component {
    render() {
        return  <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
};

export default SearchBar;