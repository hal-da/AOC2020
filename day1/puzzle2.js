const input = 
`1772
1065
1827
1671
1181
1915
//..
// full list at https://adventofcode.com/2020/day/1/input
//...
1540
1841
1977
1769
1691
1821
`

const getSumOfThree = ()=> {
    let found = false
    const arr = input.split('\n')
    arr.forEach( firstNum => {
        if(found)return
        arr.forEach( secondNum => {
            if(found)return
            arr.forEach(thirdNum=>{
                if(found)return
                if((firstNum*1) + (secondNum*1) + (thirdNum*1) === 2020){
                console.log(firstNum)
                console.log(secondNum)
                console.log(thirdNum)
                found = true
                }
            })
        })
    })
}
getSumOfThree()
