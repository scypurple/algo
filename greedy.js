// 贪心 覆盖广播站问题
// 覆盖的州
let statesNeeded = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);
// 广播台清单
let stations = new Map([
    ['kone', ['id', 'nv', 'ut']],
    ['ktwo', ['wa', 'id', 'mt']],
    ['kthree', ['or', 'nv', 'ca']],
    ['kfour', ['nv', 'ut']],
    ['kfive', ['ca', 'az']],
]);

// 求交集
const intersect = (a ,b) => a.filter(ea => b.filter(eb => ea === eb).length);
// 求差集
const uncovered = (a, b) => b.filter(eb => a.filter(ea => ea !== eb).length === a.length);

// 存储最终选择的广播台
let finalStation = [];
// 存储选择覆盖了最多未覆盖州的广播台
while(statesNeeded.size) {
let bestStation = null;
let stateCovered = new Set();
for (let [station, stationList] of stations) {
   // console.log('key:',key,'value:',value);
    let covered = intersect(stationList, [...statesNeeded]);
    if (covered.length > stateCovered.size) {
        bestStation = station;
        stateCovered = covered;
    }
}
finalStation.push(bestStation);
statesNeeded = new Set(uncovered(stateCovered, [...statesNeeded]));
console.log(statesNeeded.size);
}
console.log(finalStation);