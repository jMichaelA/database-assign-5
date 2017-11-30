//map 
function(doc) {
  doc.doc.data.forEach(function(element){
    emit(element.randomArrayItem,1);
  });
}

//grouping level 1

//reduce
function(key, value, rereduce) {
  if (rereduce) {
    return sum(value);
  } else {
    return value.length;
  }
}
