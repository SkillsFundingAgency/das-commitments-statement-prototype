/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

function showPassword() {
     var x = document.getElementById("apprentice-password");
     if (x.type === "password") {
          x.type = "text";
     } else {
          x.type = "password";
     }
}

function showConfirm() {
     var x = document.getElementById("apprentice-confirm-password");
     if (x.type === "password") {
          x.type = "text";
     } else {
          x.type = "password";
     }
}

$(document).ready(function () {
     $('.hide-show-password, .hide-show-confirm').on('click',function(e) {
          $(this).toggleClass('hide');
     });
})

$('#service-title-section, #action-title-section').parent().addClass('title-overide');


if ($('#landing-page').length) {
     $('.nav ul li a.link-one').addClass('selected');
}


// Confirm journey
$('.govuk-error-summary, .govuk-error-message').hide();

$("#employer-details").on("click", function (e) {
     if ($('input[name=employer-confirm]').is(':checked')) {
          // alert('working');
          $('form.employer-details').attr('action','../landing-page/index');
          // $('.nav ul li a.link-one').addClass('selected');
     } else {
          e.preventDefault();
          $('.employer-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});
