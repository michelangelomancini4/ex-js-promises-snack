function getPostTitle(id) {
    const promessa = new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(obj => resolve(obj))
            .catch(reject);
    })
    return promessa;
}

getPostTitle(4)
    .then(obj => console.log(obj.title))
    .catch(error => console.error(error))



// ***********  BONUS SNACK ************


function getPost(id) {

    return fetch(`https://dummyjson.com/posts/${id}`)
        .then(response => response.json())
        .then(post => {

            return fetch(`https://dummyjson.com/users/${post.userId}`)
                .then(response => response.json())
                .then(user => {
                    const postWithUser = { ...post, user: user };
                    return postWithUser;
                });
        });
}

getPost(1)
    .then(post => console.log(post))
    .catch(error => console.error("Errore:", error));
