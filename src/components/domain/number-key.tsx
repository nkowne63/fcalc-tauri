import { Button } from "@/components/ui/button";

// 関数電卓における数字キー
export const NumberKey = ({
  number,
  onClick,
}: {
  number: number;
  onClick: (number: number) => void;
}) => {
  return <Button onClick={() => onClick(number)}>{number}</Button>;
};
