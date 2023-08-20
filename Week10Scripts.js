// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  
  // Get references to the form and table body
  const form = document.getElementById('add-form');
  const tableBody = document.getElementById('table-body');

  // Handle form submission
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get input values from the form
    const id = document.getElementById('new-id').value;
    const name = document.getElementById('new-name').value;
    const email = document.getElementById('new-email').value;

    // Create a new table row
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${id}</td>
      <td>${name}</td>
      <td>${email}</td>
    `;

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear form inputs
    form.reset();
  });
});


