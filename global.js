let movement = 0;
var cardGroup = [["🦄", "🍧"], ["🌈", "👽"], ["👾", "🎂"]];
// , ["👹", "👺"]

let levelActual = 0;
let level = [
    {
        card: cardGroup[0],
        movementMax: 4
    },
    {
        card: cardGroup[0].concat(cardGroup[1]),
        movementMax: 10
    },
    {
        card: cardGroup[0].concat(cardGroup[1], cardGroup[2]),
        movementMax: 14
    }
];