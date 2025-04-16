import "../style.css"

document.getElementById("editProfileForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const id = document.cookie
    const url = `${import.meta.env.VITE_BACKEND_URL}/user4/${id}`;

    const username = (document.getElementById("usernameEdit") as HTMLInputElement).value
    const email =  (document.getElementById("emailEdit") as HTMLInputElement).value
    const password = (document.getElementById("passwordEdit") as HTMLInputElement).value

    console.log(username);
    
    
    try {        
        const response = await fetch(url,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        });
        
        if (!response.ok) {
            throw new Error(
                `Something went wrong trying to fetch data: ${response.status}`)
        }
        const data = await response.json();
        console.log("JAG FUNKAR", data);
     } catch (error) {
        console.error(error)
     }

})

