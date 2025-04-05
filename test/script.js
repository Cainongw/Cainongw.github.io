document.addEventListener("keydown", function(event) {
    if (event.key === "F2") {
        event.preventDefault();
    }
});

window.onload = function() {
    let hiddenText = "-----BEGIN PRIVATE KEY-----\n" +
        "MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEA1IFDjqjcPYYccUvd\n" +
        "/GkU/qmBa7+tu6gp6C4fagHONB8Zx/TkvDMmwmmVzhMJecY+vmz9mbgKoxWNMKEa\n" +
        "LthF8QIDAQABAkBonq8s5/NuEr2kBa7nWrCsY7VE39xfm/3twe9TWEo1nAgtL/tC\n" +
        "b58tnR06+oZQOaYFNVFRULh8HECDQnJmMiqVAiEA9jQ+qhRTw/K5aFs0aVadQLSG\n" +
        "ugSJqpm/iXjOUFSdJuMCIQDc9cVAzTBDZ81aaV/NLKRUONwgstTQfZVbY1DHpEHk\n" +
        "GwIgcqa7s8pJg8tpie5HBvLdwf8PalqonTiB2IvYT9JHaI8CIE6UjRj1oANoyAwu\n" +
        "S2bBSJO3QPnT/4FCGDrPACxvywsfAiB1RzAUdS3gjgX4tXOUQwEfDAKCzqN74npG\n" +
        "ubMGGlXm6g==\n" +
        "-----END PRIVATE KEY-----";
    
    let textContainer = document.createElement("p");
    textContainer.className = "hidden-text";
    textContainer.innerText = hiddenText;
    document.body.appendChild(textContainer);
}
