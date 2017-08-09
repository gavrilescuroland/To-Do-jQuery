//done
$('ul').on('click', 'li', function() { $(this).toggleClass('done') })

//delete
$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(350, function() { $(this).remove() } )
    e.stopPropagation() //stop event bubbling
})

//add new task
$("input[type='text']").keypress(function(e) {
	if (e.keyCode === 13) {
		$('ul').append('<li>' + $(this).val() + '<span><i class="fa fa-trash"></i></span></li>')
		$(this).val("")
	}
})

//toggle input field
$('.fa-plus').click(function() { $("input[type='text']").slideToggle(400) })
