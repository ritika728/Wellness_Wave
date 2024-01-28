document.addEventListener('DOMContentLoaded', function () {

  const faqContainer = document.getElementById('faq-container');
  const questions = [
      { question: 'What is Wellness Wave all about?', answer: 'Wellness Wave is a platform dedicated to promoting holistic well-being. We offer a range of resources, articles, and tools to help you enhance your physical, mental, and emotional health.' },
      { question: 'How can I contact customer support?', answer: 'You can reach our customer support team through the "Contact Us" page on our website. We typically respond within 24 hours.' },
      { question: 'What services do you provide?', answer: 'We offer a variety of services, including personalized wellness plans, fitness routines, mental health resources, and nutrition guidance. Explore our website to discover more!' },
      { question: 'Are your wellness plans customizable?', answer: 'Yes, our wellness plans are tailored to individual needs. You can customize them based on your preferences, health goals, and lifestyle.' },
      { question: 'Is there a cost associated with using Wellness Wave?', answer: 'While we offer free resources, some premium features and personalized plans may require a subscription fee. Check our subscription page for more details.' },
      { question: 'How do you handle user data?', answer: 'We take user privacy seriously. Our privacy policy outlines how we collect, use, and protect your data. Rest assured, your information is handled with the utmost care.' },
      { question: 'I\'m having trouble accessing certain features. What should I do?', answer: 'First, ensure you are using a compatible browser. If issues persist, clear your browser cache or try accessing the platform from a different device. If problems persist, contact our support team.' },
      { question: 'How do I cancel my subscription?', answer:'You can manage your subscription through your account settings. If you encounter any issues, feel free to reach out to our customer support for assistance.'},
      {question: 'Is my payment information secure?', answer: 'Yes, we use industry-standard encryption to safeguard your payment information. Your financial details are processed securely through our payment gateway.'},
      {question: 'Are there mobile apps available for Wellness Wave?', answer: 'Currently, we offer a responsive website. However, we are actively working on developing mobile apps for a more convenient user experience.'}

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

document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    window.onscroll = function () {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    };
  
    scrollToTopBtn.addEventListener("click", function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  });
