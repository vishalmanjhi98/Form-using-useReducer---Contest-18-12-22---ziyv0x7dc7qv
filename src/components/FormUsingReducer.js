import React,{ useReducer } from "react"
import { signUpFormReducer } from "../reducers/signUpFormReducer"
import { signUpFormValidation } from "../utils/signupformvalidation"
const initialFormState = {
    input:{
        "name":'',
        "email":'',
        "password":'',
        "consent":false
    },
    errors:{
        "name":'',
        "email":'',
        "password":'',
    }

}
const FormUsingReducer = () => {
    const [formState,dispatch] = useReducer(signUpFormReducer,initialFormState) 


    return (

    )
}

export { FormUsingReducer }