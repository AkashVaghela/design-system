import "@ds/scss/lib/global.css";
import { fontSize } from "@ds/foundation/lib";

interface TextProps {
  size?: keyof typeof fontSize;
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children, size = fontSize.base }) => {
  const className = `dsc-margin-none dsc-fs-${size}`;
  return <p className={className}>{children}</p>;
};

export default Text;
