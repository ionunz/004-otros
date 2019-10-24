$('button').on('click', function(){
    $('p').hide();
    $(this).siblings('p').show();
})

const fechaLanzamiento = new Date('10/22/19 18:55');
let fechaActual = new Date();

if(fechaActual > fechaLanzamiento){
    $('.video').removeClass('hidden');
    $('.comingsoon').addClass('hidden');
}

let Alf = true;

$('.toggle button').on('click', function(){
    if(Alf === true){
        $('.toggle img').removeClass('hidden');
        Alf = false;
    }
    else{
        $('.toggle img').addClass('hidden');
        Alf = true;
    }
})
