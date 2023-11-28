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

export function aufgabe08 (args) {
  const input = args
  const result = []


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  
  if (currentElement==="e") { 
    result.push("3")
  }else {
    result.push(currentElement) 
  }
}
return result.join("")
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

export function aufgabe10 (args) {
  const input = args
  //im Hexcode dürfen nicht mehr als 7 zeichen vorkommen und das erste Element muss ein # sein.
  if(input.length !== 7) return false
  if(input[0] !== "#") return false
  
  //es dürfen nur zahlen und A-F vorkommen
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if(48 <= ascii && ascii <= 57){
      //macht nichts
    } else if (65 <=ascii && ascii <= 70){
      //machts nichts
    }else {
      return false
    }
    
  }
return true
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

  
//falls es ein Leerzeichen findet, bricht es ab und gibt das Resultat zurück.
  if (currentElement === " ") {
    return result.join("")
  }
  result.push(currentElement)
}//falls das "if" nicht eintritt, wird das Resultat zurückgegeben.
return result.join("")
}

export function aufgabe16 (args) {
  const input = args
  const result = []
  
  
  return result.join("")

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
result.push 

}



export function aufgabe18 (args) {
  const input = args
  const result = []
  
  return result.join("")



  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
  }
}
export function aufgabe19 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //es fügt zu jedem Element noch ein gleiches hinzu.
   result.push ( currentElement+currentElement)
  }

 
  
  return result.join("")
}

export function aufgabe20 (args) {
  const input = args
  const result = []
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
  if (currentElement === '.' )  
  if (input [i+1] === ' ') {
    return true
  }
   
  }
 
return false
 
 
}





export function aufgabe21 (args) {
  const input = args
  const result = []
  
  return result.join("")
//Das Element wird von umgekehrt durchgelaufen.
  for (let i = input.lenght-1; i>=0 ; i--) {
    const currentElement = input[i]
  }
  return result.join("")
}


export function aufgabe26 (args) {
   
  const list = args.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]
    const nextElement = list[i+1]
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i+1]
      list[i+1] = list[i]
      list[i] = tmp
      i = 0 // starte von vorne wenn etwas vertauscht wurde.
    }
  }
  const result = list.join("")
  return (result)
 
}


export function aufgabe27 (args) {
  const input = args
  const result = []
  //falls es keine Eingabe hat, wird es direkt zurückgegeben.
  if (input.length===0){return false}
  for (let i = 0; i < input.length; i++) {
   
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if (48 <= ascii && ascii <= 57){
 
  }
else  return false
}
return true
}
