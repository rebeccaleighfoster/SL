function shoppingList(){
  let crossOut = ('.shopping-item-toggle');
  let deleteButton = ('.shopping-item-delete');
  let itemName = ('.shopping-item');
  let shoppingList = ('.shopping-list');

$('ul').on('click', deleteButton, function(event){
      $(this).parents('li').remove();
    });
  
 $('ul').on('click', crossOut, function(event){
      $(this).closest('li').find(itemName).toggleClass("shopping-item__checked");
    });
  
$('#js-shopping-list-form').submit(function(event){
  event.preventDefault();
  let newItem = $("#shopping-list-entry").val();
    $("ul").append(
       '<li><span class="shopping-item">' + newItem + '</span>' + '<div class="shopping-item-controls">' + '<button class="shopping-item-toggle"><span class="button-label">check</span></button>&nbsp;'+ '<button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>'
    )
  })
}

$(shoppingList);

  