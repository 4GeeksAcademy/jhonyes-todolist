import { useState } from 'react';
import './TodoList.css';

export const TodoList = () => {
    const [valorTarea, setValorTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handleKeyDownAgregar = (e) => {
        e.preventDefault();

        setTareas([...tareas, valorTarea]);
        setValorTarea('');
    };

    const handleClickEliminar = (key) => {
        const nuevaTarea = tareas.filter((_, index) => index !== key);

        setTareas(nuevaTarea);
    };

    const totalTareas =
        tareas.length > 0
            ? `${tareas.length} ${tareas.length === 1 ? 'tarea' : 'tareas'} por hacer`
            : 'No hay tareas pendientes';

    return (
        <div className="container mt-5">
            <h1>todos</h1>

            <div className="todos">
                <form onSubmit={handleKeyDownAgregar}>
                    <input
                        type="text"
                        value={valorTarea}
                        onChange={(e) => setValorTarea(e.target.value)}
                        placeholder="Agrega una tarea"
                    />
                </form>

                <ul>
                    {tareas.map((tarea, index) => (
                        <li className="tarea" key={index}>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="m-0">{tarea}</p>
                                <button
                                    onClick={() => handleClickEliminar(index)}
                                    className="btn-eliminar"
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <hr />
                <div className="numero-tareas">
                    <p>{totalTareas}</p>
                </div>
            </div>
        </div>
    );
};
