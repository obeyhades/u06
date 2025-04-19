import "../style.css"

function getCookie(cookie: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + cookie + '=([^;]+)'));
    return match ? match[2] : null;
}
  
  document.getElementById("editProfileForm")?.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const userId = getCookie("userId");
    if (!userId) {
      alert("User ID not found in cookies.");
      return;
    }
    const url = `${import.meta.env.VITE_BACKEND_URL}/user/${userId}`;


    const username = (document.getElementById("usernameEdit") as HTMLInputElement).value
    const email =  (document.getElementById("emailEdit") as HTMLInputElement).value
    const password = (document.getElementById("passwordEdit") as HTMLInputElement).value
   

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

document.getElementById("deleteBtn")?.addEventListener("click", async () => {
    const userId = getCookie("userId");
    if (!userId) {
      alert("User ID not found in cookies.");
      return;
    }
  
    const confirmDelete = confirm("Are you sure you want to delete your account?");
    if (!confirmDelete) return;
  
    const url = `${import.meta.env.VITE_BACKEND_URL}/user/${userId}`;
  
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
  
      if (!response.ok) {
        throw new Error(`Something went wrong trying to delete user: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("ACCOUNT DELETED:", data);
  
      document.cookie = "userId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
      
      window.location.href = "/login.html";
    } catch (error) {
      console.error(error);
      alert("Failed to delete your account. Try again.");
    }
  });
  