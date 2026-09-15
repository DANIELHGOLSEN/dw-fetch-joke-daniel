const baseUrl = "https://icanhazdadjoke.com"
const divElm = document.querySelector(".joke__div")

// fetch(baseUrl, {
//     headers: {
//         Accept: "application/json"
//     }
// })
//     .then(result => result.json())
//     .then(data => {
//         divElm.innerHTML = `
//     <li>
//         <p>${data.joke}</p>
//     </li>
//     `
//     })


async function getData() { //Denne function er async. Dette betyder at den tjekker, og reurnerer fejl før den har koden færdig.
    try { //try catch bruges her så hvis en fejl opstår kan den fanges og sendes til nogen der kan kigge på den ie dig eller brugeren.
        const response = await fetch(baseUrl, {
            headers: {
                Accept: "application/json"
            }
        })

        if (!response.ok) {
            throw new Error("Du gay.")
        }

        const result = await response.json()
        divElm.innerHTML = `
        <li>
            <p>${result.joke}</p>
        </li>
        `
    } catch (error) {
        console.log(error)
    }
}
getData()