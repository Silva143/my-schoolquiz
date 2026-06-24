import React, { useState } from 'react';
import './FlashcardModal.css';

export default function FlashcardModal({ isOpen, onClose, onSaveCard }) {
  const [frontText, setFrontText] = useState('');
  const [backText, setBackText] = useState('');
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState('Senior 1');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newCard = {
      id: Date.now(),
      front: frontText,
      back: backText,
      topic: topic || 'General',
      level: level,
      createdAt: new Date().toLocaleDateString()
    };

    onSaveCard(newCard);
    
    // Reset state fields & dismiss modal view
    setFrontText('');
    setBackText('');
    setTopic('');
    onClose();
  };

  return (
    // <div className="modal-overlay" onClick={onClose}>
    //   {/* Clicking inside the modal container won't accidentally dismiss it */}
    //   <div className="modal-container" onClick={(e) => e.stopPropagation()}>
    //     <header className="modal-header">
    //       <div>
    //         <h2>Add New Flashcard</h2>
    //         <p>Create quick-fire active recall terms for student revision.</p>
    //       </div>
    //       <button className="btn-close-x" onClick={onClose}>&times;</button>
    //     </header>

    //     <form onSubmit={handleSubmit} className="modal-form">
          
    //       {/* Layout split for Core Metadata Rules */}
    //       <div className="modal-meta-row">
    //         <div className="modal-group">
    //           <label htmlFor="card-topic">Topic / Unit</label>
    //           <input
    //             id="card-topic"
    //             type="text"
    //             placeholder="e.g., Separation of Mixtures"
    //             value={topic}
    //             onChange={(e) => setTopic(e.target.value)}
    //             required
    //           />
    //         </div>

    //         <div className="modal-group">
    //           <label htmlFor="card-level">Class Level</label>
    //           <select
    //             id="card-level"
    //             value={level}
    //             onChange={(e) => setLevel(e.target.value)}
    //           >
    //             <option value="Senior 1">Senior 1</option>
    //             <option value="Senior 2">Senior 2</option>
    //             <option value="Senior 3">Senior 3</option>
    //             <option value="Senior 4">Senior 4</option>
    //           </select>
    //         </div>
    //       </div>

    //       {/* Front / Query Side definition text */}
    //       <div className="modal-group">
    //         <label htmlFor="card-front">Front Side (Question / Concept Name)</label>
    //         <textarea
    //           id="card-front"
    //           rows="3"
    //           placeholder="e.g., Define the process of Sublimation."
    //           value={frontText}
    //           onChange={(e) => setFrontText(e.target.value)}
    //           required
    //         />
    //       </div>

    //       {/* Back / Recall Side answer profile validation description text */}
    //       <div className="modal-group">
    //         <label htmlFor="card-back">Back Side (Answer / Hidden Explanation)</label>
    //         <textarea
    //           id="card-back"
    //           rows="3"
    //           placeholder="e.g., The direct transition of a substance from solid phase directly to gas phase without passing through a liquid state."
    //           value={backText}
    //           onChange={(e) => setBackText(e.target.value)}
    //           required
    //         />
    //       </div>

    //       <footer className="modal-footer">
    //         <button type="button" className="btn-action cancel" onClick={onClose}>
    //           Cancel
    //         </button>
    //         <button type="submit" className="btn-action submit">
    //           Create Flashcard
    //         </button>
    //       </footer>
    //     </form>
    //   </div>
    // </div>
    <p>this is my flash card</p>
  );
}