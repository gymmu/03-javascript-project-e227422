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


export function aufgabe04 (args) {
  const input = args
  const result = []
  //den counter auf 0 setzen.
  let count = 0
  

for (let i = 0; i < input.length; i++) 
 { const currentElement = input[i]
}

 //es werden die leerschläge gezählt
 if (currentElement === ` `) {
  count = count + 1 
}

return count
}



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
//falls das Element gleich ist, wie das grossgeschriebene Element, rechnet es plus 1.
else if (currentElement === currentElement.toUpperCase()) {
  capitalLetters++
}

}

if (capitalLetters > 0) {
  return true
} else { return false}
 
}





export function aufgabe06(args) {
  const input = args
  const result = []
  const specialCharacters = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }
// alle Zeichen werden grossgeschrieben.
  const capitalizedElement = currentElement.toUpperCase()

result.push(capitalizedElement)

if ( currentElement === capitalizedElement) { specialCharacters++}

 

else { return false}
  }

