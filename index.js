const { startTransition } = require("react")

// Code your solution in this file!
// distanceFromHqInBlocks(42 - pickUpStation)
// distanceFromHqInFeet(distanceFromHqInBlocks * 264)
// distanceTravelledInFeet( start, destination)
// calculatesFarePrice( distanceTravelledInFeet * farePrice)

function distanceFromHqInBlocks(pickUpStationBlock) {
  const locationOfHqBlock = 42;
  return Math.abs(locationOfHqBlock - pickUpStationBlock);
}

function distanceFromHqInFeet(pickUpBlock) {
  const distancePerBlockInFeet = 264;
  return distanceFromHqInBlocks(pickUpBlock) * distancePerBlockInFeet;
}

function distanceTravelledInFeet(start, destination) {
  const distancePerBlockInFeet = 264;
  return Math.abs(destination - start) * distancePerBlockInFeet;
}
function calculatesFarePrice(pickUpBlock, destination) {
    const distance = distanceTravelledInFeet(pickUpBlock, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}

console.log(distanceFromHqInBlocks(43)); 
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 

console.log(distanceFromHqInFeet(43)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceFromHqInFeet(34)); 

console.log(distanceTravelledInFeet(43));
console.log(distanceTravelledInFeet(50));
console.log(distanceTravelledInFeet(34));

console.log(calculatesFarePrice(43));
console.log(calculatesFarePrice(50));
console.log(calculatesFarePrice(34));