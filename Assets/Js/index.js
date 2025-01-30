//text-animation
var typed = new Typed(".wrap", {
    strings: ["Front-end Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 3000,
    loop: true
});

// =======================================================================================================================================================

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

// =======================================================================================================================================================
