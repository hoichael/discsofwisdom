// this is really bad.

export default function getTextStyling(text) {

    console.log("STRING LENGTH: ", text.length)

    let expBaseRef = text.length > 168 ? text.length > 190 ? text.length ** 0.23 : text.length ** 0.215 : text.length ** 0.2;
    console.log("BASE REF: ", expBaseRef)

    if(window.innerWidth <= 600) expBaseRef *= 1.8;

    let fontSize = 100 / (expBaseRef * 1.25 + (expBaseRef * 0.1));
    console.log("FONT SIZE: ", fontSize);

    let padding = 200 - Math.exp(expBaseRef * 1.8);
    console.log("PADDING: ", padding);

    if(padding <= 35) padding = 35;

    return [fontSize, padding]
}