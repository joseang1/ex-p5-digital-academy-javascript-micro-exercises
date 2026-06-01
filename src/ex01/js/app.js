

function app() {
    // console.log('ex 01');

    const heading = document.createElement("h1");
    const text = document.createTextNode("Hello JavaScript");
    heading.appendChild(text);
    document.body.appendChild(heading);

    // const heading = document.createElement("h1");
    // heading.textContent = "Hello JavaScript";
    // document.body.appendChild(heading);

    // document.body.insertAdjacentHTML("beforeend", `
    //     <h1>Hello JavaScript</h1>
    //     `)
}

app();