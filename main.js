$(document).ready(function(){
    var source   = $("#template").html();
    var template = Handlebars.compile(source);

    var context = {
        'classe': "box"
    };

    var html = template(context);
    for (var i = 0; i < 36; i++) {
        $('#griglia').append(html);
    }

    $('.box').one('click',function(){
        $.ajax({
            'url':'https://flynn.boolean.careers/exercises/api/random/int',
            'context':this,
            'method':'GET',
            'success': function(data) {
                console.log(data);
                $(this).find('.centered').append(data.response)
                if (data.response <= 5) {
                    $(this).addClass('yellow')
                } else {
                    $(this).addClass('green')
                }
            },
            'error': function() {
                alert('errore risontrato!')
            }
        })
    })
})
