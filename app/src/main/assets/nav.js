// Fix navigation links for Android WebView
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a[data-path]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const path = this.getAttribute('data-path');
            const pages = {
                'connect': 'connect.html',
                'locations': 'locations.html',
                'speed-test': 'speedtest.html',
                'settings': 'settings.html'
            };
            if (pages[path]) {
                if (typeof AndroidNav !== 'undefined') {
                    AndroidNav.navigateTo(pages[path]);
                } else {
                    window.location.href = pages[path];
                }
            }
        });
    });
});
