const questions = [
    'Quel genre de musique préférez-vous ?',
    'Quelle est votre plateforme de streaming vidéo préférée ?',
    'Quel type de livre préférez-vous lire ?',
    'Quel est votre moyen de transport principal ?',
    'Quelle est votre saison préférée ?',
    'Quel est votre plat préféré parmi les suivants ?',
    'Quelle est votre activité de plein air préférée ?',
    'Quel réseau social utilisez-vous le plus fréquemment ?',
    'Quel genre de films préférez-vous ?',
    'Quelle est votre destination de vacances de rêve ?'
];

const choices = [
    ['Pop', 'Rock', 'Hip-hop/Rap', ' Classique'],
    ['Netflix', 'Amazon Prime Video', 'Disney+', 'Hulu'],
    ['Fiction', 'Non-fiction', 'Science-fiction/Fantaisie', 'Romance'],
    ['Voiture', 'Transport en commun', 'Vélo', 'Marche'],
    ['Printemps', 'Été', 'Automne', 'Hiver'],
    ['Pizza', 'Sushi', 'Hamburger', 'Salade'],
    ['Randonnée', 'Vélo', 'Course à pied', 'Pique-nique'],
    ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
    ['Action', 'Comédie', 'Drame', 'Science-fiction'],
    ['Plage tropicale', 'Montagnes enneigées', 'Ville historique', 'Aventure en pleine nature']
];

let currentQuestionIndex = 0;
let selectedChoices = [];

function initSurvey() {
    displayQuestion();

    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', nextQuestion);

    const prevButton = document.getElementById('prev-button');
    prevButton.addEventListener('click', prevQuestion);

    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', submitSurvey);

    const showAnswersButton = document.getElementById('show-answers-button');
    showAnswersButton.addEventListener('click', showAnswers);

    updateButtonsVisibility();
}

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const questionText = document.createElement('p');
    questionText.textContent = questions[currentQuestionIndex];
    questionContainer.appendChild(questionText);

    const options = choices[currentQuestionIndex];
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            saveChoice(index + 1);
            nextQuestion();
        });

        const label = document.createElement('label');
        label.appendChild(button);

        questionContainer.appendChild(label);
    });

    updateButtonsVisibility();
}

function saveChoice(choice) {
    selectedChoices[currentQuestionIndex] = choice;
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function submitSurvey() {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = '<br><strong>Merci pour votre participation ! Félicitations !</strong><br>';
    resultContainer.style.display = 'block';

    const submitButton = document.getElementById('submit-button');
    submitButton.style.display = 'none';

    const showAnswersButton = document.getElementById('show-answers-button');
    showAnswersButton.style.display = 'block';
}

function showAnswers() {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML += '<br><strong>Réponses :</strong><br>';
    selectedChoices.forEach((choice, index) => {
        resultContainer.innerHTML += `Question ${index + 1}: Vous avez choisi l'option ${choice} !<br>`;
    });
    resultContainer.style.display = 'block';

    const showAnswersButton = document.getElementById('show-answers-button');
    showAnswersButton.style.display = 'none';
}

function updateButtonsVisibility() {
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const submitButton = document.getElementById('submit-button');

    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
    prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', initSurvey);
