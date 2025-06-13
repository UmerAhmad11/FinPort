import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className="frontpage-bg-fintech">
      <svg className="fintech-bg-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
              <linearGradient id="fintechGradient1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00C4FF"/>
                  <stop offset="100%" stopColor="#007FFF"/>
              </linearGradient>
              <linearGradient id="fintechGradient2" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#39FF14"/>
                  <stop offset="100%" stopColor="#00B300"/>
              </linearGradient>
              <linearGradient id="fintechGradient3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF6B6B"/>
                  <stop offset="100%" stopColor="#FF0000"/>
              </linearGradient>
          </defs>
          {/* Animated Bars (like a growing chart) */}
          <rect x="100" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
              <animate attributeName="height" values="0;150;0" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;650;800" dur="5s" repeatCount="indefinite"/>
          </rect>
          <rect x="200" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
              <animate attributeName="height" values="0;100;0" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;700;800" dur="6s" repeatCount="indefinite"/>
          </rect>
          <rect x="300" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
              <animate attributeName="height" values="0;200;0" dur="7s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;600;800" dur="7s" repeatCount="indefinite"/>
          </rect>
          <rect x="400" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
              <animate attributeName="height" values="0;120;0" dur="5.5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;680;800" dur="5.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="500" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
              <animate attributeName="height" values="0;180;0" dur="6.5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;620;800" dur="6.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="600" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
              <animate attributeName="height" values="0;160;0" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;640;800" dur="5s" repeatCount="indefinite"/>
          </rect>
          <rect x="700" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
              <animate attributeName="height" values="0;140;0" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;660;800" dur="6s" repeatCount="indefinite"/>
          </rect>
          <rect x="800" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
              <animate attributeName="height" values="0;190;0" dur="7s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;610;800" dur="7s" repeatCount="indefinite"/>
          </rect>
          <rect x="900" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
              <animate attributeName="height" values="0;170;0" dur="5.5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;630;800" dur="5.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="1000" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
              <animate attributeName="height" values="0;130;0" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;670;800" dur="6s" repeatCount="indefinite"/>
          </rect>
          <rect x="1100" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
              <animate attributeName="height" values="0;200;0" dur="7s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;600;800" dur="7s" repeatCount="indefinite"/>
          </rect>
          <rect x="1200" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
              <animate attributeName="height" values="0;150;0" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;650;800" dur="5s" repeatCount="indefinite"/>
          </rect>
          <rect x="1300" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
              <animate attributeName="height" values="0;110;0" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;690;800" dur="6s" repeatCount="indefinite"/>
          </rect>
          <rect x="1400" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
              <animate attributeName="height" values="0;180;0" dur="7s" repeatCount="indefinite"/>
              <animate attributeName="y" values="800;620;800" dur="7s" repeatCount="indefinite"/>
          </rect>
          {/* Animated Line Graph */}
          <polyline points="0,450 300,400 600,480 900,420 1200,500 1440,450" fill="none" stroke="#00C4FF" strokeWidth="3" opacity="0.4">
              <animate attributeName="points" values="0,450 300,400 600,480 900,420 1200,500 1440,450;0,460 300,390 600,490 900,410 1200,510 1440,460;0,450 300,400 600,480 900,420 1200,500 1440,450" dur="15s" repeatCount="indefinite"/>
          </polyline>
          {/* Animated Dots/Nodes (like network activity) */}
          <circle cx="250" cy="300" r="8" fill="#00C4FF" opacity="0.3">
              <animate attributeName="cy" values="300;320;300" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="700" cy="250" r="8" fill="#39FF14" opacity="0.3">
              <animate attributeName="cy" values="250;270;250" dur="5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1000" cy="350" r="8" fill="#007FFF" opacity="0.3">
              <animate attributeName="cy" values="350;370;350" dur="4.5s" repeatCount="indefinite"/>
          </circle>
          <circle cx="1300" cy="200" r="8" fill="#00B300" opacity="0.3">
              <animate attributeName="cy" values="200;220;200" dur="6s" repeatCount="indefinite"/>
          </circle>
          {/* Additional Animated Graph on the Right (near the top) */}
          <polyline points="1200,100 1300,80 1400,120 1500,60" fill="none" stroke="#39FF14" strokeWidth="2" opacity="0.4">
              <animate attributeName="points" values="1200,100 1300,80 1400,120 1500,60;1200,110 1300,70 1400,130 1500,50;1200,100 1300,80 1400,120 1500,60" dur="10s" repeatCount="indefinite"/>
          </polyline>
          <rect x="1250" y="150" width="30" height="0" fill="url(#fintechGradient1)" opacity="0.5">
              <animate attributeName="height" values="0;80;0" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="y" values="150;70;150" dur="4s" repeatCount="indefinite"/>
          </rect>
          <rect x="1350" y="150" width="30" height="0" fill="url(#fintechGradient2)" opacity="0.5">
              <animate attributeName="height" values="0;60;0" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="y" values="150;90;150" dur="5s" repeatCount="indefinite"/>
          </rect>
          <rect x="1450" y="150" width="30" height="0" fill="url(#fintechGradient1)" opacity="0.5">
              <animate attributeName="height" values="0;100;0" dur="6s" repeatCount="indefinite"/>
              <animate attributeName="y" values="150;50;150" dur="6s" repeatCount="indefinite"/>
          </rect>
      </svg>
      <div className="features-content">
        <div className="features-card">
          <h2 className="features-title">Features</h2>
          <p className="features-desc">This page will showcase all the amazing features of FinPort. (Coming soon!)</p>
        </div>
      </div>
    </div>
  );
}

export default Features; 