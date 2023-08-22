import { UIProps } from "../ResponsiveUI";
import ButtonHamburger from "./ButtonHamburger";

const OnlyMobile = ({ status }: UIProps) => {
  return (
    <>
      <ButtonHamburger status={status} />
    </>
  );
};

export default OnlyMobile;
