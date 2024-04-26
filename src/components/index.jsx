import { useState } from "react";
import data from "../data/data";

const Accordian = () => {
  const [accordian, setAccordian] = useState(null);

  const handleOnClick = (getCurrentId) => {
    setAccordian(getCurrentId === accordian ? null : getCurrentId)
  };

  return (
    <>
      <div>
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div  key={dataItem.id}>
                <div
                  onClick={() => handleOnClick(dataItem.id)}
                >
                  {dataItem.question}
                </div>
                {
                    accordian === dataItem.id ? <>{dataItem.answer}</> : null
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
