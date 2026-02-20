import { useState } from 'react';
import './ListForm.css';
import { toast } from 'react-toastify';

export const ListForm = ({ agregarTarea }) => {
    const [valor, setValor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (valor.trim() === '') {
            toast.error('Debe introducir una tarea', {
                toastId: 'tarea',
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: false,
            });
        } else agregarTarea(valor);

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
