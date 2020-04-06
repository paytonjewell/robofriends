import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className = "pa2">
            <input className = "pa3 ba b--gray bg-white-90"
            type="search"
            placeholder="search robots"
            onChange={searchChange} />
        </div>
        );
    }
    
    export default SearchBox;