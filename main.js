$('#mode').change(function() {

  if ($(this).prop('checked')) {
    $('body').addClass('dark-mode');
  } else {
    $('body').removeClass('dark-mode');
  }

});
