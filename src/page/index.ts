import "../style.css"

document.getElementById("showUsersBtn")?.addEventListener("click", async () => {
  const url = `${import.meta.env.VITE_BACKEND_URL}/user`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Kunde inte hämta användare");
    }

    const usersDiv = document.getElementById("usersList");
    usersDiv!.innerHTML = ""; // Rensa innan du lägger till nya

    data.forEach((user: any) => {
      const userElement = document.createElement("p");
      userElement.textContent = `👤 ${user.username} - ${user.email}`;
      usersDiv?.appendChild(userElement);
    });

  } catch (error) {
    console.error(error);
    window.alert("Något gick fel när användare skulle hämtas.");
  }
});
