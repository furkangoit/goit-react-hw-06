import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../redux/filtersSlice";
import { deleteContact } from "../redux/constactsSlice";
import css from "./searxBox.module.css";
const SearchBox = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const dispatch = useDispatch();
    const selectNameFilter = useSelector((state) => state.filter.name);
    const filtered = contacts.filter((contact) =>
        (contact.name || " ")
            .toLowerCase()
            .includes((selectNameFilter || "").toLowerCase())
    );
    return (
        <div>
            <div className={css.search}>
                <p>Find Contacts by name</p>
                <input
                    type="text"
                    name="filter"
                    value={selectNameFilter}
                    placeholder="Search contacts..."
                    onChange={(e) => dispatch(filterContact(e.target.value))}
                />
                <button className={css.findBtn} type="submit">
                    Find
                </button>
                <ul>
                    {filtered.map((contact) => (
                        <li key={contact.id}>
                            {contact.name}-{contact.phone}
                            <button
                                onClick={() => dispatch(deleteContact(contact.id))}
                                style={{ marginLeft: "10px", backgroundColor: "transparent" }}
                            >
                                🗑
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchBox;