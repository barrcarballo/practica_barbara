async function fetchData() {
  const div3 = document.getElementById("div3");
  const url = "https://api.sampleapis.com/avatar/characters";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const lista = document.createElement("ul");
    const data = await response.json();
    data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `${item.name} - Nationality: ${item.bio.nationality}
      <img src="${item.image}" alt="${item.name}" width="10%">`;

      lista.appendChild(listItem);
    });
    div3.appendChild(lista);
  } catch (error) {
    console.error("Error fetching data:", error);
    div3.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
  }
}

fetchData();
