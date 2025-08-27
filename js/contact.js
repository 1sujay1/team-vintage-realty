/*

Script  : Contact Form
Version : 1.0
Author  : Surjith S M
URI     : http://themeforest.net/user/surjithctly

Copyright © All rights Reserved
Surjith S M / @surjithctly

*/

$(function () {
  "use strict";

  /* ================================================
   jQuery Validate - Reset Defaults
   ================================================ */

  // $.validator.setDefaults({
  //     ignore: [],
  //     highlight: function(element) {
  //         $(element).closest('.form-group').addClass('has-error');
  //     },
  //     unhighlight: function(element) {
  //         $(element).closest('.form-group').removeClass('has-error');
  //     },
  //     errorElement: 'small',
  //     errorClass: 'help-block',
  //     errorPlacement: function(error, element) {
  //         if (element.parent('.input-group').length || element.parent('label').length) {
  //             error.insertAfter(element.parent());
  //         } else {
  //             error.insertAfter(element);
  //         }
  //     }
  // });

  /* 
    VALIDATE
    -------- */

  // $("#contact_form").submit(function(e) {
  //     e.preventDefault();
  // }).validate({
  //     rules: {
  //         name: "required",
  //         email: {
  //             required: true,
  //             email: true
  //         }
  //     },
  //     submitHandler: function(form) {

  //         $("#js-contact-btn").attr("disabled", true);

  //         /*
  //         CHECK PAGE FOR REDIRECT (Thank you page)
  //         ---------------------------------------- */

  //         var redirect = $('#contact_form').data('redirect');
  //         var phpurl   = $('#contact_form').attr('action');

  //         var noredirect = false;
  //         if (redirect == 'none' || redirect == "" || redirect == null) {
  //             noredirect = true;
  //         }

  //           $("#js-contact-btn").attr("disabled", true);
  //          $('#js-contact-result').fadeIn('slow').html('<div class="error-msg">Please wait</div>');

  //         /*
  //         FETCH SUCCESS / ERROR MSG FROM HTML DATA-ATTR
  //         --------------------------------------------- */

  //         var success_msg = $('#js-contact-result').data('success-msg');
  //         var error_msg = $('#js-contact-result').data('error-msg');

  //         var dataString = $(form).serialize();

  //         /*
  //          AJAX POST
  //          --------- */

  //         $.ajax({
  //             type: "POST",
  //             data: dataString,
  //             url: phpurl,
  //             cache: false,
  //             success: function(d) {
  //                 $(".form-group").removeClass("has-success");
  //                 if (d == 'success') {
  //                     if (noredirect) {
  //                         $('#js-contact-result').fadeIn('slow').html('<div class="alert alert-success error-msg">' + success_msg + '</div>').delay(3000).fadeOut('slow');
  //                         $('#contact_form')[0].reset();
  //                     } else {
  //                         window.location.href = redirect;
  //                     }
  //                 } else {
  //                    $('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg">' + error_msg + '</div>').delay(3000).fadeOut('slow');

  //                 }
  //                setTimeout(function(){
  //                 $("#js-contact-btn").attr("disabled", false);
  //             }, 1000);
  //             },
  //             error: function(d) {
  //                 $('#js-contact-result').fadeIn('slow').html('<div class="alert alert-danger error-msg"> Cannot access Server </div>').delay(3000).fadeOut('slow');
  //                 setTimeout(function(){
  //                 $("#js-contact-btn").attr("disabled", false);
  //             }, 1000);

  //             }
  //         });
  //         return false;

  //     }
  // });
});

//  document.getElementById("contact_form").addEventListener("submit", function(e) {

//         e.preventDefault(); // prevent page reload
//          const submitBtn = document.getElementById('contact_form_btn');
//       const statusMessage = document.getElementById('statusMessage');
//         const form = e.target;
//         const data = new FormData(form);
//     // Show loading text
//     submitBtn.disabled = true;
//     submitBtn.textContent = 'Loading...';
//         fetch("https://formsubmit.co/sujaymaster111@gmail.com", {
//           method: "POST",
//           body: data
//         })
//         .then(response => {
//               // Reset button text
//       submitBtn.disabled = false;
//       submitBtn.textContent = 'Submit';
//           statusMessage.innerText = "Thank you! Your message has been sent.";
//           statusMessage.className = "success";
//           form.reset();
//         })
//         .catch(error => {
//               // Reset button text
//       submitBtn.disabled = false;
//       submitBtn.textContent = 'SEND MESSAGE';
//           statusMessage.innerText = "Oops! Something went wrong.";
//           statusMessage.className = "error";
//         });

//       })

document.addEventListener("DOMContentLoaded", function () {
  var bookingForm = document.getElementById("contact-form");
  if (!bookingForm) return;
  var successMsg = document.getElementById("success_message_col1");
  var errorMsg = document.getElementById("error_message1");
  var submitBtn = document.getElementById("contact_form_btn1");
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (successMsg) {
      successMsg.textContent = "";
      successMsg.style.display = "none";
    }
    if (errorMsg) {
      errorMsg.textContent = "";
      errorMsg.style.display = "none";
    }
    console.log("Form data:", bookingForm);
    var name = bookingForm.name.value.trim();
    var email = bookingForm?.email?.value?.trim() || "";
    var mobile = bookingForm.querySelector("[name=mobile]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    var secondaryPhone =
      bookingForm.querySelector("[name=secondaryNumber]")?.value.trim() || "";
    console.log("Mobile:", mobile);
    var message = bookingForm.message?.value?.trim() || "";
    console.log({ name, email, mobile, message });
    console.log("Submitting form...");
    console.log("Using BaseURL:", BaseURL);
    console.log(submitBtn);
    if (!name || !mobile) {
      if (errorMsg) {
        errorMsg.style.display = "block";
        errorMsg.style.color = "#d32f2f";
        errorMsg.textContent = "Please fill all required fields.";
      }
      return;
    }
    submitBtn.disabled = true;
    var originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Submitting...";
    fetch(`${BaseURL}/api/v1/client/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "TEAM_VINTAGE_REALTY",
        name,
        email,
        phone: mobile,
        message,
        secondaryPhone,
      }),
    })
      .then(function (res) {
        if (res.status !== 200) {
          throw new Error("Failed to submit. Please try again.");
        }
        return res.json();
      })
      .then(function (data) {
        if (successMsg) {
          successMsg.style.display = "block";
          successMsg.style.color = "#388e3c";
          successMsg.textContent = "Thank you! Your request has been sent.";
          successMsg.style.marginTop = "1rem";
          successMsg.style.fontWeight = "bold";
        }
        bookingForm.reset();
      })
      .catch(function (err) {
        if (errorMsg) {
          errorMsg.style.display = "block";
          errorMsg.style.color = "#d32f2f";
          errorMsg.style.marginTop = "1rem";
          errorMsg.style.fontWeight = "bold";
          errorMsg.textContent =
            err.message || "Submission failed. Please try again.";
        }
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
  });
});
