document.addEventListener('DOMContentLoaded', () => {

{/* // Grafik ma'lumotlari */}
const options = {
    chart: {
        type: 'line',
        height: 400,
        toolbar: {
            show: false
        }
    },
    series: [
        {
            name: 'Google',
            data: [78, 77, 76, 77, 78, 77, 76, 77, 78, 77, 77, 77] // Google ma'lumotlari
        },
        {
            name: 'Yandex',
            data: [15, 16, 17, 18, 15, 14, 13, 14, 14, 13, 12, 12] // Yandex ma'lumotlari
        },
        {
            name: 'Other',
            data: [4, 3, 3, 3, 4, 4, 5, 4, 4, 5, 6, 6] // Other ma'lumotlari
        },
        {
            name: 'Bing',
            data: [2, 2, 2, 1.5, 1.5, 1.8, 2, 2, 2, 2.2, 2.5, 2.5] // Bing ma'lumotlari
        },
        {
            name: 'DuckDuckGo',
            data: [0.8, 0.9, 1, 1, 1, 1.2, 1.1, 1, 1, 1.1, 1.2, 1.3] // DuckDuckGo ma'lumotlari
        },
        {
            name: 'Yahoo',
            data: [0.5, 0.5, 0.5, 0.4, 0.4, 0.3, 0.3, 0.4, 0.4, 0.4, 0.4, 0.4] // Yahoo ma'lumotlari
        }
    ],
    xaxis: {
        categories: ['Sep 2021', 'Oct 2021', 'Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022', 'Jun 2022', 'Jul 2022', 'Aug 2022'],
    },
    yaxis: {
        labels: {
            formatter: (value) => `${value}%`
        }
    },
    colors: ['#1E90FF', '#00CED1', '#FF6347', '#9370DB', '#FFA500', '#2E8B57'], // Ranglar
    legend: {
        position: 'right',
        offsetY: 40
    },
    tooltip: {
        y: {
            formatter: (value) => `${value}%`
        }
    }
};

// Grafikni yaratish
const chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

const phoneInput = document.getElementById('phone_input');
Inputmask("+7 (999) 999-99-99").mask(phoneInput);
})
$(document).ready(function() {
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
  