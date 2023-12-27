type Props = {
  label: string;
};

const Button: React.FC<Props> = ({ label }) => {
  return <div>{label}</div>;
};

export default Button;
