const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
const allUniqueChars = [...`~!@#$%^&*()_+-=[]\{}|;:'",./<>?`];
const allNumbers = [..."0123456789"];

const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha];
function RandomString(len) {


    return [...Array(len)]
        .map(i => base[Math.random() * base.length | 0])
        .join('');

}

console.log(RandomString(34));
export default RandomString
