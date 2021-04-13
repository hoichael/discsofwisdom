
export default function shrink(element) {
    element.classList.remove("blob-big")

    element.classList.remove("text-show")

    setTimeout(() => {
        element.classList.add("blob-small")
      }, 300);
}