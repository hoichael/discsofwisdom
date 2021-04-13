
export default function handleResponse(response, which) {

    switch(which) {
        case "advice":
            return JSON.parse(response).slip.advice;

        case "number":
            return response;

        case "norris":
            return JSON.parse(response).value;

    }

}