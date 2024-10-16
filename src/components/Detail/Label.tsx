import { LabelMainDiv } from "@/styles/LabelStyle";

const Label = ({ data }: { data: string }) => {
  switch (data) {
    case "양지":
      return <LabelMainDiv id="light">{data}</LabelMainDiv>;
    case "반양지":
      return <LabelMainDiv id="light">{data}</LabelMainDiv>;
    case "음지":
      return <LabelMainDiv id="light">{data}</LabelMainDiv>;
    case "반음지":
      return <LabelMainDiv id="light">{data}</LabelMainDiv>;
    default:
      return <LabelMainDiv id="native">{data}</LabelMainDiv>;
  }
};

export default Label;
