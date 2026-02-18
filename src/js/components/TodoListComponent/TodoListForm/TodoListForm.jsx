import { useState } from 'react';
import './TodoListForm.css';

export const TodoListForm = ({ agregarTarea }) => {
    const [valor, setValor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (valor.trim().length < 1) {
            alert('No ha escrito ninguna tarea');
            return;
        }

        agregarTarea(valor);
        setValor('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                placeholder="Agrega una tarea"
            />
        </form>
    );
};
