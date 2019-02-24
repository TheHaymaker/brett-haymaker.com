jQuery(document).ready(function() {
  $(".submit-password-button").on("submit", function(e) {
    return false;
  });

  $(".submit-password-button").on("click", function(e) {
    e.preventDefault();

    var password = "_new_england_clam_chowder_";

    var attemptedPassword = $("input#password").val();

    if (attemptedPassword === password) {
      var x = $(".portfolio-example");
      var counter = 0;
      $(".portfolio-example").css("display", "block");
      $(".password-form").css("height", "0px");

      setTimeout(function() {
        $(".password-form").css("display", "none");
        $(x[0]).css({ opacity: "1", "margin-top": "30px" });
      }, 100);
      setTimeout(function() {
        $(x[1]).css({ opacity: "1", "margin-top": "30px" });
      }, 500);
      setTimeout(function() {
        $(x[2]).css({ opacity: "1", "margin-top": "30px" });
      }, 1000);
      setTimeout(function() {
        $(x[3]).css({ opacity: "1", "margin-top": "30px" });
      }, 1400);
      setTimeout(function() {
        $(x[4]).css({ opacity: "1", "margin-top": "30px" });
      }, 1800);
      setTimeout(function() {
        $(x[5]).css({ opacity: "1", "margin-top": "30px" });
      }, 2200);
    } else {
      $(".password-success-message").html(
        "<p>No dice, my friend. If you really want to see my work, send me a note from my contact section for the password.</p>"
      );
      setTimeout(function() {
        $(".password-success-message p").css("opacity", "1");
      }, 200);
      setTimeout(function() {
        $(".password-success-message p").css("opacity", "0");
      }, 8000);
      setTimeout(function() {
        $(".password-success-message").html("");
      }, 9000);
    }
  });

  $(".submit-button").on("submit", function(e) {
    return false;
  });

  $(".submit-button").on("click", function(e) {
    e.preventDefault();
    $(".success-message").html("<p>Working...</p>");
    setTimeout(function() {
      $(".success-message p").css("opacity", "1");
    }, 100);

    var firstname = $("input#firstname").val(),
      lastname = $("input#lastname").val(),
      email = $("input#email").val(),
      reason = $(".contact_reason").val(),
      message = $("textarea#message").val();

    var res = email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g);
    if ((email == "" || res == null) && firstname == "" && lastname == "") {
      $(".success-message").html(
        "<p>please enter your first and last name, as well as a valid email address</p>"
      );
    } else if ((email == "" || res == null) && firstname == "") {
      $(".success-message").html(
        "<p>please enter your first name and a valid email address</p>"
      );
    } else if ((email == "" || res == null) && lastname == "") {
      $(".success-message").html(
        "<p>please enter your last name and a valid email address</p>"
      );
    } else if (firstname == "" && lastname == "") {
      $(".success-message").html(
        "<p>please enter your first and last name</p>"
      );
    } else if (email == "" || res == null) {
      $(".success-message").html("<p>please enter a valid email address</p>");
      return false;
    } else if (firstname == "") {
      $(".success-message").html("<p>please enter your first name</p>");
    } else if (lastname == "") {
      $(".success-message").html("<p>please enter your last name</p>");
    } else {
      // var that_data = {
      //   firstname: firstname,
      //   lastname: lastname,
      //   email: email,
      //   reason: reason,
      //   message: message
      // };

      // var serialized_data = $(that_data).serialize();

      var $form = $("#contact-form");
      $.post($form.attr("action"), $form.serialize()).then(function() {
        //alert("Thank you!");
        $("input#firstname").val("");
        $("input#lastname").val("");
        $("input#email").val("");
        $(".contact_reason").val("");
        $("textarea#message").val("");

        $(".success-message").html("<p>Thanks! I will respond shortly.</p>");
        setTimeout(function() {
          $(".success-message p").css("opacity", "1");
        }, 200);
        setTimeout(function() {
          $(".success-message p").css("opacity", "0");
        }, 8000);
        setTimeout(function() {
          $(".success-message").html("");
        }, 9000);
      });
    }

    //   $.ajax({
    //     type: "POST",
    //     url: $("#contact-form").attr("action"),
    //     data: serialized_data,
    //     success: function(data) {
    //       $("input#firstname").val("");
    //       $("input#lastname").val("");
    //       $("input#email").val("");
    //       $(".contact_reason").val("");
    //       $("textarea#message").val("");

    //       $(".success-message").html("<p>Thanks! I will respond shortly.</p>");
    //       setTimeout(function() {
    //         $(".success-message p").css("opacity", "1");
    //       }, 200);
    //       setTimeout(function() {
    //         $(".success-message p").css("opacity", "0");
    //       }, 8000);
    //       setTimeout(function() {
    //         $(".success-message").html("");
    //       }, 9000);
    //     }
    //   });
    // }
    // });
  });
});
