export interface modalProps {
  className?: string;
  children: string | React.ReactNode;
  onClose?: () => void;
  open?: boolean;
}

export interface buttonProps {
  className?: string;
  children: string | React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export interface popupProps {
  name?: string;
  data: any;
  handleModal?: () => void;
  modal?: boolean;
}

export interface icon {
  icon?: React.ReactNode;
  text: string | React.ReactNode;
}

export interface trainingProps {
  timeFrame: number;
  image: string;
  quater: string;
}

export interface catalogProps {
  icon: string | React.ReactNode;
  service: string;
  heading: string;
  name: string;
  data: any;
}

export interface serviceCardProps {
  icon: string | React.ReactNode;
  text: string;
  title: string;
  className: string;
  illustration: string;
  illustration2?: string;
}
export interface aboutCardProps {
  icon: string;
  text: string;
  title: string;
  //src: string;
}

export interface aboutFaqProps {
  question: string;
  answer: string;
}