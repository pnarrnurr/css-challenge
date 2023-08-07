const pointArea = document.querySelector('.area');

if (pointArea) {
    for (let i = 1; i <= 15; i++) {
        const rotateDeg = 45;
        const pointSet = document.createElement("div");
        pointSet.classList.add(`point-set`);
        pointSet.classList.add(`item-${i}`);
        pointSet.setAttribute("point-set", "");
        pointSet.style.transform = `rotate(${rotateDeg - ((i - 1) * 6)}deg)`
        pointArea.appendChild(pointSet);

        for (let k = 1; k <= 2; k++) {
            let item = "top";
            if (k == 2) item = "bottom"
            const points = document.createElement("div");
            points.classList.add(`points`);
            pointSet.appendChild(points);

            for (let j = 1; j <= 2; j++) {
                const point = document.createElement("div");
                point.classList.add(`point`);
                point.classList.add(`item-${j}`)
                points.appendChild(point);
            }
        }
    }
}