$(document).ready(function() {
    $("#myForm").submit(function(event) {
      event.preventDefault();

      let productName = $("#productName").val();
      
      let productPrice = $("#productPrice").val();
      let productDescription = $("#productDescription").val();
      let isChecked = $("#exampleCheck1").is(":checked");
  
      
      var newProduct = {
        "name": productName,
        "price": productPrice,
        "description": productDescription,
        "checked": isChecked
      };
  
      
      $.ajax({
        type: "POST",
        url: "productos.json",
        data: JSON.stringify(newProduct),
        contentType: "application/json",
        success: function(data) {
          alert("El producto se ha agregado exitosamente.");


          
        },
        error: function() {
          alert("Ha ocurrido un error al agregar el producto.");
        }

    });
    });
  });
  