
// map
function(doc) {
  doc.data.forEach(function(element){
    emit([element.gender, element.isActive], [element.age, element.name]);
  });
}

// group level 2

// reduce
function(key, value){
  result = {};
  max = 0;
 
  value.forEach(function(element){
    if(element[0] > max){
      max = element[0];
      result = {
         age:  element[0],
         name: [element[1]]
      };
    }else if(element[0] == max){
      result.name.push(element[1]);
    }
  });
  return result;
}