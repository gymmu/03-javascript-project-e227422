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

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  }

if ( currentElement.charCodeAt === 33 > 64 ) {return true}
 

return false
  }



export function aufgabe09(args) {
  const input = args
  let len = 0
  for (let i = 0; i < input.length; i++) {
  len++
  }

 if (len === 6) {
  return true
 } else {
  return false
 }
}

export function aufgabe11 (args) {
  const input = args
  let ascii = null
if (input.length > 1){ return null} //funtktionswächter

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  ascii = currentElement.charCodeAt(0)
  return ascii
}
return null
}

export function aufgabe12 (args) {
  const input = args  

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]


    if (currentElement === "e") { 
      return i
  }
}

return -1
}
export function aufgabe13 (args) {
  const input = args
  let pos = -1
 
  for (let i = 0; i <  input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement=== "e"){
       pos=i}

  }
  
  return pos
}

export function aufgabe14 (args) {
  const input = args
  const result = []


for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

if (currentElement!== "e") {return -1}
else if (currentElement==="E") {return -1}
}
return 2 
}

export function aufgabe15 (args) {
  const input = args
  const result = []
  

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

  result.push("")
  
  if (currentElement === " ") {
    return result.join("")
  }
  
}
return result.join("")
}
