document.getElementById("fetchButton").addEventListener("click", fetchDogImage);

function fetchDogImage() {
    const displayArea = document.getElementById("dogImage");
    const errorMessage = document.getElementById("errorMessage");

    // Clear any previous data
    displayArea.style.display = "none";
    errorMessage.textContent = "";

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            // Display the fetched dog image
            displayArea.src = data.message;
            displayArea.style.display = "block";
        })
        .catch(error => {
            // Handle and display any errors
            errorMessage.textContent = `Error fetching data: ${error.message}`;
        });
}
