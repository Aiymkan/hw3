import React, {useState} from 'react';

function Task(props) {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: "Do exercises",
        },
        {
            id: 2,
            text: "Make breakfast",
        },
        {
            id: 3,
            text: "Practice",
        }
    ]);
    const [value, setValue] = useState("")
    const onChange = (e)=>{
        setValue(e.target.value)
    };
    const onAdd =(e)=> {
        if(!value.trim())return;
        const todo = {
            text: value,
            id: Date.now(),
        };
        setTodos(prev =>{
            return [...prev, todo]
        } );
        setValue("")
    };
    const deleteTodo =(id)=>{
        const todoFilter=todos.filter(todo=>todo.id !== id)
        setTodos(todoFilter)
    };
    const [checked, setChecked ] = useState(false)

    return (
        <div className='container mt-3'>
            <div className="input-group mb-3">
                <input onChange={onChange} value={value} type="text" className="form-control" placeholder="To do"/>
                    <button onClick={onAdd} className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
            </div>
            <ul className="list-group">

                {
                    todos.map(todo=>{

                        return ( <li

                            key={todo.id}
                            className="list-group-item mb-2 d-flex justify-content-between align-items-center" >
                            <input
                                   checked={checked.id}
                                   type="checkbox"
                                   onChange={(e)=>{setChecked(e.target.checked)}}
                            />
                            <span>{todo.text}</span>
                            <button onClick={()=>deleteTodo(todo.id)} className= "btn btn-secondary">delete</button>
                        </li>)
                        
                    })
                }
            </ul>
        </div>
    );
}

export default Task;