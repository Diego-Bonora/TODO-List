import './CreateTodoButton.css'

function CreateTodoButton() {
    return (
        <button className='CreateTodoButton'
            onClick={() => console.log("crear TODO")}>
            +
        </button>
    );
}

export { CreateTodoButton };