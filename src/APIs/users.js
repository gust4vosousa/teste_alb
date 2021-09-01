
export function getUser (id) {
    return (
        fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
        .then ((response) => response.json())
    );
};

export function getUsers () {
    return (
        fetch (`https://jsonplaceholder.typicode.com/users/`)
        .then ((response) => response.json())
    );
};