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
         {activeIframe === 5 && (
          <iframe
            src='https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FP_CT_LSW_CHR112.json'
            height="600"
            width="600"
          />
        )}
         {activeIframe === 6 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FP_CT_LSW_CHR125.json"
            height="600"
            width="600"
          />
        )}
         {activeIframe === 7 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FP_CT_LSW_CHR126.json"
            height="600"
            width="600"
          />
        )}
         {activeIframe === 8 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FV_CT_LSW_BNK6401.json"
            height="600"
            width="600"
          />
        )}
         {activeIframe === 9 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FV_CT_LSW_EIL171.json"
            height="600"
            width="600"
          />
        )}
         {activeIframe === 10 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FV_CT_LSW_BNK6400.json"
            height="600"
            width="600"
          />
        )}
         {activeIframe === 11 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FV_CT_LSW_FLM063.json"
            height="600"
            width="600"
          />
        )}
         {activeIframe === 12 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FV_CT_LSW_EIL160.json"
            height="600"
            width="600"
          />
        )}
         {activeIframe === 13 && (
          <iframe
          src="https://web2.avataar.me/alhena-js/benchmade/index.html?configLink=https://d38rfgdkhzkrym.cloudfront.net/config/TNT_pr4uZcK34EyjKa/P_SFS-S95-ST_FV_CT_LSW_FLM065.json"
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
