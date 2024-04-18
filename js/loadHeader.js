// loadHeader.js
$(function () {
    // Load the header HTML file using jQuery's load() method
    $('#header-placeholder').load('/public/header.html', function (response, status, xhr) {
        if (status === 'error') {
            console.error('Error loading header:', xhr.statusText);
        }
    });
});
