export interface button {
  className?: string;
  children: string | React.ReactNode;
  disabled?: boolean;
}

export interface icon {
  icon?: React.ReactNode;
  text: string | React.ReactNode;
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
  icon: string | React.ReactNode;
  text: string;
  title: string;
}

export interface aboutFaqProps {
  question: string;
  answer: string;
}