var windowMain = document.createElement('div');
windowMain.classList.add('windowMain');
document.body.appendChild(windowMain);

const title = document.createElement('h1');
title.classList.add('title');
title.innerHTML = "Виртуальная клавиатура";
windowMain.appendChild(title);

const textContainer = document.createElement('input');
textContainer.classList.add('textContainer');
windowMain.appendChild(textContainer);

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboardContainer');
windowMain.appendChild(keyboardContainer);

const description = document.createElement('h2');
description.classList.add('description');
description.innerHTML = "Клавиатура создана в операционной системе Windows<br>Комбинация для переключения языка: левыe ctrl + alt";
windowMain.appendChild(description);

let keyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9650;', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9664;', '&#9660;', '&#9654;', 'Ctrl'];

function generateKeys() {
    let key;
    for (let i = 0; i < keyboard.length; i++) {
        key = document.createElement('button');
        key.classList.add('key');
        if ((keyboard[i] === 'Backspace')) {
            key.classList.add('long');
            key.classList.add('Backspace');
        } else if (keyboard[i] === 'CapsLock') {
            key.classList.add('long');
            key.classList.add('CapsLock');
        } else if (keyboard[i] === 'Shift') {
            key.classList.add('long');
            key.classList.add('Shift');
        } else if (keyboard[i] === 'Enter') {
            key.classList.add('long');
            key.classList.add('Enter');
        } else if (keyboard[i] === 'Tab') {
            key.classList.add('dark');
            key.classList.add('Tab');
        } else if (keyboard[i] === 'Ctrl') {
            key.classList.add('dark');
            key.classList.add('Control');
        } else if (keyboard[i] === 'Win') {
            key.classList.add('dark');
            key.classList.add('MetaLeft');
        } else if (keyboard[i] === 'Alt') {
            key.classList.add('dark');
            key.classList.add('Alt');
        } else if (keyboard[i] === 'Del') {
            key.classList.add('dark');
            key.classList.add('Delete');
        } else if (keyboard[i] === '&#9654;') {
            key.classList.add('dark');
            key.classList.add('ArrowRight');
        } else if (keyboard[i] === '&#9664;') {
            key.classList.add('dark');
            key.classList.add('ArrowLeft');
        } else if (keyboard[i] === '&#9650;') {
            key.classList.add('dark');
            key.classList.add('ArrowUp');
        } else if (keyboard[i] === '&#9660;') {
            key.classList.add('dark');
            key.classList.add('ArrowDown');
        } else if (keyboard[i] === ' ') {
            key.classList.add('space');
        } else {
            key.classList.add('light');
        }
        key.innerHTML = keyboard[i];
        keyboardContainer.appendChild(key);
    }
}
generateKeys();

var keys = document.querySelectorAll('.key');
var keysLight = document.querySelectorAll('.light');
const input = document.querySelector('.textContainer');
const space = document.querySelector('.space');
const backspace = document.querySelector('.Backspace');

Array.from(keysLight).map(bt => {
    bt.addEventListener("click", () => {
        input.value += bt.innerHTML.toLowerCase();
    });
});

space.addEventListener("click", () => {
    input.value += " ";
    input.focus();
});

var currentKey;
var lastletter;

