import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../redux/constactsSlice";

const Contact = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => {
        state.contacts.items;
    });
    return (
        <div>
            <li key={id}>
                {name}- {phone}
                <button
                    style={{ marginLeft: "10px", backgroundColor: "transparent" }}
                    type="submit"
                    onClick={dispatch(() => {
                        deleteContact(id)
                    })}
                >
                    🗑
                </button>
            </li>
        </div>
    );
};

export default Contact;