async function displayQuestion(callback) {
    const apiKey = "ixSpCRruwfiTCggpbh9cMdP6uySKJUgobTUF0nPd";
    const apiUrl = "https://quizapi.io/api/v1/questions";
    const params = `apiKey=${apiKey}&limit=1&category=Linux&difficulty=easy`;

    try {
        // Make the API request to fetch a random question
        const response = await fetch(`${apiUrl}?${params}`);
        const data = await response.json();

        if (data.length > 0) {
            // Extract question from the API response
            const quizQuestion = data[0];
            const question = quizQuestion.question;

            // Print the fetched question
            console.log("Fetched Question:", question);

            // Execute the callback with the fetched question (optional)
            callback(question);
        } else {
            console.log("No valid question available.");
        }
    } catch (error) {
        console.error("Error fetching question:", error);
    }
}

// Example usage:
displayQuestion(function (question) {
    // Your optional logic with the fetched question
});
