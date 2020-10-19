import { Button } from './style.blueButton';
const BlueButton = ({
  children,
  backgroundColor,
  borderRadius,
  fontSize,
  Width,
  Margin,
}) => {
  return (
    <Button
      style={{
        background: backgroundColor,
        borderRadius: borderRadius,
        fontSize: fontSize,
        width: Width,
        margin: Margin,
      }}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
