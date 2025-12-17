import Margin from "./atoms/margin/margin";
import Select from "./molecules/select/select";

function App() {
  return (
    <>
      <Margin>
        <Select
          options={[
            { label: "Staraw hat pirates", value: "1" },
            { label: "Red haired pirates", value: "2" },
          ]}
          onSelectOption={(option, index) => console.log(option, index)}
        />
      </Margin>
    </>
  );
}

export default App;
