document.addEventListener('DOMContentLoaded', function () {
    const faqContainer = document.getElementById('faq-container');
    const questions = [
      { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
      { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
      { question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
      { question: 'Is it useful?', answer: 'Yes, it can be a useful tool for web developers and designers to fill content in the absence of actual data.' },
      { question: 'How to use Lorem Ipsum?', answer: 'You can simply add Lorem Ipsum to your HTML and use it as a placeholder text.' },
      { question: 'Can I customize Lorem Ipsum?', answer: 'Yes, you can customize the length and style of Lorem Ipsum text.' }
    ];

    questions.forEach((q, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('faq-question');
      questionElement.innerHTML = `<strong>${index + 1}. ${q.question}</strong>`;
      
      const answerElement = document.createElement('div');
      answerElement.classList.add('faq-answer');
      answerElement.textContent = q.answer;

      answerElement.style.display = 'none';

      questionElement.addEventListener('click', function () {
        answerElement.style.display = answerElement.style.display === 'none' ? 'block' : 'none';
      });

      faqContainer.appendChild(questionElement);
      faqContainer.appendChild(answerElement);
    });
  });