import { useState } from "react";
import { useSetRecoilState, useRecoilSnapshot } from "recoil";
import {
  registerUserInput,
  registerStepIndex,
  stepBarLoadStatus,
} from "./atoms";
import { UserData } from "@/types/common";
import { Keys } from "@/types/utils";

interface Props {
  api?: () => Promise<any>;
  errorCallback?: () => void;
}

export const useRegisterStep = (props?: Props) => {
  const setRegisterStepIndex = useSetRecoilState(registerStepIndex);
  const setStepBarLoadStatus = useSetRecoilState(stepBarLoadStatus);
  const setRegisterUserInput = useSetRecoilState(registerUserInput);
  const [isError, setIsError] = useState(false);
  const snapshot = useRecoilSnapshot();
  const userInput = snapshot.getLoadable(registerUserInput).contents;
  const setUserInput = (key: Keys<UserData>, input: string) => {
    setRegisterUserInput((prev) => {
      return { ...prev, [key]: input };
    });
  };
  const nextStep = async () => {
    try {
      if (props?.api) {
        setStepBarLoadStatus(true);
        await props.api();
        setStepBarLoadStatus(false);
      }
      setRegisterStepIndex((prev) => prev + 1);
    } catch (e) {
      setIsError(true);
      props?.errorCallback?.();
      setStepBarLoadStatus(false);
    }
  };
  return { nextStep, isError, setUserInput, userInput };
};
