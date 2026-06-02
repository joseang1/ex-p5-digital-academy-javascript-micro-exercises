

function app() {
    const logName = document.getElementById("log");
    const name = document.getElementById("username")
    const inputName = document.getElementById("button");


    inputName.addEventListener("click", () => {
        logName.innerText = `Hello ${name.value}`;
    });
};

app();