$(document).ready(function(){
    var source   = $("#template").html();
    var template = Handlebars.compile(source);

    var context = {
        'classe': "box",
        'classe_p':'centered'
    };

    var html = template(context);
    for (var i = 0; i < 36; i++) {
        $('#griglia').append(html);
    }

    $('.box').one('click',function(){
        //commentato abbiamo il metodo alternativo
        // var that = this;
        $.ajax({
            'url':'https://flynn.boolean.careers/exercises/api/random/int',
            'context':this,
            'method':'GET',
            'success': function(data) {
                console.log(data);
                $(this).find('.centered').append(data.response)
                if (data.response <= 5) {
                    // $(that).addClass('yellow')
                    // $(that).find('.centered').addClass('yellow');
                    $(this).addClass('yellow');
                    $(this).find('.centered').addClass('yellow');
                } else {
                    // $(that).addClass('green')
                    // $(that).find('.centered').addClass('green');
                    $(this).addClass('green');
                    $(this).find('.centered').addClass('green');
                }
            },
            'error': function() {
                alert('errore risontrato!');
            }
        })
    })
})
