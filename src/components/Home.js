import React from 'react';
import WorkflowStep from './WorkflowStep';
import './Home.css';

const steps = [
  {
    id: 1,
    title: 'Upload JSON',
    image: 'https://img.freepik.com/free-vector/illustration-uploading-icon_53876-6323.jpg?ga=GA1.1.1583138276.1661557840&semt=ais_hybrid',
    url: 'https://nkb-backend-ccbp-beta.earlywave.in/admin/nkb_load_data/uploadfile/add/',
    jsonSnippet: null,
  },
  {
    id: 2,
    title: 'JSON Conversion',
    image: 'https://img.freepik.com/free-vector/illustration-refresh-icon_53876-5630.jpg?ga=GA1.1.1583138276.1661557840&semt=ais_hybrid',
    url: 'https://nkb-backend-ccbp-beta.earlywave.in/admin/nkb_load_data/contentloading/add/',
    jsonSnippet: `{
      "load_data_type": "EXAM",
      "input_dir_path_url": "ADD PATH URL"
    } `,
  },
  {
    id: 3,
    title: 'Sheet Loading',
    image: 'https://img.freepik.com/free-vector/loading-circles-blue-gradient_78370-2646.jpg?ga=GA1.1.1583138276.1661557840&semt=ais_hybrid',
    url: 'https://nkb-backend-ccbp-beta.earlywave.in/admin/nkb_load_data/contentloading/add/',
    jsonSnippet: `{
      "spread_sheet_name": "SPREAD SHEET NAME",
      "data_sets_to_be_loaded": ["ResourcesData", "Exam", "Units"],
      "exam_questions_dir_path_url": "Response from JSON conversion"
    } `,
  },
  {
    id: 4,
    title: 'Unlock Resources',
    image: 'https://img.freepik.com/free-vector/illustration-lock-icon_53876-5832.jpg?ga=GA1.1.1583138276.1661557840&semt=ais_hybrid',
    url: 'https://nkb-backend-ccbp-beta.earlywave.in/admin/nkb_load_data/contentloading/add/',
    jsonSnippet: `{
      "resource_ids": [
        "Enter Unit ID"
      ]
    } `,
  },
  {
    id: 5,
    title: 'Change the Unit',
    image: 'https://img.freepik.com/free-vector/illustration-cogwheel_53876-6326.jpg?ga=GA1.1.1583138276.1661557840&semt=ais_hybrid',
    url: 'https://nkb-backend-ccbp-beta.earlywave.in/admin/nkb_resources/unit/?q=',
    jsonSnippet: null,
  },
  {
    id: 5,
    title: 'Delete Unit',
    image: 'https://img.freepik.com/free-vector/illustration-trash-bin-icon_53876-5598.jpg?ga=GA1.1.1583138276.1661557840&semt=ais_hybrid',
    url: 'https://nkb-backend-ccbp-beta.earlywave.in/admin/nkb_load_data/contentloading/add/',
    jsonSnippet: `{
      "resource_ids": ["Enter Unit ID"],
      "resource_type": "UNIT"
    } `,
  },
];

const Home = () => {
  const handleStepClick = (url) => {
    if (url) {
      window.open(url, '_blank'); // Open the URL in a new tab
    }
  };

  return (
    <div className="home">
      <h1 className="main-heading">Coding Analysis MCQ Generator</h1>
      <p>Welcome to the NXT Coding Analysis MCQ Generator. Follow the workflow instructions to Generate your coding Aalysis MCQs!</p>
      <div className="workflow-container">
        {steps.map(step => (
          <WorkflowStep 
            key={step.id} 
            title={step.title} 
            image={step.image} 
            jsonSnippet={step.jsonSnippet} 
            onClick={() => handleStepClick(step.url)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
