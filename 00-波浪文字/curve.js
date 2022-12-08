function getCurvePoints(curveFunc, range, number, xLength) {
    if (number < 1) {
        return [];
    }
    if (number === 1) {
        return [0];
    }
    const piece = (range[1] - range[0]) / (number - 1);
    const result = [];
    const scale = xLength / (range[1] - range[0]);
    for (let i = 0; i < number; i++) {
        result.push(-curveFunc(i * piece + range[0]) * scale);
    }
    return result;
}