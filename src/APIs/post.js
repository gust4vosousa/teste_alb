
export function getPost (id) {
    return (
        fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then ((response) => response.json())
    )
}

export function getPosts () {
    return (
        fetch ('https://jsonplaceholder.typicode.com/posts')
        .then ((response) => response.json())
    )
}
