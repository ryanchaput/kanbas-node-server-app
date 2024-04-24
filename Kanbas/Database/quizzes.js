export default [
    {
        _id: "1",
        title: "Quiz 1",
        courseId: "1",
        published: true,
        questions: [
            {
                _id: "1",
                title: "What is the capital of France?",
                points: 5,
                options: [
                    { text: "Paris", isCorrect: true },
                    { text: "London", isCorrect: false },
                    { text: "Berlin", isCorrect: false },
                    { text: "Madrid", isCorrect: false },
                ],
            },
            {
                _id: "2",
                title: "What is the capital of Germany?",
                points: 5,
                options: [
                    { text: "Paris", isCorrect: false },
                    { text: "London", isCorrect: false },
                    { text: "Berlin", isCorrect: true },
                    { text: "Madrid", isCorrect: false },
                ],
            },
            {
                _id: "3",
                title: "What is the capital of Spain?",
                points: 5,
                options: [
                    { text: "Paris", isCorrect: false },
                    { text: "London", isCorrect: false },
                    { text: "Berlin", isCorrect: false },
                    { text: "Madrid", isCorrect: true },
                ],
            },
        ],
    },
    {
        _id: "2",
        title: "Quiz 2",
        courseId: "1",
        published: true,
        questions: [
            {
                _id: "1",
                title: "What is 2+2?",
                points: 5,
                options: [
                    { text: "1", isCorrect: false },
                    { text: "2", isCorrect: false },
                    { text: "3", isCorrect: false },
                    { text: "4", isCorrect: true },
                ],
            },
            {
                _id: "2",
                title: "What is 3+3?",
                points: 5,
                options: [
                    { text: "5", isCorrect: false },
                    { text: "6", isCorrect: true },
                    { text: "7", isCorrect: false },
                    { text: "8", isCorrect: false },
                ],
            },
            {
                _id: "3",
                title: "What is 4+4?",
                points: 5,
                options: [
                    { text: "8", isCorrect: true },
                    { text: "9", isCorrect: false },
                    { text: "10", isCorrect: false },
                    { text: "11", isCorrect: false },
                ],
            },
        ],
    },
]