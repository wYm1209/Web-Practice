const container = document.querySelector('.container');
container.innerHTML = container.textContent
    .split('')
    .map(l => `<span>${l}</span>`)
    .join('');
function createCurve(func, range) {
    const points = getCurvePoints(
        func,
        range,
        container.children.length,
        container.clientWidth
    );
    for (let i = 0; i < points.length; i++) {
        container.children[i].style.transform = `translateY(${points[i]}px)`;
    }
}
createCurve(
    x => Math.sin(x),
    [0, 2 * Math.PI]
)