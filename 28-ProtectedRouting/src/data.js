export let users = [
    {id: 1, name: "Raghav", role: "Developer"},
    {id: 2, name: "Amit", role: "Designer"}
];

export const addUser = (user) => {
    users.push(user);
};

export const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
};

export const updateUser = (id, updateUser) => {
    users = users.map(u => (u.id === id ? updatedUser : u));
};

