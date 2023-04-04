const arr=[1,2,3,4,5,6,7,8,9,10]
arr.reverse()
const used =process.memoryUsage()

for(let key in used){
    console.log('${key} ${Math.round(used[key]/1024 /1024 * 100)/100} MB')
}