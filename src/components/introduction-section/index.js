import React from 'react';
import './style.scss';

function IntroductionSection({ introduction }) {
  return (
    <div className="indroduction-section">
      {introduction.map((intro) => (
        <p className="introduction">{intro}</p>
      ))}
    </div>
  );
}

export default IntroductionSection;
