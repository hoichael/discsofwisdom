
export default function expand(element) {
    element.classList.remove("blob-small")
    element.classList.add("blob-big")

    setTimeout(() => {
        element.classList.add("text-show")
      }, 500);
}