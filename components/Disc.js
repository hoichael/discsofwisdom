import { useState, useRef } from "react"
import expand from "../utils/expand"
import shrink from "../utils/shrink"
import httpGET from "../utils/httpGET"
import handleResponse from "../utils/handleResponse"
import getTextStyling from "../utils/getTextStyling"

export default function Blob( { blobInfo, current, setCurrent } ) {

    const [text, setText] = useState("");
    const [fontS, setFontS] = useState(2);
    const [padding, setPadding] = useState()
    let currentlyTransitioning = useRef(false);

    function handleClick() {
      if(currentlyTransitioning.current) { return };

      const htmlElement = document.getElementsByClassName(`blob-${blobInfo.color}`)[0];

        switch(current) {
            case "none":
                setCurrent(blobInfo.id);
                htmlElement.classList.remove("pointer")

                httpGET(blobInfo.api).then((result) => {
                    let textTemp = handleResponse(result, blobInfo.id)
                    setText(textTemp);
                    setFontS(getTextStyling(textTemp)[0]);
                    setPadding(getTextStyling(textTemp)[1]);
                });

                expand(htmlElement);
                currentlyTransitioning.current = true;

                setTimeout(() => {
                    currentlyTransitioning.current = false;
                    htmlElement.classList.add("pointer")
                }, 1000);
                break;

              case blobInfo.id:
                setCurrent("none");
                htmlElement.classList.remove("pointer")
                setText("");
                setPadding(0);
                shrink(htmlElement);
                currentlyTransitioning.current = true;

                setTimeout(() => {
                    currentlyTransitioning.current = false;
                    htmlElement.classList.add("pointer")
                }, 1000);
                break;

              default:
                return;
        }

    }

    const fontStyling = {
      fontSize: fontS,
      paddingTop: padding
    }

    return (
      <div className={`blob-base blob-small blob-${blobInfo.color} text-hide pointer`} style={fontStyling} onClick={handleClick}>
          {text}
      </div>
    )
  }