import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../redux/filtersSlice';
import { selectNameFilter } from '../redux/selectors';

export default function SearchBox() {
    const filter = useSelector(selectNameFilter);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeFilter(e.target.value));
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <label>
                Find contacts by name:
                <input
                    type="text"
                    value={filter}
                    onChange={handleChange}
                    placeholder="Search contacts..."
                    style={{
                        marginLeft: '10px',
                        padding: '5px',
                        width: '200px'
                    }}
                />
            </label>
        </div>
    );
}