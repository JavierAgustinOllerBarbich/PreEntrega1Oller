import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);

    const [orderId, setOrderId] = useState('');

    const { cart, total, deleteAll } = useContext(CartContext);

    const totalPrice = total();

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();
       
        const order = {
            buyer: { name, lastName },
            items: cart,
            total: totalPrice,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then((res) => {
                setOrderId(res.id);
                deleteAll();
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setLoading(false));
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    console.log(orderId);

    if (orderId) {
        return (
            <h1>
                ¡Ya se realizo tu compra! Tu número de seguimiento es {orderId}
            </h1>
        );
    }

    return (
        <div
            style={{
                minHeight: '70vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form onSubmit={handleSubmit} action="">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre..."
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido..."
                    onChange={handleChangeLastName}
                    value={lastName}
                />
                <button>{loading ? 'Enviando...' : 'Enviar'}</button>
            </form>
        </div>
    );
};

export default Form;