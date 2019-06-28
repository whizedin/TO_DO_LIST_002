function render($display) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8082/todo',
        success: function(display_element) {
            console.log(display_element)
            $display.empty()
            
            $.each(display_element, function(i, display_element) {
                $display.append('<li class="display_data" list-id=' + display_element._id + '><h4>' + display_element.task + '</h4>' + '<h6>' + display_element.description + '</h6>' + '<button id="dis_button"  value=' + display_element._id + '><i class="fa fa-close">Delete<i></button>' + '</li>')
            });
        }
    });
};


$(function () {
    var $display = $('#display');
    var $display1 = $('#display1');
    var $tak = $('#input_task');
    var $desc = $('#input_description');
    render($display);


    $display.delegate('.display_data','click', function (){
        
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8082/todo/' + $(this).attr('list-id'),
            success:function(dis_data){
                $display1.empty()
                $display1.append('<div class="task"><p> '+dis_data.task+'</p></div>' +'<div class="dis"><p>'+ dis_data.description+ '</p></div>');
            }
        });
    });
    

    $('#Addbtn').on('click', function () {
        var ToDo = {
            task: $tak.val(),
            description: $desc.val(),
        };
        
        if (!$tak.val() || !$desc.val()) {
    
            alert("Fill all the mandatory fields");
            return false;
            
        }

        $.ajax({
            url: 'http://localhost:8082/todo',

            method: 'POST',
            dataType: 'json',
            contentType: "application/json",
            data: TODO = JSON.stringify(ToDo),
            error: function () {
                alert("Error")
            }
        });
        render($display)
        $tak.empty();
        $desc.empty();
    });

    $display.delegate('#dis_button', 'click', function (event) {
        event.stopPropagation();
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8082/todo/' + $(this).attr('value'),
        })
        $display1.empty();
        render($display)
    });





    // function Show(data){
    //     $display1.append('<div class="task"><p> Task:'+data.task+'</p></div>' +'<div class="dis"><p> Description:'+ data.description+ '</p></div>')
    // }

});
