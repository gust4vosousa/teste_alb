
export function getComment (id) {
    return (
        fetch (`https://jsonplaceholder.typicode.com/comments/${id}`)
        .then ((response) => response.json())
    );
};

export function getComments () {
    return (
        fetch (`https://jsonplaceholder.typicode.com/comments/`)
        .then ((response) => response.json())
    );
};