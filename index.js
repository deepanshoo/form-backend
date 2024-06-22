const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Questions data
const mockQuestions = {
  Technology: [
    { id: 1, question: 'What is your favorite programming language?', options: ['JavaScript', 'Python', 'Java', 'C#', 'Other'] },
    { id: 2, question: 'How many years of experience do you have in programming?', options: ['Less than 1 year', '1-3 years', '4-6 years', '7-10 years', 'More than 10 years'] },
    { id: 3, question: 'Which development environment do you prefer?', options: ['Visual Studio Code', 'IntelliJ IDEA', 'Eclipse', 'Atom', 'Sublime Text', 'Other'] },
    { id: 4, question: 'How often do you update your technical skills?', options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Rarely'] },
    { id: 5, question: 'What type of development projects do you enjoy the most?', options: ['Web Development', 'Mobile Development', 'Game Development', 'AI/ML', 'Cloud Computing', 'Other'] },
    { id: 6, question: 'Do you contribute to open-source projects?', options: ['Yes, Regularly', 'Yes, Occasionally', 'No, but I plan to', 'No, not interested'] },
    { id: 7, question: 'Which tech blogs or websites do you follow regularly?', options: ['TechCrunch', 'Hacker News', 'Medium', 'Dev.to', 'Other'] },
    { id: 8, question: 'How comfortable are you with version control systems like Git?', options: ['Very Comfortable', 'Comfortable', 'Somewhat Comfortable', 'Not Comfortable'] },
    { id: 9, question: 'What is your preferred operating system for development?', options: ['Windows', 'macOS', 'Linux', 'Other'] },
    { id: 10, question: 'Which of the following technologies are you familiar with?', options: ['Cloud Computing', 'Docker', 'Kubernetes', 'Machine Learning', 'Blockchain', 'Cybersecurity', 'IoT', 'DevOps'] },
  ],
  Health: [
    { id: 1, question: 'How often do you exercise?', options: ['Daily', 'Several times a week', 'Once a week', 'Rarely', 'Never'] },
    { id: 2, question: 'What is your diet preference?', options: ['Vegetarian', 'Vegan', 'Non-Vegetarian', 'Pescatarian', 'Other'] },
    { id: 3, question: 'How many hours of sleep do you get on average per night?', options: ['Less than 5 hours', '5-6 hours', '7-8 hours', 'More than 8 hours'] },
    { id: 4, question: 'Do you consume alcohol?', options: ['Yes, regularly', 'Yes, occasionally', 'No'] },
    { id: 5, question: 'How often do you visit a healthcare professional?', options: ['Monthly', 'Quarterly', 'Annually', 'Rarely', 'Never'] },
    { id: 6, question: 'Do you have any chronic health conditions?', options: ['Yes', 'No'] },
    { id: 7, question: 'How would you rate your overall health?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 8, question: 'Do you smoke?', options: ['Yes, regularly', 'Yes, occasionally', 'No'] },
    { id: 9, question: 'Do you follow a regular exercise routine?', options: ['Yes', 'No'] },
    { id: 10, question: 'How often do you experience stress?', options: ['Daily', 'Weekly', 'Monthly', 'Rarely', 'Never'] },
  ],
  Education: [
    { id: 1, question: 'What is your highest level of education?', options: ['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD', 'Other'] },
    { id: 2, question: 'What was your major field of study?', options: [] }, // No predefined options
    { id: 3, question: 'How many years of formal education have you completed?', options: ['Less than 12 years', '12-15 years', '16-19 years', 'More than 19 years'] },
    { id: 4, question: 'Have you attended any professional training courses?', options: ['Yes', 'No'] },
    { id: 5, question: 'Do you prefer online or in-person classes?', options: ['Online', 'In-person', 'Both'] },
    { id: 6, question: 'What is your primary source of learning?', options: ['Books', 'Online Courses', 'Workshops', 'Mentoring', 'Self-Taught'] },
    { id: 7, question: 'How often do you participate in continuing education?', options: ['Monthly', 'Quarterly', 'Annually', 'Rarely'] },
    { id: 8, question: 'What is your preferred method of learning?', options: ['Visual', 'Auditory', 'Reading/Writing', 'Kinesthetic'] },
    { id: 9, question: 'Do you hold any professional certifications?', options: ['Yes', 'No'] },
    { id: 10, question: 'How would you rate the quality of your education?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
  ],
};

// Endpoint to fetch questions based on topic
app.get('/questions/:topic', (req, res) => {
  const { topic } = req.params;
  const questions = mockQuestions[topic] || [];
  res.json(questions);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
