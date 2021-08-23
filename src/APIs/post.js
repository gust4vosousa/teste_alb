import { getUsers } from "./users"
import { getComments } from "./comment"

export function getPost(id) {
    return (
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
    )
}

export function getPosts() {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(async (response) => {
            const postsJSON = response.json()
            let users = getUsers()
            let comments = getComments()
            const posts = await postsJSON
            .then(post => post)
            users = await users
            .then(user => user)
            comments = await comments
            .then(comment => comment)
            
            const postsComposition = posts.map(post => ({
                ...post,
                user: users.filter(user => user.id === post.userId)[0],
                comment: comments.filter(comment => comment.postId === post.id)[0]
            }))
            return postsComposition;
        }
        )
    )
}