function createElem (num) {
    const elem = document.createElement(`img`);
    elem.src = num >= 50 ? 'leaf.png' : 'explosion.jpg';
    return elem;
}
const clickHandler = function () {
    const img = createElem(Math.random() * 100);
    div.append(img);
    btns.forEach(el => el.removeEventListener(`click`, clickHandler));
};

const btns = [...document.getElementsByTagName(`button`)];
const div = document.getElementsByTagName(`div`)[0];
btns.forEach(el => el.addEventListener(`click`, clickHandler));



