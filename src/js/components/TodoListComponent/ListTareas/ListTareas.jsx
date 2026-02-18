import './ListTareas.css';

export const ListTareas = ({ tareas, handleEliminar }) => {
    return (
        <>
            {tareas.map((tarea, index) => (
                <div className="tarea" key={index}>
                    <p className="m-0">{tarea}</p>
                    <button
                        onClick={() => handleEliminar(index)}
                        className="btn-eliminar"
                    >
                        <i className="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            ))}
        </>
    );
};
