import { spacing } from "@ds/foundation";

interface MarginProps {
  children: React.ReactNode;
  space?: keyof typeof spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
}

const Margin: React.FC<MarginProps> = ({
  children,
  space = spacing.sm,
  left,
  right,
  top,
  bottom,
}) => {
  let className;

  if (!left && !right && !top && !bottom) {
    className = `dsc-margin-${space}`;
  }

  if (left) {
    className = `dsc-margin-left-${space}`;
  }

  if (right) {
    className = `dsc-margin-right-${space}`;
  }

  if (top) {
    className = `dsc-margin-top-${space}`;
  }

  if (bottom) {
    className = `dsc-margin-bottom-${space}`;
  }

  return <div className={className}>{children}</div>;
};

export default Margin;
