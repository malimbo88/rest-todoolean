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

  //ajax
  $.ajax(
    {
      url: baseUrl,
      method: "GET",
      success: function (dataSuccess) {
        todosPrint (dataSuccess)

        //Click Event
        $(document).on("click", "#btn_create", function() {
          var inputText = $("#input_text").val()
          todosWrite (baseUrl, inputText, dataSuccess)
        });
        //end Click Event

      },
      error: function () {
        alert("Error")
      }
    }
  );
  //end ajax

  //Function todosPrint
  //Argomento: - array che viene fornito in risposta a chiamata Api todos
  //Stampa con Handlebars il valore della chiave text di ogni oggetto contenuto in array
  //Stampa con Handlebars il numero di ogni oggetto stampato in una lista che corrisponde all'indice array +1
  function todosPrint (dataArray) {
    var source = $("#todos-template").html();
    var template = Handlebars.compile(source);

    for (var count = 0; count < dataArray.length; count++) {
      var listOrderNumber = count + 1;
      var textString = dataArray[count].text
      var context = { text: textString, number: listOrderNumber };
      var html = template(context);
      $(".todos_list").append(html)
    }
  }
  //end Function todosPrint

  //Function todosWrite
  function todosWrite (apiUrl, inputVal, dataArray) {
    //ajax
    $.ajax(
      {
        url: apiUrl,
        method: "POST",
        data: { text: inputVal },
        success: function() {
          resetHtml ($(".todos_list"))
          todosPrint (dataArray)
        },
        error: function() {
          alert("error");
        }
      }
    );
    //end ajax
  }
  //end Function todosWrite

  //Function ResetHtml
  function resetHtml (htmlElement) {
    htmlElement.html("")
  }
  //end Function ResetHtml

});
//end jquery
