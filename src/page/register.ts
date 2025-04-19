import "../style.css"

document.getElementById("registerform")?.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const url = `${import.meta.env.VITE_BACKEND_URL}/user`;

    const username = (document.getElementById("usernameReg") as HTMLInputElement).value
    const email =  (document.getElementById("emailReg") as HTMLInputElement).value
    const password = (document.getElementById("passwordReg") as HTMLInputElement).value

    
    
    
    try {        
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        });
        console.log('gfgdf');
        
        console.log(response);
        
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

