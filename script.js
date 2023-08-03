// Function to handle form submission
        function handleFormSubmit(event) {
            event.preventDefault();
            const searchQueryInput = document.getElementById('searchQuery');
            if (searchQueryInput) {
                const searchQuery = searchQueryInput.value;
                const googleSearchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchQuery);
                window.open(googleSearchUrl, '_blank'); // Open the Google search in a new tab
            } else {
                console.error('Search input element not found.');
            }
        }

        // Attach form submit event handler
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            searchForm.addEventListener('submit', handleFormSubmit);
        } else {
            console.error('Search form element not found.');
        }