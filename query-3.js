//map
function(doc) {
  doc.doc.data.forEach(function(element){
  	if(element.tags.length > 0) {
	   element.tags.forEach(function(item){
		emit(item);
	   });       
  	}
  });
}

//grouping exact

//reduce
function(key, value, rereduce) {
  if (rereduce) {
    return sum(value);
  } else {
    return value.length;
  }
}
function(key, value, rereduce) {
  if (rereduce) {
    return sum(value);
  } else {
    return value.length;
  }
}
