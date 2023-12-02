import { NumberKey } from "./number-key";

// 関数電卓における0~9の数字キー
export const NumberPads = ({
  onClick,
}: {
  onClick: (number: number) => void;
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <NumberKey number={7} onClick={onClick} />
      <NumberKey number={8} onClick={onClick} />
      <NumberKey number={9} onClick={onClick} />
      <NumberKey number={4} onClick={onClick} />
      <NumberKey number={5} onClick={onClick} />
      <NumberKey number={6} onClick={onClick} />
      <NumberKey number={1} onClick={onClick} />
      <NumberKey number={2} onClick={onClick} />
      <NumberKey number={3} onClick={onClick} />
      <NumberKey number={0} onClick={onClick} />
    </div>
  );
};
