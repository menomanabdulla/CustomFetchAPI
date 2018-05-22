import fetchData from './fetchData'

let URL = 'https://jsonplaceholder.typicode.com/users'

let root = document.getElementById('root')

fetchData(URL)
    .then(value=>{
        value.forEach(elemn=>{
            console.log(`
                Name: ${elemn.name}
                Email: ${elemn.email}
            `);
        })
    })
    .catch(err=>{
        console.log(err);
    })