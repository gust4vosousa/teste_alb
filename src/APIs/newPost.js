
export function getNewPost (id) {
    return (
        fetch (`https://6122a655d4462800170548f9.mockapi.io/newPost${id}`)
        .then ((response) => response.json())
    )
}

export function getNewPosts () {
    return (
        fetch (`https://6122a655d4462800170548f9.mockapi.io/newPost`)
        .then ((response) => response.json())
    )
}