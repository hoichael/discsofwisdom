
export default function httpGET(url) {
    return new Promise((resolve, reject) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            //    console.log(xhttp.responseText);
            resolve(xhttp.responseText);
            }
        };
    xhttp.onerror = reject;
    xhttp.open("GET", url, true);
    xhttp.send();
    })
} 