document.addEventListener('keydown', function(event) {
    currentKey = event.code;
    lastletter = currentKey[currentKey.length - 1].toLowerCase();
    console.log(lastletter);
    console.log(currentKey);
    Array.from(keys).map(e => {
        if (currentKey === 'Delete' && e.innerHTML === 'Del') {
            e.style.backgroundColor = '#E63946';
        } else if (currentKey === e.innerHTML) {
            e.style.backgroundColor = '#E63946';
        } else if (currentKey === 'Space' && e.innerHTML === ' ') {
            e.style.backgroundColor = '#E63946';
        } else if (e.innerHTML === 'Shift' && currentKey === 'ShiftLeft') {
            e.style.backgroundColor = '#E63946';
        } else if (e.innerHTML === 'Shift' && currentKey === 'ShiftRight') {
            e.style.backgroundColor = '#E63946';
        } else if (e.innerHTML === 'Alt' && currentKey === 'AltLeft') {
            e.style.backgroundColor = '#E63946';
        } else if (e.innerHTML === 'Alt' && currentKey === 'AltLeft') {
            e.style.backgroundColor = '#E63946';
        } else if (e.innerHTML === 'Win' && currentKey === 'MetaLeft') {
            e.style.backgroundColor = '#E63946';
        } else if (e.innerHTML === 'Ctrl' && currentKey === 'ControlLeft') {
            e.style.backgroundColor = '#E63946';
        } else if (e.innerHTML === 'Ctrl' && currentKey === 'ControlRight') {
            e.style.backgroundColor = '#E63946';
        } else if (currentKey === 'ArrowUp' && e.innerHTML === '&#9650;') {
            e.style.backgroundColor = '#E63946';
        } else if (currentKey === 'ArrowLeft' && e.innerHTML === '&#9664;') {
            e.style.backgroundColor = '#E63946';
        } else if (currentKey === 'ArrowDown' && e.innerHTML === '&#9660;') {
            e.style.backgroundColor = '#E63946';
        } else if (currentKey === 'ArrowRight' && e.innerHTML === '&#9654;') {
            e.style.backgroundColor = '#E63946';
        } else if (lastletter === e.innerHTML) {
            e.style.backgroundColor = '#E63946';
        }
    });

});

document.addEventListener('keyup', function(event) {
    currentKey = event.code;
    lastletter = currentKey[currentKey.length - 1].toLowerCase();
    console.log(lastletter);
    Array.from(keys).map(e => {
        if (currentKey === 'Delete' && e.innerHTML === 'Del') {
            e.style.backgroundColor = '#457B9D';
        } else if (currentKey === e.innerHTML) {
            e.style.backgroundColor = '#457B9D';
        } else if (currentKey === 'Space' && e.innerHTML === ' ') {
            e.style.backgroundColor = '#457B9D';
        } else if (e.innerHTML === 'Shift' && currentKey === 'ShiftLeft') {
            e.style.backgroundColor = '#457B9D';
        } else if (e.innerHTML === 'Shift' && currentKey === 'ShiftRight') {
            e.style.backgroundColor = '#457B9D';
        } else if (e.innerHTML === 'Alt' && currentKey === 'AltLeft') {
            e.style.backgroundColor = '#457B9D';
        } else if (e.innerHTML === 'Alt' && currentKey === 'AltLeft') {
            e.style.backgroundColor = '#457B9D';
        } else if (e.innerHTML === 'Win' && currentKey === 'MetaLeft') {
            e.style.backgroundColor = '#457B9D';
        } else if (e.innerHTML === 'Ctrl' && currentKey === 'ControlLeft') {
            e.style.backgroundColor = '#457B9D';
        } else if (e.innerHTML === 'Ctrl' && currentKey === 'ControlRight') {
            e.style.backgroundColor = '#457B9D';
        } else if (currentKey === 'ArrowUp' && e.innerHTML === '&#9650;') {
            e.style.backgroundColor = '#457B9D';
        } else if (currentKey === 'ArrowLeft' && e.innerHTML === '&#9664;') {
            e.style.backgroundColor = '#457B9D';
        } else if (currentKey === 'ArrowDown' && e.innerHTML === '&#9660;') {
            e.style.backgroundColor = '#457B9D';
        } else if (currentKey === 'ArrowRight' && e.innerHTML === '&#9654;') {
            e.style.backgroundColor = '#457B9D';
        } else if (lastletter === e.innerHTML) {
            e.style.backgroundColor = '#457B9D';
        }
    });

});

let cursorPosition;

input.addEventListener('keyup.', e => {
    cursorPosition = e.target.selectionStart;
})

backspace.addEventListener("click", () => {
    input.value = input.value.slice(0, input.value[cursorPosition - 1]) + input.value.slice(input.value[cursorPosition + 1], input.length);

});