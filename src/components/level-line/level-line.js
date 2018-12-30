import React from 'react';
import './level-line.scss';

export const CurrencyLine = () => {
  return (
    <div className="curline">
      <div className="curline-item">
        <a href="#" className="curline-item__name">Intermediate</a>
        <span className="curline-item__rate">33%</span>
        <span className="curline-item__position">3 videos</span>
      </div>
      <div className="curline-item">
        <a href="#" className="curline-item__name">Advanced</a>
        <span className="curline-item__rate">33%</span>
        <span className="curline-item__position">2 videos</span>
      </div>
      <div className="curline-item">
        <a href="#" className="curline-item__name">Fluent</a>
        <span className="curline-item__rate">33%</span>
        <span className="curline-item__position">2 videos</span>
      </div>
    </div>
  );
};
