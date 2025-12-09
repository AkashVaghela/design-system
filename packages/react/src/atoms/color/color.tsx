import "@ds/scss/lib/global.css";
import { spacing } from "@ds/foundation/lib";

interface ColorProps {
  hexCode: string;
  width?: keyof typeof spacing;
  height?: keyof typeof spacing;
}

const Color: React.FC<ColorProps> = ({ hexCode, height, width }) => {
  const className = `dsc-height-${height} dsc-width-${width}`;
  return (
    <div
      className={className}
      style={{
        backgroundColor: hexCode,
      }}
    ></div>
  );
};

export default Color;
