import { MemoSection } from "@/styles/MemoStyle";
import Label from "./Label";
import { PlantInfoDetail } from "@/types";

const Memo = ({
  native,
  light,
}: Pick<PlantInfoDetail, "native"> & Pick<PlantInfoDetail, "light">) => {
  return (
    <>
      <MemoSection>
        <div id="textContent">
          <Label data={native} /> 에 살며 &nbsp; <Label data={light} /> 식물입니다.
        </div>
      </MemoSection>
    </>
  );
};
export default Memo;
