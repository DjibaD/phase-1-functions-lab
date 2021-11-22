function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}   

function distanceFromHqInFeet(feet) {
    return Math.abs(feet - 42) * 264; 
}

function  distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice (start, end) {
    if (distanceTravelledInFeet(start, end) >= 400 && distanceTravelledInFeet(start, end) <= 2000) {
        return Math.abs(distanceTravelledInFeet(start, end) * 0.02 - 8);
    } else if (distanceTravelledInFeet(start, end) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, end) >= 2000 && distanceTravelledInFeet(start, end) < 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}



