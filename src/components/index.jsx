import { useState } from "react";
import data from "../data/data";

const Accordian = () => {
  const [accordian, setAccordian] = useState(null);

  const handleOnClick = (getCurrentId) => {
    setAccordian(getCurrentId === accordian ? null : getCurrentId)
  };

  return (
    <>
      <div className="main-div">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div  key={dataItem.id}>
                <div
                className="accordian"
                  onClick={() => handleOnClick(dataItem.id)}
                >
                  {dataItem.question} <span className={dataItem.id === accordian ? "rotation" : "icon"}>+</span>
                </div>
                {
                    accordian === dataItem.id ? <div className="answer">{dataItem.answer}</div> : null
                }
                
              </div>
            );
          })
        ) : (
          <>No data Avilable</>
        )}
      </div>
    </>
  );
};

export default Accordian;
