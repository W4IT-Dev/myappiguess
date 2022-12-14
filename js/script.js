settings.style.display = 'none';
session.style.display = 'none';
editTime.style.display = 'none';


moves['r'] = new Array("R", "R'", "R2");
moves['l'] = new Array("L", "L'", "L2");
moves['u'] = new Array("U", "U'", "U2");
moves['d'] = new Array("D", "D'", "D2");
moves['f'] = new Array("F", "F'", "F2");
moves['b'] = new Array("B", "B'", "B2");

keys = new Array("r", "l", "u", "d", "f", "b");

if (loadScreen.style.display == 'block') {
    load = setInterval(() => { progress.value += .09 }, 150)
} else {
    clearInterval(load);
}
setTimeout(() => { loadScreen.style.display = 'none'; document.querySelector('footer').style.opacity = '1' }, 2300)


function softkey(e) {
    const { target, key, bubbles, cancelable, repeat, type } = e;
    if (!/Left|Right/.test(key) || !key.startsWith("Arrow") || !e.ctrlKey) return;
    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();
    target.dispatchEvent(new KeyboardEvent(type, { key: "Soft" + key.slice(5), bubbles, cancelable, repeat }));
}

document.addEventListener("keyup", softkey, true);
document.addEventListener("keydown", softkey, true);