import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

function Aibot() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [questions, setQuestions] = useState([]);
  
    // Load the stored questions from localStorage when the component mounts
    useEffect(() => {
      const storedQuestions = JSON.parse(localStorage.getItem('questions'));
      if (storedQuestions) {
        setQuestions(storedQuestions);
      }
    }, []);
  
    // Save the questions to localStorage whenever they change
    useEffect(() => {
      localStorage.setItem('questions', JSON.stringify(questions));
    }, [questions]);
  
    // async function generator() {
    //   setAnswer('...loading');
    //   const response = await axios({
    //     url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCRE8tFxm2wK9u-6Qwc3Y08Xhgh7JeFXqk',
    //     method: 'post',
    //     data: { 'contents': [{ 'parts': [{ 'text': question }] }] },
    //   });
    //   console.log(response);
      
    //   const newAnswer = response.data.candidates[0].content.parts[0].text;
    //   setAnswer(newAnswer);
  
    //   // Add the new question to the list of questions
    //   setQuestions([...questions, { question, answer: newAnswer }]);
    //   setQuestion(''); // Clear the question input after generating the answer
    // }
    async function generator() {
      setAnswer('...loading');
      try {
        const response = await axios({
          url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY',
          method: 'post',
          data: { 'contents': [{ 'parts': [{ 'text': question }] }] },
        });
        const newAnswer = response.data.candidates[0].content.parts[0].text;
        setAnswer(newAnswer);
        setQuestions([...questions, { question, answer: newAnswer }]);
        setQuestion('');
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.warn('Rate limit hit, retrying after 5 seconds...');
          setTimeout(generator, 5000); // Retry after 5 seconds
        } else {
          setAnswer('Error fetching the answer. Please try again later.');
          console.error(error);
        }
      }
    }
    
  
    return (
      <>
        <div className='h-screen flex items-center justify-center'>
          <div className='h-[80vh] w-[50vw] bg-slate-300 rounded-lg p-4 flex flex-col space-y-4'>
            <h1 className='text-center font-semibold text-3xl'>MINI CHATBOT</h1>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className='w-full min-h-[15%] p-2 h-[20%] rounded-lg border border-gray-300'
              placeholder='Type your message...'
            ></textarea>
            <button
              onClick={generator}
              className='bg-black text-white rounded-lg p-2'
            >
              Generate Answer
            </button>
            <div className='bg-gray-100 p-4 max-h-[50vh] overflow-y-scroll rounded-lg flex flex-wrap'>
              <p>{answer}</p>
            </div>
            <div className='bg-white p-4 max-h-[50vh] overflow-y-scroll  rounded-lg'>
              <h2 className='font-semibold text-2xl mb-2'>Previous Questions:</h2>
              {questions.map((q, index) => (
                <div key={index} className='mb-2'>
                  <p><strong>Q:</strong> {q.question}</p>
                  <pre><strong>A:</strong> {q.answer}</pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

export default Aibot