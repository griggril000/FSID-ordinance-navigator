function openPages() {
    //   This function retrieves the IDs from the text area, splits them into an array, and opens each person page in a new tab.
    const inputIDs = document.getElementById('inputIDs').value.trim().toUpperCase(); // Trim whitespace and convert to uppercase

    const idArray = inputIDs.split(/[,|\n]+/); // Split input string into an array of IDs

    let errorMessage = '';

    for (const id of idArray) {
        // Check if the user entered at least one ID
        if (!inputIDs) {
            alert('Please enter at least one FamilySearch ID.');
            return; // Stop the function if there are no IDs
        }

        // Validate the ID format
        if (!isValidId(id)) {
            errorMessage += `${id}\n`;
        } else {
            const url = `https://www.familysearch.org/tree/person/ordinances/${id}`;
            window.open(url, '_blank'); // Open the person page in a new tab
        }
    }

    // Display the error message if there are any invalid IDs
    if (errorMessage) {
        document.getElementById('errorMessage').style.display = 'block';
        document.getElementById('errorMessage').textContent = "You entered one or more invalid IDs: " + errorMessage + ". Please use the format XXXX-XXX.";
    } else {
        document.getElementById('errorMessage').textContent = ''; // Hide the error message if it is empty
        document.getElementById('errorMessage').style.display = 'none';
    }
}

function isValidId(id) {
    // This function checks if the ID format is valid(XXXX - XXX).
    const regex = /^[A-Z0-9]{4}-[A-Z0-9]{3}$/;
    return regex.test(id);
}