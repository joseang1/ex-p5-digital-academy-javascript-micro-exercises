

function app() {
    const logName = document.getElementById("log");
    const inputName = document.getElementById("username");

    return logName.innertext = `Hello ${inputName.value}`;

    // inputName.addEventListener("keyup", () => {
    //     logName.innerText = `Hello ${inputName.value}`;
    // });
};

app();