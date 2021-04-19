export default function httpGET(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => response.text())
            .then((responseBody) => resolve(responseBody))
            .catch(reject);
    });
}
