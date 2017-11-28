// map
function(doc) {
  doc.data.forEach(function(element){
    element.friends.forEach(function(friend){
     if(friend.name[0].toLowerCase() == "j"){
        emit(element.name, friend.name);
     }
    });

  });
}