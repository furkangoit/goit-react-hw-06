import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { selectVisibleContacts } from '../redux/selectors';

export default function ContactList() {
    const visibleContacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul style={{ listStyle: 'none', padding: 0 }}>
            {visibleContacts.map(contact => (
                <li key={contact.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '8px',
                    marginBottom: '5px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                }}>
                    <span>
                        {contact.name}: {contact.number}
                    </span>
                    <button
                        onClick={() => handleDelete(contact.id)}
                        style={{
                            padding: '4px 8px',
                            backgroundColor: '#ff4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}