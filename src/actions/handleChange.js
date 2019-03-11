import {HANDLE_CHANGE}  from './type'

export const handleChange = ({ name, value }) => {
    return {
        type: HANDLE_CHANGE,
        payload: { name, value }
    }
}