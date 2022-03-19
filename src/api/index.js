export const getPosts = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts';
    const response = await fetch(url)
    const json = await response.json()
    return json;
} 

export const newUser = async (username, password) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/register';
    try{
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: `${username}`,
                password: `${password}`
            }
        })
    });
    console.log(response)

    const json = await response.json();
    console.log(json)

    localStorage.setItem('stranger_things_JWT', json.data.token);

    return json;
    } catch (error){console.error(error, "Something's wrong with registering the user!")}
} 

export const testAuthentication = async () => {
    const url = `https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/api/2112-FTW-ET-WEB-PT/test/me`;
    const token = localStorage.getItem('stranger_things_JWT')
    console.log(token)
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response)

    const json = await response.json();
    console.log(json)

    return json;
};

export const logIn = async (username, password) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/login';
    try{
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: `${username}`,
                password: `${password}`
            }
        })
    });
    console.log(response)

    const json = await response.json();
    console.log(json)
    localStorage.setItem('stranger_things_JWT', json.data.token);

    return json;
    } catch (error){console.error(error, "Username or Password is incorrect.")}
} 


export const newPost = async (title, description, price, location, willDeliver) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts';
    const token = localStorage.getItem('stranger_things_JWT')
    try{
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            post: {
                title: title,
                description: description,
                price: price,
                location: location,
                willDeliver: willDeliver
            }
        })
    });
    console.log(response)
    const json = await response.json();
    console.log(json)

    return json;
    } catch (error){console.error(error, "Post is not sending to API.")}
}


export const getAuthPosts = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts';
    const token = localStorage.getItem('stranger_things_JWT')
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const json = await response.json()
    return json;
}

export const editPost = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts/POST_ID';
    const token = localStorage.getItem('stranger_things_JWT')
    const response = await fetch(url, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const json = await response.json()
    return json;
}

export const sendMessage = async (postId, content) => {
    const url = `https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts/${postId}/messages`;
    const token = localStorage.getItem('stranger_things_JWT')
    try{
    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            message: {
                content: content              
            }
        })
    });
    console.log(response)
    const json = await response.json();
    console.log(json)

    return json;
    } catch (error){console.error(error, "Message is not working.")}
}

export const getMe = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/me';
    const token = localStorage.getItem('stranger_things_JWT')
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })
    const json = await response.json()
    return json;
}

export const handleDelete = async (idToDelete) => {
    console.log(idToDelete);
    const url = `https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts/${idToDelete}`;
    const token = localStorage.getItem("stranger_things_JWT");
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    if (data) {
      const newPosts = posts.filter((post) => post.id !== idToDelete);
      setPosts(newPosts);
    }
};