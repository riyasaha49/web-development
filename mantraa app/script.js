let count = 0;
let cycle = 0;
let goal = 0;
function increaseCount() {
    count++;
    if (count > 108) {
        count = 1;
        cycle++;
    }
    if (cycle > 0 && cycle % 16 === 0) {
        goal = Math.floor(cycle / 16);
    }
    document.getElementById("count").innerText = count;
    document.getElementById("cycle").innerText = cycle;
    document.getElementById("goal").innerText = goal;
}
function decreaseCount() {
    if (count > 0) {
        count--;
    }
    document.getElementById("count").innerText = count;
}
function reset() {
    count = 0;
    cycle = 0;
    goal = 0;
    document.getElementById("count").innerText = count;
    document.getElementById("cycle").innerText = cycle;
    document.getElementById("goal").innerText = goal;
}
