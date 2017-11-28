
// map
function(doc) {
  doc.data.forEach(function(element){
    emit(element.company, element.age);
  });
}

// group level 1

// reduce
function(key, value){
  avg = 0;
  value.forEach(function(element){
    avg += element;
  });
  result = avg/value.length
  return result.toFixed(1);
}