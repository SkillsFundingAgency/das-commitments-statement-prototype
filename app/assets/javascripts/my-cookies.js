// =================================== MY COOKIES =================================== //

// Personal details - Correct
$("#apprentice-details").on("click", function (e) {
     $.cookie("apprentice-details", true, {path:'/'});
     $.cookie("apprentice-details-wrong", false, {path:'/'});
});

if ($.cookie("apprentice-details") == 'true') {
     $('a.section-one').addClass('complete');
     $('a.section-one strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
}

// Personal details - Incorrect
$("#apprentice-details-wrong").on("click", function (e) {
     $.cookie("apprentice-details", false, {path:'/'});
     $.cookie("apprentice-details-wrong", true, {path:'/'});
});

if ($.cookie("apprentice-details-wrong") == 'true') {
     $('a.section-one').addClass('wrong');
     $('a.section-one strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
}

// Employer details - Correct
$("#employer-details").on("click", function (e) {
     $.cookie("employer-details", true, {path:'/'});
     $.cookie("employer-details-wrong", false, {path:'/'});
});

if ($.cookie("employer-details") == 'true') {
     $('a.section-two').addClass('complete');
     $('a.section-two strong').addClass('govuk-tag--green').removeClass('govuk-tag--yellow').text('complete');
}

// Employer details - Incorrect
$("#employer-details-wrong").on("click", function (e) {
     $.cookie("employer-details", false, {path:'/'});
     $.cookie("employer-details-wrong", true, {path:'/'});
});

if ($.cookie("employer-details-wrong") == 'true') {
     $('a.section-two').addClass('wrong');
     $('a.section-two strong').addClass('govuk-tag--red').removeClass('govuk-tag--yellow').text('Waiting for correction');
}
