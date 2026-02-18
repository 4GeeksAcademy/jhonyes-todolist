import { useState } from 'react';
import Swal from 'sweetalert2';
import './TodoListForm.css';

export const TodoListForm = ({ agregarTarea }) => {
    const [valor, setValor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (valor.trim().length < 1) {
            Swal.fire({
                title: 'No hay nada escrito en "Agrega una tarea"',
                icon: 'error',
                showConfirmButton: true,
                confirmButtonColor: 'red',
                confirmButtonText: 'Cerrar',
                allowOutsideClick: false,
                allowEscapeKey: false,
            });
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
