import './TodoListTareas.css';

export const TodoListTareas = ({ tareas, handleEliminar }) => {
    return (
        <ul>
            {tareas.map((tarea, index) => (
                <li className="tarea" key={index}>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="m-0">{tarea}</p>
                        <button
                            onClick={() => handleEliminar(index)}
                            className="btn-eliminar"
                        >
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};
