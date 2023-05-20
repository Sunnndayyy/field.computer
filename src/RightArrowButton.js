import React from 'react';

const RightArrowButton = () => (
  <div 
    style={{ 
      display: 'inline-flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '2px', 
      border: '2px solid #9E9E9E', 
      borderRadius: '7px' 
    }}
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="#9E9E9E" 
      className="h-8 w-8"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M14 5l7 7m0 0l-7 7m7-7H3" 
      />
    </svg>
  </div>
);

export default RightArrowButton;
