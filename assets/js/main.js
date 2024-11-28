
$(document).ready(function() {
// input phone
Inputmask("+7 (999) 999-99-99").mask($('.phone_hero'));

    $(".hero_form").on("submit", function(e) {
      e.preventDefault(); // Formani default tarzda yuborishni to'xtatadi
  
      const form = $(this);
      const formData = form.serialize(); // Formani ma'lumotlarini yig'adi
      $.ajax({
        url: "send_email.php",
        type: "POST",
        data: formData,
        dataType: "json",
        success: function(response) {
          if (response.success) {
            Toastify({
              text: response.message,
              duration: 3000,
              gravity: "top", // "top" yoki "bottom"
              position: "right", // "left", "center" yoki "right"
              style: {
                background: "green",
              },
            }).showToast();
          } else {
            Toastify({
              text: response.message,
              duration: 3000,
              gravity: "top",
              position: "right",
              style: {
                background: "red",
              },
            }).showToast();
          }
        },
        error: function() {
          Toastify({
            text: "Server bilan bog'lanishda xatolik yuz berdi.",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
              background: "red",
            },
          }).showToast();
        },
      });
    });
  });
  