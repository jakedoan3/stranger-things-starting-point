export const getPosts = async () => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts';
    const response = await fetch(url)
    const json = await response.json()
    return json;
} 

export const newUser = async (username, password) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/register';
    try{
        // Grab the body given back by the API
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

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    // TOKEN : json.data.token
    localStorage.setItem('stranger_things_JWT', json.data.token);

    return json;
    } catch (error){console.error(error, "Something's wrong with registering the user!")}
} 

export const testAuthentication = async () => {
    // URL that we're gonna reach out to
    const url = `https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/api/2112-FTW-ET-WEB-PT/test/me`;
    const token = localStorage.getItem('stranger_things_JWT')
    console.log(token)

    // Grab the body given back by the API
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    console.log(response)

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    return json;
};

export const logIn = async (username, password) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/login';
    try{
        // Grab the body given back by the API
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

    // Take the body we got back and convert it to JS Object
    const json = await response.json();
    console.log(json)

    // TOKEN : json.data.token
    localStorage.setItem('stranger_things_JWT', json.data.token);

    return json;
    } catch (error){console.error(error, "Username or Password is incorrect.")}
} 

// export const makeHeaders = async () => {
//     const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/users/login';
//     try{
//         // Grab the body given back by the API
//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json',
//             'Authentication' : `Bearer ${localStorage.getItem('stranger_things_JWT')}`
//         },
//     });

//     // Take the body we got back and convert it to JS Object
//     const json = await response.json();
//     console.log(json)

//     // TOKEN : json.data.token
//     localStorage.setItem('stranger_things_JWT', json.data.token);

//     return json;
//     } catch (error){console.error(error, "Something's wrong with registering the user!")}
// } 


export const newPost = async (title, description, price, location, willDeliver) => {
    const url = 'https://strangers-things.herokuapp.com/api/2112-FTB-ET-WEB-PT/posts';
    const token = localStorage.getItem('stranger_things_JWT')
    try{
        // Grab the body given back by the API
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
                willDeliver: false
            }
        })
    });
    console.log(response)
    const json = await response.json();
    console.log(json)

    return json;
    } catch (error){console.error(error, "Post is not sending to API.")}
}



