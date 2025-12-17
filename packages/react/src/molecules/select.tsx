import { useState, useRef, useEffect } from "react";
import "@ds/scss/lib/global.css";
import Text from "../atoms/text/text";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label?: string;
  options?: SelectOption[];
  onSelectOption?: (option: SelectOption, index: number) => void;
}

/** @todo Implement render props */
/** @todo Add A11y */

const Select: React.FC<SelectProps> = ({
  label = "Select an option...",
  options = [],
  onSelectOption: handler,
}) => {
  const labelRef = useRef<HTMLButtonElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState<SelectOption | null>(null);
  const [overlayTop, setOverlayTop] = useState<number>(0);

  useEffect(() => {
    if (labelRef.current?.offsetHeight) {
      setOverlayTop(labelRef.current?.offsetHeight + 10);
    }
  }, []);

  const handleSelect = () => setIsOpen(!isOpen);

  const handleSelectOption = (option: SelectOption, index: number) => {
    if (handler) {
      handler(option, index);
    }

    if (index !== null) {
      setIsSelected(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="dsc-select">
      <button
        className="dsc-select__label"
        onClick={handleSelect}
        ref={labelRef}
      >
        <Text>{isSelected ? isSelected.label : label}</Text>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          height={20}
          width={20}
          className={`chevron ${isOpen ? "chevron__open" : "chevron__close"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {isOpen ? (
        <ul className="dsc-select__options" style={{ top: overlayTop }}>
          {options.map((option, index) => {
            const selected = isSelected?.value === option.value;
            return (
              <li
                key={option.value}
                onClick={() => handleSelectOption(option, index)}
                className={`dsc-select__option ${selected ? "dsc-select__option--selected" : ""}`}
              >
                <Text>{option.label}</Text>
                {selected ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    height={20}
                    width={20}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Select;
