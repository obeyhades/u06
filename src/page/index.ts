import "../style.css";

document.getElementById("showUsersBtn")?.addEventListener("click", async () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/user`;
  
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Cound not get user");
    }

    const usersDiv = document.getElementById("usersList");
    usersDiv!.innerHTML = "";

    data.forEach((user: any) => {
      const userElement = document.createElement("p");
      userElement.textContent = `${user.username} - ${user.email}`;
      usersDiv?.appendChild(userElement);
    });
  } catch (error) {
    console.error(error);
    window.alert("Something went wrong when trying to fetch user");
  }
});
