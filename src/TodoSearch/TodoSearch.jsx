import React from 'react'
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch({searchValue, setSearchValue}) {

    return (
        <input
            placeholder="Search Here"
            className="TodoSearch"
            value={searchValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };