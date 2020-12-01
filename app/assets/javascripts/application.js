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

// 1
$("#apprentice-details").on("click", function (e) {
     if ($('input[name=apprentice-confirm]').is(':checked')) {
          $('form.apprentice-details').attr('action','../landing-page/index');
     } else {
          e.preventDefault();
          $('.apprentice-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// 2
$("#employer-details").on("click", function (e) {
     if ($('input[name=employer-confirm]').is(':checked')) {
          $('form.employer-details').attr('action','../landing-page/index');
     } else {
          e.preventDefault();
          $('.employer-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// 3
$("#apprentice-role").on("click", function (e) {
     if ($('input[name=apprentice-role-confirm]').is(':checked')) {
          $('form.apprentice-role').attr('action','2-employer-role');
     } else {
          e.preventDefault();
          $('.apprentice-role-error-panel').addClass('govuk-form-group--error');
          $('.govuk-error-summary, .govuk-error-message').show();
     }
});

// $("#employer-role").on("click", function (e) {
//      if ($('input[name=employer-role-confirm]').is(':checked')) {
//           $('form.employer-role').attr('action','3-provider-role');
//      } else {
//           e.preventDefault();
//           $('.employer-role-error-panel').addClass('govuk-form-group--error');
//           $('.govuk-error-summary, .govuk-error-message').show();
//      }
// });

// $("#provider-role").on("click", function (e) {
//      if ($('input[name=provider-role-confirm]').is(':checked')) {
//           $('form.provider-role').attr('action','../landing-page/index');
//      } else {
//           e.preventDefault();
//           $('.provider-role-error-panel').addClass('govuk-form-group--error');
//           $('.govuk-error-summary, .govuk-error-message').show();
//      }
// });

// 5
