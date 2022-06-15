// Code your solution in this file!
function distanceFromHqInBlocks(bStart) {
    if (bStart > 42)
        return bStart - 42;
    defualt:
        return 42 - bStart;
}

function distanceFromHqInFeet(fStart) {
    if (fStart > 42)
        return (fStart - 42) * 264;
    defualt:
        return (42-fStart) * 264;
}

function distanceTravelledInFeet(fLocation, dLocation) {
    if (fLocation > dLocation)
        return (fLocation - dLocation) * 264;
    defualt:
        return (dLocation - fLocation) * 264;
}

function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination);
    let distanceTravelled = blockDistance * 264;
    if (distanceTravelled <= 400) {
        console.log("give customers a free sample");
        return 0;
    }
    else if (distanceTravelled >= 2500) {
        return "cannot travel that far";
    }
    else if (400 < distanceTravelled && distanceTravelled < 2000) {
        const rideCost =  (0.02 * (distanceTravelled - 400));
        return rideCost;
    }
    else if (2000 <= distanceTravelled < 2500) {
        return 25;
    }
}