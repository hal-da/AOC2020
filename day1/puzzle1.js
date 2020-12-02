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

const getSortet = ()=>{
    console.log('sorted')
    const arr2 = input.split('\n').sort()
    const arrLength = arr2.length
    for (j = arrLength-1;j >= 0; j-- ){
        for(let i = 0;i<arrLength; i++) {
            if(arr2[i]*1+arr2[j]*1===2020){
                console.log(arr2[i])
                console.log(arr2[j])
                return
                }
            }
        }
    }

getSortet()
