import { useState } from 'react';
import './App.css';

function App() {
  const [activeIframe, setActiveIframe] = useState(1);

  const toggleIframe = () => {
    setActiveIframe((prev) => (prev % 4) + 1);
  };

  return (
    <>
      <div>
        {activeIframe === 1 && (
          <iframe
            src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FP_CT_LSW_CHR115.json"
            height="600"
            width="600"
          />
        )}
        {activeIframe === 2 && (
          <iframe
            src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FP_CT_LSW_CHR123.json"
            height="600"
            width="600"
          />
        )}
        {activeIframe === 3 && (
          <iframe
            src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FP_CT_LSW_CHR113.json"
            height="600"
            width="600"
          />
        )}
        {activeIframe === 4 && (
          <iframe
            src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FP_CT_LSW_CHR124.json"
            height="600"
            width="600"
          />
        )}
      </div>
      <button onClick={toggleIframe}>Toggle Iframe</button>
    </>
  );
}

export default App;
