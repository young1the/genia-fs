import * as SVG from "@/components/commons/svgs";
import {
  reservationStep,
  reservationInputsSelector,
  newReservationOrder,
} from "@/store/Reservation/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { ReservationType } from ".";

const Icons: Record<ReservationType, JSX.Element> = {
  DATE: <SVG.Calendar className='w-8 h-8' />,
  ROOM: <SVG.Location className='w-8 h-8' />,
  TIME: <SVG.Clock className='w-8 h-8' />,
  TITLE: <SVG.Chat className='w-8 h-8' />,
};

const IconContainer = () => {
  const [currentKey, setKey] = useRecoilState(reservationStep);
  const reservationInputs = useRecoilValue(reservationInputsSelector);
  return (
    <div className='w-full relative flex justify-between '>
      {newReservationOrder.map((key) => {
        return (
          <div
            key={key}
            onClick={() => {
              setKey(key);
            }}
            className={`${currentKey == key ? "animate-bounce text-primary" : ""
              }
             ${!reservationInputs[key] ? "cc-text-black" : "text-primary"
              } hover:text-primary`}
          >
            {Icons[key]}
          </div>
        );
      })}
    </div>
  );
};

export default IconContainer;
