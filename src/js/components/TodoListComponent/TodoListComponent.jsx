import { useState } from 'react';
import './TodoListComponent.css';
import { TodoListForm } from './TodoListForm/TodoListForm';
import { TodoListTareas } from './TodoListTareas/TodoListTareas';
import { TodoListCount } from './TodoListCount/TodoListCount';

export const TodoListComponent = () => {
    const [tareas, setTareas] = useState([]);

    const handleAgregarTarea = (tarea) => {
        setTareas([...tareas, tarea]);
    };

    const handleClickEliminar = (key) => {
        const auxTareas = tareas.filter((_, index) => index !== key);

        setTareas(auxTareas);
    };

    return (
        <div className="container mt-5">
            <h1>todos</h1>
            <div className="todos">
                <TodoListForm agregarTarea={handleAgregarTarea} />
                <TodoListTareas
                    tareas={tareas}
                    handleEliminar={handleClickEliminar}
                />
                <TodoListCount tareas={tareas} />
            </div>
        </div>
    );
};
