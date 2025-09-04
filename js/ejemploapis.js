const div2 = document.getElementById("div2");

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    div2.innerHTML = `<h3>${data.name}</h3>
                        <p>${data.order}</p>
                          <img src="${data.sprites.front_default}" alt="${data.name}">`;
                          
  } catch (error) {
    console.error("Error fetching data:", error);
    div2.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
  }
}

fetchData(url);
