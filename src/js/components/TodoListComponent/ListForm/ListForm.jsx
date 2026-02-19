import { useState } from 'react';
import './ListForm.css';
import { toast } from 'react-toastify';

export const ListForm = ({ agregarTarea }) => {
    const [valor, setValor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (valor.trim().length < 1) {
            toast.error('Debe introducir una tarea', {
                toastId: 'tarea',
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: false,
            });

            return;
        }

        agregarTarea(valor);
        toast.success(
            <span>
                Tarea <strong>{valor}</strong> creada correctamente
            </span>,
            {
                position: 'top-center',
                autoClose: 2000,
                closeOnClick: false,
            },
        );
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
