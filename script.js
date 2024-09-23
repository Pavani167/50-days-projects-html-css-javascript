const panels = document.querySelectorAll('.panel'); // Select all panel elements

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        // Remove 'active' class from all panels
        removeActiveClasses();
        
        // Add 'active' class to the clicked panel
        panel.classList.add('active');
    });
});

// Function to remove 'active' class from all panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}
