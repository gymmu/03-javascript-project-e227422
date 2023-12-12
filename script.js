export function aufgabe01(args) {
  const input = args
  const result = [] // es wurde Result erstellt und es hat bis jetzt keinen Inhalt.

  for (let i = 0; i < input.length; i++) { //es lauft einen Buchstaben nach dem anderen durch.
    const currentElement = input[i] //das currentElement ist nur das ein einzelnes Zeiches des Inputes. i ist der Standort.

if(currentElement === 'e') { //falls das currentElement ein e ist, wird nichts dem result hinzugefügt.
  result.push("")
}else if ( currentElement === 'E') {
    result.push("") //Das gleiche mit dem E.
  
}else {
  result.push(currentElement) // wenn beide Fälle nicht eintreffen, wird dem result einfach das currentElement hinzugefügt.
}
}

  return result.join("") //das result wird zurückgegeben.
}



export function aufgabe02(args) {
  const input = args
  const result = []

for (let i = 0; i < input.length; i++) {
const currentElement = input[i]
//Die Buchstaben werden der Reihe nach überprüft.
const capitalizedElement = currentElement.toUpperCase()
//die Konstante capitalizedElement schreibt das currentElement gross.
result.push(capitalizedElement)
//das result wird zusammengefügt und besteht aus aus dem capitalizedElement.
}
//Das Ergebniss wird zurückgegeben.
return result.join("")
}


export function aufgabe03(args) {
  const input = args
  const result = []
let count = 0
//der Zähler wird auf 0 gestellt.

for (let i = 0; i < input.length; i++) {
const currentElement = input[i]
//die Zeichen werden der Reihe nach durchgelaufen.

if ( currentElement===`e`)
count = count + 1 
// wenn das currentElement ein e ist, wird zum Zähler eins hinzugefügt.
if(currentElement===`E`)
count = count + 1  //das gleiche mit dem dem E.


}
return count // es wird die Zahl des Zählers zurückgegeben.
}


export function aufgabe04 (args) {
  const input = args
  const result = []
  //den counter auf 0 setzen.
  let count = 0
  
//die Zeichen werden eins nach dem anderem überprüft.
for (let i = 0; i < input.length; i++) 
 { const currentElement = input[i]
}


 //es werden die leerschläge gezählt
 if (currentElement === ` `) {
  count = count + 1 
}
//das gezählte wird zurückgegeben.
return count
}



export function aufgabe05(args) {
  const input = args
  const result = []
let capitalLetters = 0
//setzt den counter auf 0.

for (let i = 0; i < input.length; i++) {
const currentElement = input[i]
//wenn das currentElement ein Punkt oder ein Leerschlag ist, passiert nichts.
if (currentElement=== ".") {}
else if (currentElement===" "){}
//falls das Element gleich ist, wie das grossgeschriebene Element, rechnet es plus 1.
else if (currentElement === currentElement.toUpperCase()) {
  capitalLetters++
}

}

if (capitalLetters > 0) {//falls es mehr als 0 Grossbuchstaben hat, wird true zurückgegeben.
  return true  
} else { return false}//sonst false
 
}





export function aufgabe06 (args) {
  const input = args
   
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //der asciicode des currentElement.


if (48 <= ascii && ascii <= 57){}//passiert nichts

else if (65 <= ascii && ascii <= 90) {} //passiert nichts
else if (97 <= ascii && ascii <= 122) {}//passiert nichts
else if (currentElement === " ") {} //passiert nichts
else {return true} //sonst wird richtig zurückgegeben
  }
  return false//gibt false zurück.
  }

export function aufgabe07(args) {
  const input = args
  const result = []
 
  for (let i = 0 ; i < input.length; i++) {
    const currentElement =input[i]
if (currentElement === "u") {//wenn das currentElement ein u ist, wird geprüft, ob das nächste zeichen ein n ist.
  if(input[i+1]=== "n") {
    if(input[i+2]=== "d") {//wenn das übernächste ein d ist, wird true zurückgegeben.
    return true
  }
}
}
  }
  return false//sonst wird false zurückgegeben
}



