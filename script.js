
$(function(){
    $('button').click(function(){
        var $value = ($(this).attr("value"));
        console.log($value);
        $('screen').append($value);
    });
});

// $(function(){
//     var screen = $('div.screen');
//     $(screen).data(value);
//     })
