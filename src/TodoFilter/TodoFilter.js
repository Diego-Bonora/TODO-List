import React from 'react'
import './TodoFilter.css'
// import { TodoContext } from '../TodoContext/TodoContext';

function TodoFilter({ setFilterTodo }) {
    // const { setFilterTodo } = React.useContext(TodoContext)

    const [openFilter, setOpenFilter] = React.useState(false);
    const dropdownRef = React.useRef(null);
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenFilter(false);
        }
    };

    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside); // Use mousedown or click based on your needs
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openFilter]);

    const onClickOption = (event) => {
        setFilterTodo(event.target.value);
    };

    return (
        <div className='FilterContainer' ref={dropdownRef}>
            <button onClick={() => { setOpenFilter(state => !state) }} className='FilterButton'>
                Filter
            </button>
            <div>
                {openFilter && (
                    <ul className='FilterList-container'>
                        <button onClick={onClickOption} value={'sortAZ'} className='FilterList-item'>A-Z</button>
                        <button onClick={onClickOption} value={'sortZA'} className='FilterList-item'>Z-A</button>
                        <button onClick={onClickOption} value={'sortTrue'} className='FilterList-item'>Active</button>
                        <button onClick={onClickOption} value={'sortFalse'} className='FilterList-item'>Done</button>
                    </ul>
                )}
            </div>
        </div>
    );
}

export { TodoFilter };