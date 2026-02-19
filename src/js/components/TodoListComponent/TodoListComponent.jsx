import { useState } from 'react';
import { ListForm } from './ListForm/ListForm';
import { ListTareas } from './ListTareas/ListTareas';
import { ListCount } from './ListCount/ListCount';

import './TodoListComponent.css';

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
                <ListForm agregarTarea={handleAgregarTarea} />
                <ListTareas
                    tareas={tareas}
                    handleEliminar={handleClickEliminar}
                />
                <ListCount tareas={tareas} />
            </div>
        </div>
    );
};
