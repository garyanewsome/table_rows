$( document ).ready(function() {
  $( "#clicker" ).click(function() {
    $( "#thisRow" ).toggle()
    event.preventDefault()
  })
})
