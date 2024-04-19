import { useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
import { countAtom, evenSelector } from "./store/atom/count";

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}
function Even() {
  const even = useRecoilValue(evenSelector);
  return <div>{even ? "It is even" : null}</div>;
}
function Count() {
  return (
    <div>
      <CountRender />
      <Buttons />
      <Even />
    </div>
  );
}
function CountRender() {
  const count = useRecoilValue(countAtom);

  return <div>{count}</div>;
}
function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
