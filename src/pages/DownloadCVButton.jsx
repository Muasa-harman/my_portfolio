import React from 'react';

const DownloadCVButton = () => {
  const handleDownload = () => {
    // Create CV content
    const cvContent = {}

    // Create a Blob from the content
    const blob = new Blob([cvContent], { type: 'text/plain' });

    // Create a download link
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Your_CV.txt';

    // Append the link to the body, trigger the click, and remove the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadCVButton;
