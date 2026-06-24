/**
 * Dynamic Quiz Builder for Mixtures and Compounds
 * Each question is worth 5 marks.
 */
function QuizBuilder() {
    // 10-Question Bank on Mixtures and Compounds
    this.questions = [
        {
            id: 1,
            question: "Which of the following can be separated by physical means?",
            options: ["Compound", "Element", "Mixture", "Pure substance"],
            correctAnswer: "Mixture",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 2,
            question: "When iron filings and sulfur are heated together, they form a:",
            options: ["Heterogeneous mixture", "Compound", "Homogeneous mixture", "Suspension"],
            correctAnswer: "Compound",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 3,
            question: "Air is considered a mixture because:",
            options: [
                "Its composition can vary",
                "It has a fixed boiling point",
                "Its components are chemically bonded",
                "It cannot be separated by physical means"
            ],
            correctAnswer: "Its composition can vary",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 4,
            question: "A compound always contains elements combined in a fixed ratio by:",
            options: ["Volume only", "Mass", "State of matter", "Color"],
            correctAnswer: "Mass",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 5,
            question: "Which of the following is an example of a homogeneous mixture?",
            options: ["Saltwater solution", "Muddy water", "Oil and water", "Salad dressing"],
            correctAnswer: "Saltwater solution",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 6,
            question: "When a compound forms, the properties of the constituent elements:",
            options: ["Remain unchanged", "Are completely lost", "Are averaged out", "Change temporarily"],
            correctAnswer: "Are completely lost",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 7,
            question: "Which separation technique is best used to separate two liquids with different boiling points?",
            options: ["Filtration", "Distillation", "Chromatography", "Evaporation"],
            correctAnswer: "Distillation",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 8,
            question: "Pure water ($H_2O$) is classified as a:",
            options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
            correctAnswer: "Compound",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 9,
            question: "In a heterogeneous mixture, the components are:",
            options: ["Uniformly distributed", "Not uniformly distributed", "Chemically bonded", "Always invisible"],
            correctAnswer: "Not uniformly distributed",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        },
        {
            id: 10,
            question: "Which of the following involves a chemical change?",
            options: ["Melting ice", "Dissolving sugar in water", "Rusting iron", "Mixing sand and gravel"],
            correctAnswer: "Rusting iron",
            marks: 5,
            isAnswered: false,
            userAnswer: null,
            isCorrect: false
        }
    ];

    /**
     * Method to answer a specific question and update the quiz state.
     * @param {number} questionId - The ID of the question (1-10)
     * @param {string} selectedAnswer - The user's chosen answer string
     */
    this.answerQuestion = function(questionId, selectedAnswer) {
        const question = this.questions.find(q => q.id === questionId);

        if (!question) {
            console.log(`Question with ID ${questionId} not found.`);
            return;
        }

        // Update the question state
        question.isAnswered = true;
        question.userAnswer = selectedAnswer;
        question.isCorrect = (selectedAnswer === question.correctAnswer);

        console.log(`Question ${questionId} updated successfully.`);
    };

    /**
     * Method to calculate the current live stats of the quiz.
     * @returns {Object} Current marks and progress summary.
     */
    this.getQuizSummary = function() {
        let totalMarksObtained = 0;
        let totalPossibleMarks = this.questions.length * 5;
        let answeredCount = 0;

        this.questions.forEach(q => {
            if (q.isAnswered) {
                answeredCount++;
                if (q.isCorrect) {
                    totalMarksObtained += q.marks;
                }
            }
        });

        return {
            questionsAnswered: `${answeredCount} / ${this.questions.length}`,
            score: `${totalMarksObtained} / ${totalPossibleMarks} Marks`,
            percentage: `${(totalMarksObtained / totalPossibleMarks) * 100}%`
        };
    };
}

// ==========================================
// EXAMPLE USAGE:
// ==========================================

// 1. Initialize the quiz
const chemistryQuiz = new QuizBuilder();

// 2. View a question before answering
console.log("Before answering, Question 1 state:", chemistryQuiz.questions[0]);

// 3. User answers Question 1 (Correctly)
chemistryQuiz.answerQuestion(1, "Mixture");

// 4. User answers Question 2 (Incorrectly)
chemistryQuiz.answerQuestion(2, "Heterogeneous mixture");

// 5. Check live status and updated scores
console.log("\n--- Live Updated Summary ---");
console.log(chemistryQuiz.getQuizSummary());

// 6. Inspect Question 1 state again to see the structural updates
console.log("\nAfter answering, Question 1 updated state:", chemistryQuiz.questions[0]);