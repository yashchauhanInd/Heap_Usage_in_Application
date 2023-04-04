const arr=[10,20,30,40,50,60,0,7,8,9,10]
arr.reverse()

const used=process.memoryUsage().heapUsed / 1024 / 1024
console.log('the script uses approximately ${Math.round(used*100)/100} MB')
