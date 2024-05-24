export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip");

  if (tooltips) {
    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });

    function onMouseOver(event) {
      const tooltipBox = criarTooltip(this);

      onMouseLeave.tooltipBox = tooltipBox;
      onMouseMove.tooltipBox = tooltipBox;
      onMouseLeave.element = this;

      this.addEventListener("mouseleave", onMouseLeave);
      this.addEventListener("mousemove", onMouseMove);
    }

    const onMouseLeave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseLeave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    const onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = event.pageY + 20 + "px";
        this.tooltipBox.style.left = event.pageX + 20 + "px";
      },
    };

    function criarTooltip(element) {
      const tooltipBox = document.createElement("div");
      const textTooltip = element.getAttribute("aria-label");

      tooltipBox.classList.add("tooltip");
      tooltipBox.innerText = textTooltip;
      document.body.appendChild(tooltipBox);
      return tooltipBox;
    }
  }
}
