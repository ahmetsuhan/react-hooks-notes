import React from 'react'
import useInput from './hooks/useInput';

const UserForm = () => {


    const [firstName,bindFirstName,resetFirstName] = useInput('');
    const [lastName,bindLastName,resetLastName] = useInput('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e) }>
                <div>
                    <label>First Name</label>
                    <input 
                        {...bindFirstName}
                    type="text"/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input 
                    {...bindLastName} 
                    type="text"/>
                </div>
                <button type="submit">Gönder</button>
            </form>
        </div>
    )
}

export default UserForm
