import React from "react"

export default function SignIn() {

    const [formData, setFormData] = React.useState(
        {
            email: "",
            password: "",
            confirmPassword: "",
            newsletter: false
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if(formData.password === formData.confirmPassword) {
            console.log("Succesfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        if(formData.newsletter) {
            console.log("Thanks for signing up for our newsletter")
        }
    }   

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={formData.email}
            />
            <input 
                type="password"
                name="password"
                placeholder="Type your password"
                onChange={handleChange}
                value={formData.password}
            />
            <input 
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
                value={formData.confirmPassword}
            />
            <input 
                type="checkbox"
                id="joinNewsletter"
                checked={formData.newsletter}
                onChange={handleChange}
                name="newsletter"
            />
            <label htmlFor="joinNewsletter">I want to join the newsletter</label>
            <br />
            <br />
            <button>Sign up</button>
        </form>
    )
}