const APIUrl = "https://jsonplaceholder.typicode.com"

const RequestGet = async (path = "") => {
    path = APIUrl + path
    return await fetch(path).then((response) => response.json())
}
const RequestPost = async (path, data) => {
    path = APIUrl + path
    return await fetch(path, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
    }).then((response) => response.json)
}

const RequestDelete = async (path = "") => {
    path = APIUrl + path
    return await fetch(path, {
        method: "DELETE",
        headers: {
            "Content-type": "applicantion/json",
        },
    }).then((response) => response.json())
}

const RequestPatch = async (path, data) => {
    return await fetch(path, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "applicantion/json",
        },
    }).then((response) => response.json())
}
window.addEventListener("DOMContentLoaded", () => {
    const getBtn = document.querySelector("#get-btn")
    const resultTable = document.querySelector("article tbody")
    console.log(getBtn, resultTable)
    getBtn.addEventListener("click", () => {
        resultTable.innerHTML = "Loading..."
        RequestGet("/posts").then((data) => {
            if (data) {
                resultTable.innerHTML = ""
                data.forEach((element) => {
                    //beginend , beforeend , afterend , afterbegin (ставит элементы до или после div`а )
                    resultTable.insertAdjacentHTML(
                        "beforeend",
                        `
                    <tr>
                        <td>${element.userId}</td>
                        <td>${element.title}</td>
                        <td>${element.body}</td>
                        <td>
                            <button type="button">&times;</button>
                        </td>
                    </tr>`
                    )
                })
            }
        })
    })
})
