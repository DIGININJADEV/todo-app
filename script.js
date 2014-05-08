$(document).ready(function(){
	ToDoList = [];
	setupListeners();
});

function setupListeners(){
	$('#new-todo').keypress(function(event) {
  	if ( event.which == 13 ) {
    	event.preventDefault();
			$newTodo = $('#new-todo').val();
			$randID = Math.floor(Math.random() * 36532412) + 1 + '-' + ToDoList.length;
			$newTodoLI = '<li data-id="'+$randID+'" class="123"><div class="view"><input class="toggle" type="checkbox"><label>'+$newTodo+'</label>        <button class="destroy" id="'+ToDoList.length+'"></button></div></li>';
			$('#todo-list').append($newTodoLI);
			$todoObj = {};
			$todoObj.ID = $randID;
			$todoObj.Text = $newTodo;
			$todoObj.Status = '';
			ToDoList.push($todoObj);
			 $('#new-todo').val('');			
			updateToDoCount();
			setupLIEvents();
  	}
	});
	
	$('#toggle-all').click(function(){
		$('#todo-list li').each(function(index){
			$(this).find('input').prop("checked", true);
		});
	});
}

function updateToDoCount(){
$items = ToDoList.length;
$('#todo-count strong').text($items);
}

function setupLIEvents(){
	$('#todo-list li').each(function(index){
		$(this).find('input').click(function(){
			$(this).prop("checked", this.checked);
		});
		$(this).find('button').click(function(){
			$ID = $(this).attr('id');
			ToDoList.splice($ID,1);
			console.log(ToDoList);
			$(this).parent().remove();
			updateToDoCount();
		});
	});
}