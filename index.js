var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var placeInLine = katzDeliLine.length;
   return `Welcome, ${name}. You are number ${placeInLine} in line.`;
}

function takeANumber(katzDeliLine) {
  x = katzDeliLine.length + 1;
  katzDeliLine.push(x);
  return katzDeliLine.length;
}


const deliLine = ["Steven", "Blake", "Avi"];

function nowServing(deliLine) {
    if (deliLine.length === 0) {
  return "There is nobody waiting to be served!";
}
else {
  var firstInLine = deliLine[0];
  deliLine.shift();
  return `Currently serving ${firstInLine}.`;
  } 
}

function currentLine(deliLine) {
  if (deliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    var one = deliLine[0];
    var two = deliLine[1];
    var three = deliLine[2];
    return `The line is currently: 1. ${one}, 2. ${two}, 3. ${three}`;
  }
}
