let sliders = Array.from(document.querySelectorAll("input"));

let colorSource = getComputedStyle(document.body);

let updateColor = (e) => {
    document.body.style.setProperty(`--${e.target.dataset.color}`, e.target.value);
    e.target.nextElementSibling.innerText = e.target.value;
}

sliders.forEach(slider =>{
    slider.value = parseInt(colorSource.getPropertyValue(`--${slider.dataset.color}`));
    slider.addEventListener("change", updateColor);
    let fakeEvent = new Event("change");
    slider.dispatchEvent(fakeEvent);
});