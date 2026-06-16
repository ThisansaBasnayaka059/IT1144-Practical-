function showLoginMessage(event) {
    const loginForm = document.getElementById('loginForm');
    
    // Name and Email empty Pop-up not comming
    if (!loginForm.checkValidity()) {
        return; 
    }

    // stop browser Refresh 
    event.preventDefault();

    // reading Input 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // display Pop-up
    alert("Your login is successfully!");

    // showing under the HTML page
    const resultDiv = document.getElementById('resultDisplay');
    resultDiv.innerHTML = `
        <div style="border: 2px solid #cc9933; padding: 15px; border-radius: 6px; background-color: #f9f9f9; max-width: 320px; color: #111; text-align: left;">
            <h4 style="margin-top: 0; color: #cc9933;">Submitted Details:</h4>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>E-Mail:</strong> ${email}</p>
        </div>
    `;
}