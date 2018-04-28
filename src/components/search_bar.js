import React from 'react';

//stateless component - functional component - dummy component
// const SearchBar = () => {
//     return <input />;
// };

//stateful component - class component - smart component
class SearchBar extends React.Component {
    render() {
        return  <input />;
    }
};

export default SearchBar;