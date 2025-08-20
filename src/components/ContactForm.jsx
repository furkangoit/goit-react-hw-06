import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { selectContacts } from '../redux/selectors';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Aynı isimde kişi var mı kontrol et
        const isContactExists = contacts.some(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );

        if (isContactExists) {
            alert(`${name} is already in contacts`);
            return;
        }

        dispatch(addContact(name, number));
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>
                    Number:
                    <input
                        type="tel"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                        style={{ marginLeft: '10px', padding: '5px' }}
                    />
                </label>
            </div>
            <button type="submit" style={{ padding: '8px 16px' }}>
                Add contact
            </button>
        </form>
    );
}