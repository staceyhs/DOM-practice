$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow</li>");
    $("ul#webpage").prepend("<li>Woof</li>");
  });

  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Woof</li>");
    $("ul#webpage").prepend("<li>Meow</li>");
  });
});