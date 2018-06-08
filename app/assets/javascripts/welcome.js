$(document).ready( function() {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/products',
    method: 'GET',
    dataType: 'JSON',
    // data: data
  }).done( function(products) {
    var list = $('#products')
    products.forEach(function(products) {
      debugger
      var li = '<li data-product-id="' + products.id + '">' + '<br>' + products.name + '<br>' + '$' + products.base_price + '<br>' + products.description + '<br>' + products.quantity_on_hand + '<br>' + products.color + '<br>' + products.weight + '</li>'
      list.append(li)
    })
  // }).fail( function(err) {
  //   alert(err.responseJSON.errors)
  })
})