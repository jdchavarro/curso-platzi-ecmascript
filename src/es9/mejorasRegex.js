const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date ->', year, month, day); // Date -> 2018 04 28