import { UIProps } from "../ResponsiveUI";
import ButtonUser from "./ButtonUser";
import NavigationBar from "./NavigationBar";

const OnlyDesktop = ({ status }: UIProps) => {
  return (
    <>
      <NavigationBar status={status} />
      <ButtonUser status={status} />
    </>
  );
};

export default OnlyDesktop;
