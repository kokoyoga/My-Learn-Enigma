import {Button, Divider, input} from "@heroui/react";
import {useState, useMemo} from "react";
import {useSelector, useDispatch} from "react-redux";

// dibuat seolah-olah ini adalah function yang berat/ tidak memoized
const doubleNumber = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

function Counter() {
  // global state
  const counterSelector = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch({type: "INCREMENT"});
  };

  const handleClickDecrement = () => {
    dispatch({type: "DECREMENT"});
  };

  const [inputValue, setInputValue] = useState(0);
  const handleSetButton = () => {
    dispatch({type: "SET", payload: inputValue});
  };

  //----------------------------------------------

  // local state
  const [counter, setCounter] = useState(0);
  const addButton = () => {
    setCounter(counter + 1);
  };
  const subtractButton = () => {
    setCounter(counter - 1);
  };

  // cara agar function berat tidak mengganggu rendering
  const doubleNumberValue = useMemo(() => doubleNumber(counter), [counter]);

  return (
    <div className="flex item-center flex-col justify-center gap-5">
      <h1 className="text-center">Local state</h1>
      <Button onPress={subtractButton} color="primary">
        subtract
      </Button>
      <p className="flex items-center justify-center">{counter}</p>
      <Button onPress={addButton} color="secondary">
        add
      </Button>
      <p className="text-center">{doubleNumberValue}</p>
      <Divider />
      <h1 className="text-center">Global state</h1>
      <Button onPress={handleClickDecrement} color="primary">
        subtract
      </Button>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(event) => {
            setInputValue(parseInt(event.target.value));
          }}
        />
        <Button onPress={handleSetButton}>Set</Button>
      </div>
      <Button onPress={handleClickIncrement} color="secondary">
        add
      </Button>
      <p className="text-center font-bold text-2xl">
        Global state : {counterSelector.count}
      </p>
    </div>
  );
}

export default Counter;
