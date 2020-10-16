import { Button } from './style.blueButton';
const BlueButton = ({
  children,
  backgroundColor,
  borderRadius,
  fontSize,
  Width,
}) => {
  return (
    <Button
      style={{
        background: backgroundColor,
        borderRadius: borderRadius,
        fontSize: fontSize,
        width: Width,
      }}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
