import React from 'react';

type OverlayPanelProps = {
  className: string;
  title: string;
  description: string;
  buttonId: string;
  buttonText: string;
  onClick: () => void;
};

const OverlayPanel = ({
  className,
  title,
  description,
  buttonId,
  onClick,
  buttonText,
}: OverlayPanelProps): JSX.Element => (
  <div className={`overlay-panel ${className}`}>
    <h1>{title}</h1>
    <p>{description}</p>
    <button
      className='ghost'
      id={buttonId}
      onClick={onClick}
    >
      {buttonText}
    </button>
  </div>
);

export default OverlayPanel;
