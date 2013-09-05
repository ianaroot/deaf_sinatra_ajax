$(document).ready(function() {
  
$('form').on('submit',function(e) {
  e.preventDefault();
  $.ajax({
    type: this.method,              
    url: this.action,
    data:$(this).serialize()              
  }).done(function(server_data) {
    console.log("SUCCESS -- server returned: " + server_data);
    $(".grandma").html(server_data);  // use the jQuuery .html() method to add the partial
  }).fail(function(){
    console.log('fail');
  });
});
  
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});
