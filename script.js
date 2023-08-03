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


        function simulateTyping() {
            const inputElement = document.getElementById('searchQuery');
            const query = "PERSIAN MYTHOLOGY";
            const typingSpeed = 40; // Speed in milliseconds per character
            const maxRandomDelay = 400; // Maximum additional random delay in milliseconds

            let currentIndex = 0;

            function typeCharacter() {
                inputElement.value = query.slice(0, currentIndex + 1);

                if (currentIndex < query.length - 1) {
                    const randomDelay = Math.floor(Math.random() * maxRandomDelay);
                    currentIndex++;
                    setTimeout(typeCharacter, typingSpeed + randomDelay);
                }
            }

            typeCharacter();
        }

        // Trigger the typing simulation after a 2-second delay
        window.onload = function() {
            setTimeout(simulateTyping, 2000); // 2-second delay (2000 milliseconds)
        };

