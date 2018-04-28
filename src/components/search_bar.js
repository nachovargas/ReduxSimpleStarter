import React, {Component} from 'react';

//stateless component - functional component - dummy component
// const SearchBar = () => {
//     return <input />;
// };

//stateful component - class component - smart component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: 'placeholder' };
    }

    render() {
        return ( 
            <div>
                <input 
                value={this.state.term}
                onClick={event => this.setState({ term: '' })}
                onChange={event => this.setState({ term: event.target.value })}
                />
                <p>The value is: <i>{this.state.term}</i></p>
            </div>
        );
    }
};

export default SearchBar;