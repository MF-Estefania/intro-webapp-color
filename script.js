document.addEventListener('DOMContentLoaded', function () {
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');

    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');

    const rInput = document.getElementById('rInput');
    const gInput = document.getElementById('gInput');
    const bInput = document.getElementById('bInput');

    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    const colorPicker = document.getElementById('colorPicker');

    function updateColor() {
        const r = redRange.value;
        const g = greenRange.value;
        const b = blueRange.value;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        rInput.value = r;
        gInput.value = g;
        bInput.value = b;

        const rgbColor = `rgb(${r}, ${g}, ${b})`;
        const hexColor = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`;

        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor.toUpperCase();
        colorPicker.value = hexColor;
    }

    function updateRangeFromInput(event) {
        const input = event.target;
        const value = input.value;

        if (input === redInput) {
            redRange.value = value;
        } else if (input === greenInput) {
            greenRange.value = value;
        } else if (input === blueInput) {
            blueRange.value = value;
        }

        updateColor();
    }

    function updateInputsFromRange(event) {
        const range = event.target;
        const value = range.value;

        if (range === redRange) {
            redInput.value = value;
        } else if (range === greenRange) {
            greenInput.value = value;
        } else if (range === blueRange) {
            blueInput.value = value;
        }

        updateColor();
    }

    function updateFieldsFromDecimalInput() {
        const r = Math.min(Math.max(parseInt(rInput.value, 10) || 0, 0), 255);
        const g = Math.min(Math.max(parseInt(gInput.value, 10) || 0, 0), 255);
        const b = Math.min(Math.max(parseInt(bInput.value, 10) || 0, 0), 255);

        redRange.value = r;
        greenRange.value = g;
        blueRange.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    }

    function updateFromColorPicker() {
        const hexColor = colorPicker.value;
        const red = parseInt(hexColor.substr(1, 2), 16);
        const green = parseInt(hexColor.substr(3, 2), 16);
        const blue = parseInt(hexColor.substr(5, 2), 16);

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;
        rInput.value = red;
        gInput.value = green;
        bInput.value = blue;

        updateColor();
    }

    redRange.addEventListener('input', updateInputsFromRange);
    greenRange.addEventListener('input', updateInputsFromRange);
    blueRange.addEventListener('input', updateInputsFromRange);

    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    rInput.addEventListener('input', updateFieldsFromDecimalInput);
    gInput.addEventListener('input', updateFieldsFromDecimalInput);
    bInput.addEventListener('input', updateFieldsFromDecimalInput);

    colorPicker.addEventListener('input', updateFromColorPicker);

    // Inicializar el color
    updateColor();
});
