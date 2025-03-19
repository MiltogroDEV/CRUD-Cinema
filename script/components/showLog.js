function showLog(log) {
    const logBox = document.getElementById("logBox");
    const logBoxContent = document.getElementById("logBoxContent");
    const logBoxClose = document.getElementById("logBoxContent");
    
    logBoxContent.textContent = log;
    logBox.style.display = "inline";
    
    logBoxClose.addEventListener('click', () => {
        logBox.style.display = "none";
    })
}

export { showLog };