export function aufgabe08 (args) {
  const input = args
  const result = []


  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
  
  if (currentElement==="e") {  //falls das currentElement ein e ist, wird ein 3 anstelle des e hinzugefügt.
    result.push("3")
  }else {
    result.push(currentElement)  //sonst wird das currentElement hinzugefügt.
  }
}
return result.join("") //wird zurückgegeben
}

export function aufgabe09(args) {
  const input = args
  let len = 0 //Zähler wird auf Null gestellt und len genannt.
  for (let i = 0; i < input.length; i++) {
  len++
  } //es wird immer plus eins gerechnet.

 if (len === 6) {
  return true //wenn die Länge 6 ist, wird true zurückgegeben.
 } else {
  return false//sonst false
 }
}

export function aufgabe10 (args) {
  const input = args
  //im Hexcode dürfen nicht mehr als 7 zeichen vorkommen und das erste Element muss ein # sein.
  if(input.length !== 7) return false
  if(input[0] !== "#") return false
  //wenn diese Fälle eintreffen, wird das Element sofort zurückgegeben.
  
  //es dürfen nur zahlen und A-F vorkommen
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0) //constascii ist der ascii code des currentElement.
    if(48 <= ascii && ascii <= 57){ //wenn der ascii code zwischen 48 und 57 liegt, passiert nichts.
      //macht nichts
    } else if (65 <=ascii && ascii <= 70){
      //macht nichts
    }else {
      return false //es wird false zurückgegeben
    }
    
  }
return true //sonst wird true zurückgegeben.
}


export function aufgabe11 (args) {
  const input = args
  let ascii = null //ascii ist im Moment null.
if (input.length > 1){ return null} //funtktionswächter

for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  ascii = currentElement.charCodeAt(0) //ascii ist der asciicode des currentElement.
  return ascii // es wird der ascii zurückgegeben.
}
return null //sonst wird null zurückgegeben.
}

export function aufgabe12 (args) {
  const input = args  

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]


    if (currentElement === "e") { //wenn das currentElement ein e ist, wird der Standort zurückgegeben.
      return i
  }
}

return -1//sonst -1
}
export function aufgabe13 (args) {
  const input = args
  let pos = -1 //pos startet bei -1
 
  for (let i = 0; i <  input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement=== "e"){ //wenn das currentElement ein e ist, wird die Positions gespeichert.
       pos=i}

  }
  
  return pos //die position wird zurückgegeben.
}

export function aufgabe14 (args) { 
  const input = args
  const result = []


for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

if (currentElement!== "e") {return -1} //wenn das currentElement nicht ein e ist, wird -1 zurückgegeben.
else if (currentElement==="E") {return -1} //wenn es ein grosses E ist, wird auch -1 zurückgegeben.
}
return 2 //sonst wird 2 zurückgegeben.
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


export function aufgabe16(args) {
  const input = args
  const result = []
 
  for (let i= 0; i < input.length; i++) {
    const currentElement = input [i];
    if (currentElement === '$'){  //sobald ein $ kommt, wird die Liste unterbrochen.
      break;
    }
    result.push(currentElement); // das currentElement wird dem result hinzugefügt.
}
return result.join('')//das result wird zurückgegeben.
}

export function aufgabe17(args) {
  const input = args;
  const result = input.split(',') //das result ist der input der mit einem , getrennt ist.
 
 
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
}
 
  return result.join(',') //da result wird zurückgegeben.
}



export function aufgabe18 (args) {
  const input = args
  const phrases = []
  
  let currentPhrase = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
 
 if (currentElement === ' ') {// Der Satz wird als als phrases hinzugefügt.
      phrases.push(currentPhrase.join(""))
      currentPhrase = []  // Es wird alles was man drin hat gelöscht.
    } else {
      // Wenn es keinen '.' gibt, wird es an den Satz angefhängt.
      currentPhrase.push(currentElement)
    }
  }
 
  phrases.push(currentPhrase.join(""))
  return "Sie heissen " + phrases[0] + " und sind " + phrases[1] + " Jahre alt"
 
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
  if (input [i+1] === ' ') { //wenn nach dem Zeichen Punkt ein Leerschlag kommt, wird true zurückgegeben.
    return true
  }
   
  }
 
return false//sonst false
 
 
}





