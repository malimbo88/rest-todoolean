//myJavaScript
// Utilizzo le API Todos
// Creo un’interfaccia in cui posso leggere, creare e rimuovere elementi
// Endpoints:
// Read: http://157.230.17.132:{porta}/todos/ Method:GET
// Create: http://157.230.17.132:{porta}/todos/ Method: POST
// Che si aspetta il testo da salvare (nome proprietà ‘text’)
// Delete: http://157.230.17.132:{porta}/todos/{id} Method: DELETE
// Dove id è l’id della risorsa da eliminare

//jquery
$(document).ready(function() {
  var myPort = 3033
  var baseUrl = " http://157.230.17.132:" + myPort + "/todos/"

});
//end jquery
