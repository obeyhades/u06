import "../style.css"

document.getElementById("loginform")?.addEventListener("submit", async (e) => {
    e.preventDefault()

    const url = `${import.meta.env.VITE_BACKEND_URL}/user/login`;

    const username = (document.getElementById("username-input") as HTMLInputElement).value
    const password = (document.getElementById("password-input") as HTMLInputElement).value

     try {
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.message)
        }

        document.cookie = `userId=${data.user_id};`;
        
        
       window.location.href = `/editprofile.html`


     } catch (error) {
        console.error(error)
        
       window.alert(error)
     }



})

