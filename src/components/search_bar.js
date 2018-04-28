import React, {Component} from 'react';

//stateless component - functional component - dummy component
// const SearchBar = () => {
//     return <input />;
// };

//stateful component - class component - smart component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return ( 
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({ term: event.target.value })}
                />
            </div>
        );
    }
};

export default SearchBar;