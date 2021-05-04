import React, {useState} from 'react';
import ProgressBar from "./ProgressBar";



const ProgressController = () => {
    const [progress, setProgress] = useState(0);
    return (
        <div className="App">
        <h1>Your Pizza is on it's way!</h1>
  
        <ProgressBar percentage={progress} />
  
        <div className="btn-container">
          <button type="button" onClick={() => setProgress(progress + 33.33)}>
            Update
          </button>
        </div>
      </div>
    )
}

export default ProgressController
