import { Button } from './style.blueButton';
const BlueButton = ({ children, backgroundColor, borderRadius }) => {
  return (
    <Button style={{ background: backgroundColor, borderRadius: borderRadius }}>
      {children}
    </Button>
  );
};

export default BlueButton;
