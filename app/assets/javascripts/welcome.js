$(document).ready( function() {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    method: 'GET',
    dataType: 'JSON',
    // data: data
  }).done( function(products) {
    var list = $('#product-list')
    products.forEach(function(product) {
      var li = '<li data-product-id="' + product.id + '">' + '<br>' + product.name + '<br>' + '$' + product.base_price + '<br>' + product.description + '<br>' + product.quantity_on_hand + '<br>' + product.color + '<br>' + product.weight + '<br>' + '<button class="edit" class="waves-effect waves-light btn-small">' + 'Edit' + '</button>' + '    ' + '<button class="delete" class="waves-effect waves-light btn-small">' + 'Delete' + '</button>' + '</li>'
      list.append(li)
    })
    // }).fail( function(err) {
      //   alert(err.responseJSON.errors)
    })
    $('#submit_button').on('click', function() {
      var name = $('#name').val()
      var base_price = $('#price').val()
      var description = $('#desc').val()
      var prod = { product: {name: name, base_price: base_price, description: description } }
      // AJAX REQUEST POSTING TO SERVER 
      $.ajax({
        url: 'http://json-server.devpointlabs.com/api/v1/products',
        type: 'POST',
        datatype: 'JSON',
        data: prod 
      })
      
      .done( function(prod) {
        var li = '<li data-prod-id="'+ prod.id +'" class="collection-item">' + prod.name +  '<br>' + '$' + prod.base_price + '<br>'  + prod.description + '<br>' + 'Quantity: ' + prod.quantity_on_hand + '<br>' + prod.color + '<br>' + prod.weight + '</li>'
        $('#product-list').append(li)
        
        // CLEARING INPUT VALUES 
        $('#name').val('')
        $('#base_price').val('')
        $('#description').val('')  
      })
    })
    $(document).on('click', '.delete', function() {
      delId = this.parentElement.dataset.productId
      $.ajax({
        url: 'http://json-server.devpointlabs.com/api/v1/products/' + delId,
        method: 'DELETE'
      }).done( function(msg) {
        var row = $("[data-prod-id='" + delId + "'")
        // debugger
        row.remove('li');
        alert(msg.message)
      })
    })
  })
