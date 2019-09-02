import './index.scss';

const red = document.querySelector('.red-input');
const green = document.querySelector('.green-input');
const blue = document.querySelector('.blue-input');
const btn = document.querySelector('.rgb-to-hex');
const result = document.querySelector('.result');
const color = document.querySelector('.color');

const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

btn.onclick = () => {
    const result1 = rgbToHex(Number(red.value), Number(green.value), Number(blue.value));
    result.innerHTML = result1;
    color.value = result1.toString();
    console.log(result1);
};
