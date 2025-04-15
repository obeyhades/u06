import "../style.css"

document.getElementById("loginform")?.addEventListener("submit", async (e) => {
    e.preventDefault()

    const url = `${import.meta.env.VITE_BACKEND_URL}/user`;

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

//document.getElementById("submit-btn")?.addEventListener("click")