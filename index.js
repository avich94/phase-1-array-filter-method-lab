function findMatching(drivers, target) {
    return drivers.filter(driver => driver.toLowerCase() === target.toLowerCase());
  }

function fuzzyMatch(drivers, target) {
    const filteredDrivers = drivers.filter(driver => driver.startsWith(target));
    return filteredDrivers;
};

function matchName(drivers, target) {
   return drivers.filter(driver => driver.name === target);
};