export function aufgabe21 (args) {
  const input = args
  const result = []
  
  return result.join("")
//Das Element wird umgekehrt durchgelaufen.
  for (let i = input.lenght-1; i>=0 ; i--) {
    const currentElement = input[i]
  }
  result.join(currentElement) //dem result wird das currentElement hinzugefügt.
  return result
}


export function aufgabe22 (args) {
 
const input = args
const result = []
let firstPart = true
 
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
 
  if (firstPart === true) {
    result.push("_")
  } else {
    result.push(currentElement)
  }
 
 
  if (currentElement === 'k') {
    firstPart = false
  }
 
}
return result.join("")
}

export function aufgabe24 (args) {
  const input = args
  const result = []

  if (input.length === 1) return input
  const firstElem=input[0] //erstes zeichen
  const lastElem=input[input.length-1]//letztes zeichen

  result.push(lastElem)//zuerst muss man das letzte Zeichen hinzufügen.
  for (let i = 1; i < input.length -1; i++) {//es fängt beim zweiten Zeichen an und hört beim zweitletzten auf.
    const currentElement = input[i]
    result.push(currentElement)//alle andere Zeichen werden hinzugefügt.
  }

result.push(firstElem)//das erste Zeichen wird am Schluss hinzugefügt.
  return result.join("")//das result wird zurückgegeben.
}

export function aufgabe25 (args) {
  const input = args
  const result = []

  if (input.length % 2 === 0){//prüft ob die input.length gerade ist.
 const pos= input.length/2 //um die Hälfte zu erhalten.

 for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

  if (i===pos || i === pos - 1){} //macht nichts, minus eins damit es richtig ist.
  else {
    result.push(currentElement)//fügt das currentElement hinzu
  }
 }
  }
else { //die Zahl ist gerade.
  const pos= Math.floor(input.length / 2)//zahl wird halbiert und abgerundet.

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (i===pos) {}//wenn es die Mitte ist, wird es nicht hinzugefügt.
else {result.push(currentElement)//sonst schon.
  }
  }
}

  return result.join("")
}



export function aufgabe26 (args) {
   
const list = args.split("")  // der Text wird in eine Liste umgewandelt.
  

for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i]//ist das jetzige Zeichen.
    const nextElement = list[i+1] //ist das nächste Zeichen
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
      //wenn der ascii code des vorherigen Element grösser ist als das des folgedem,wird es getauscht.
      const tmp = list[i+1] 
      list[i+1] = list[i] //das folgende Zeichen wird vorverschoben.
      list[i] = tmp
    }
  }
  const result = list.join("") //die Liste wird zusammengestellt.
  return (result)
 
}


export function aufgabe27 (args) {
  const input = args
  const result = []
  //falls es keine Eingabe hat, wird es direkt zurückgegeben.
  if (input.length===0){return false}
  for (let i = 0; i < input.length; i++) {
   const currentElement = input[i]

   const ascii = currentElement.charCodeAt(0)//der ascii ist der asciicode des currentElement.
    if (48 <= ascii && ascii <= 57){ //wenn der asciicode zwischen 48 und 57 liegt, wird true zurückgegeben.
      return true
  }
} return false
}


export function  aufgabe28 (args) {
  const input = args
  const zahlen = input.split(' ')
 
  if (zahlen.length === 2 && !isNaN(zahlen[0]) && !isNaN(zahlen[1])) {
    const zahl1 = parseFloat(zahlen[0]);
    const zahl2 = parseFloat(zahlen[1]);
   
    const summe = zahl1 + zahl2;
    return `${summe}`;
} else {
    return null
}
}
 


export function bubbleSort (args) {

  const list = args.split("")  //Text wird in eine Liste umgewandelt.
  for (let i = 0; i < list.length - 1; i++) {
    const currentElement = list[i] //ist die Stelle in der Liste
    const nextElement = list[i+1] // ist immer das nächste Element
    if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) { // wird nach dem asciicode sortiert.
      // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
      const tmp = list[i+1]
      list[i+1] = list[i] //das Element wird in der Liste eins nach hinten verschoben.
      list[i] = tmp
      i = -1 // starte von vorne wenn etwas vertauscht wurde. Immer minus eins damit es ganz nach vorne kommt.
    }
  }
  const result = list.join("")  // es wird dem Result hinzugefügt
  return (result) //wird zurückgegeben

}
