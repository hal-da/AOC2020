/**
*puzzle zwei
*/

const input = `2-6 w: wkwwwfwwpvw
14-15 v: hvhvlhvvvwxvdvscdpvg
2-3 b: bkkb
//...
//... full input list on https://adventofcode.com/2020/day/2/input
//...
2-7 g: fmggdgggx
11-14 z: zzzzzzvzzxbzzh
7-8 p: ppppppdx`

let sum = 0, low = 0, high = 0, letterInWord = 0, wordcount = [], word = ''

inpArr.forEach(inp => {
    let inpSplit = inp.split(' ');
    low = inpSplit[0].split('-')[0]-1
    high = inpSplit[0].split('-')[1]-1
    word = inpSplit[1][0]
    wordcount = inpSplit[2].split('')
    letterInWord = 0
    
    if(wordcount[low]===word ^ wordcount[high]===word){
        sum++
    }
})
console.log('second puzzle: ', sum)
