import Users from "./components/users";
import api from "./api";
import React, { useState } from "react";
import SearchStatus from "./components/searchStatus";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (id) => {
        const newUsers = users.filter((user) => user._id !== id);
        setUsers(newUsers);
    };
    const handleToggleBookmark = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                return { ...user, bookmark: !user.bookmark };
            }
            return user;
        });
        setUsers(newUsers);
    };
    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                users={users}
                handleDelete={handleDelete}
                handleToggleBookmark={handleToggleBookmark}
            />
        </div>
    );
};
export default App;
