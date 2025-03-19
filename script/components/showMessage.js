function showMessage(type, message) {
    const messageBox = document.getElementById("messageBox");
    const messageBoxContent = document.getElementById("messageBoxContent");

    // Definição de classes e cores
    if (type === "s") {
        messageBox.className = "alert alert-success";
        messageBox.style.backgroundColor = "rgba(60, 255, 0, 0.31)";
    } else if (type === "e") {
        messageBox.className = "alert alert-danger";
        messageBox.style.backgroundColor = "rgba(255, 0, 0, 0.31)";
    } else if (type === "w") {
        messageBox.className = "alert alert-warning";
        messageBox.style.backgroundColor = "rgba(255, 204, 0, 0.31)";
    }

    messageBoxContent.textContent = message;
    messageBox.style.display = "inline";
    messageBox.style.opacity = "1";

    setTimeout(() => {
        let opacity = 1;
        const fadeOut = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(fadeOut);
                messageBox.style.display = "none";
            } else {
                opacity -= 0.05;
                messageBox.style.opacity = opacity;
            }
        }, 50);
    }, 3000);
}

export { showMessage };
