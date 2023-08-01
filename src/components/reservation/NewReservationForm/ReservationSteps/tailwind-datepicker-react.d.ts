declare module "tailwind-datepicker-react" {
  import { ReactElement } from "react";

  interface ITheme {
    background: string;
    todayBtn: string;
    clearBtn: string;
    icons: string;
    text: string;
    disabledText: string;
    input: string;
    inputIcon: string;
    selected: string;
  }

  interface IIcons {
    prev: () => ReactElement;
    next: () => ReactElement;
  }

  export interface IOptions {
    title?: string;
    autoHide?: boolean;
    todayBtn?: boolean;
    todayBtnText?: string;
    clearBtn?: boolean;
    clearBtnText?: string;
    maxDate?: Date;
    minDate?: Date;
    theme?: ITheme;
    icons?: IIcons;
    datepickerClassNames?: string;
    defaultDate?: Date | null;
    language?: string;
    weekDays?: string[];
    disabledDates?: Date[];
    inputNameProp?: string;
    inputIdProp?: string;
    inputPlaceholderProp?: string;
    inputDateFormatProp?: Intl.DateTimeFormatOptions;
  }

  type DatepickerProps = {
    children?: ReactElement | ReactNode;
    options?: IOptions;
    // eslint-disable-next-line no-unused-vars
    onChange?: (date: Date) => void;
    show: boolean;
    // eslint-disable-next-line no-unused-vars
    setShow: (show: boolean) => void;
    classNames?: string;
    // eslint-disable-next-line no-unused-vars
    selectedDateState?: [Date, (date: Date) => void];
  };

  // eslint-disable-next-line no-unused-vars
  export default function Datepicker(props: DatepickerProps): ReactElement;
}
