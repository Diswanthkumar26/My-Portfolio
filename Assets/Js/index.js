// // text-animation

// try {
//     var TxtType = function (el, toRotate, period) {
//       this.toRotate = toRotate;
//       this.el = el;
//       this.loopNum = 0;
//       this.period = parseInt(period, 10) || 2000;
//       this.txt = '';
//       this.tick();
//       this.isDeleting = false;
//     };
  
//     TxtType.prototype.tick = function () {
//       var i = this.loopNum % this.toRotate.length;
//       var fullTxt = this.toRotate[i];
//       if (this.isDeleting) {
//         this.txt = fullTxt.substring(0, this.txt.length - 1);
//       } else {
//         this.txt = fullTxt.substring(0, this.txt.length + 1);
//       }
//       this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
//       var that = this;
//       var delta = 200 - Math.random() * 100;
//       if (this.isDeleting) { delta /= 2; }
//       if (!this.isDeleting && this.txt === fullTxt) {
//         delta = this.period;
//         this.isDeleting = true;
//       } else if (this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         this.loopNum++;
//         delta = 500;
//       }
//       setTimeout(function () {
//         that.tick();
//       }, delta);
//     };
  
//     function typewrite() {
//       if (toRotate === 'undefined') {
//         changeText()
//       }
//       else
//         var elements = document.getElementsByClassName('typewrite');
//       for (var i = 0; i < elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//       }
//       // INJECT CSS
//       var css = document.createElement("style");
//       css.type = "text/css";
//       css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #ffffff}";
//       document.body.appendChild(css);
//     };
//     typewrite();
  
//   } catch (error) {
  
//   }
// =======================================================================================================================================================

var typed = new Typed(".wrap", {
    strings: ["Front-end Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true
});


// Qualifications
  // Wait for the DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function () {
    // Get all the tabs
    const tabs = document.querySelectorAll('.nav-link');

// Set the default active tab to "Skills" if not already set
const activeTab = document.querySelector('.nav-link.active');
if (!activeTab) {
    // Set default active to Skills tab
    document.getElementById('pills-home-tab').classList.add('active');
document.getElementById('pills-home').classList.add('show', 'active');
    }

    // Add event listener to each tab to manage the active state
    tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
        // Remove active state from all tabs
        tabs.forEach(tab => tab.classList.remove('active'));

        // Add active state to the clicked tab
        event.target.classList.add('active');

        // Get the target content ID
        const targetContentId = event.target.getAttribute('data-bs-target').substring(1);

        // Remove active state from all content sections
        const allContents = document.querySelectorAll('.tab-pane');
        allContents.forEach(content => {
            content.classList.remove('show', 'active');
        });

        // Add active state to the corresponding content
        document.getElementById(targetContentId).classList.add('show', 'active');
    });
    });
});

