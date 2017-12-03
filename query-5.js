//map 
function(doc) {
  doc.doc.data.forEach(function(element){
        if(element.latitude > 80){
    		emit(element.id, [element.latitude, element.longitude, element.address]);
        }
  });
}
