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

console.log(distanceFromHqInBlocks(43)); 
console.log(distanceFromHqInBlocks(50)); 
console.log(distanceFromHqInBlocks(34)); 

console.log(distanceFromHqInFeet(43)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceFromHqInFeet(34)); 