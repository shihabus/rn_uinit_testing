import axios from 'axios';

export default async()=>{
    const resp=await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    // console.log('dd',resp.data)
    return resp.data
}