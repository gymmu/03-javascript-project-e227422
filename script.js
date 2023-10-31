export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

if(currentElement === 'e') {
  result.push("")
}else if ( currentElement === 'E') {
    result.push("") 
  
}else {
  result.push(currentElement)
}
}

  return result.join("")
}



export function aufgabe02(args) {
  const input = args
  const result = []

for (let i = 0; i < input.length; i++) {
const currentElement = input[i]
//Die Buchstaben werden der Reihen nach überprüft.
const capitalizedElement = currentElement.toUpperCase()

result.push(capitalizedElement)
//die Ergebnisse werden zusammengefügt.
}
//Das Ergebniss wird zurückgegeben.
return result.join("")
}


export function aufgabe03(args) {
  const input = args
  const result = []
let count = 0
//prüft ob ein e enhalten ist.

for (let i = 0; i < input.length; i++) {
const currentElement = input[i]


if ( currentElement===`e`)
count = count + 1 

if(currentElement===`E`)
count = count + 1 


}
return count
}


export function aufgabe04(args) {}



export function aufgabe05(args) {
  const input = args
  const result = []
let capitalLetters = 0
//setzt den counter auf 0.

for (let i = 0; i < input.length; i++) {
const currentElement = input[i]
//prüft ob ein Grossbuchstabe enhalten ist.
if (currentElement=== ".") {}
else if (currentElement===" "){}

else if (currentElement === currentElement.toUpperCase()) {
  capitalLetters++
}



}

if (capitalLetters > 0) {
  return true
} else { return false}
 
}




