$('input[type="submit"]').click( function() {
    var words = $('#name').val().split(' ');
    alert(words.length);
});