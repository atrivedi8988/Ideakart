import axios from "axios"

export const getBooksData = ()=>{
    return axios.get(`https://dry-savannah-48520.herokuapp.com/books`)
}

export const getBooksDataById = (id)=>{
    return axios.get(`https://dry-savannah-48520.herokuapp.com/books/${id}`)
}

export const signUpData = (payload)=>{
    console.log(payload)
    return axios.post(`https://dry-savannah-48520.herokuapp.com/signUpUsers`,{
        payload
    })
}

export const signinData = ()=>{
    return axios.get(`https://dry-savannah-48520.herokuapp.com/signUpUsers`)
}
