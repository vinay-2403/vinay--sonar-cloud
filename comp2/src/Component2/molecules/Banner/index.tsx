import Text from "../../atom/Text";
import Button from "../../atom/Button";
import Image from "../../atom/Image";
import congratsBanner from "../../../assets/congrats-banner.png";
import "./index.css";
interface Congrat {
  onLearnMore?: () => void;
}
export const Banner: React.FC<Congrat> = ({ onLearnMore }) => {
  return (
    <div className="card">
      <div>
        <Text className="title">Congratulations you are ready to start!</Text>
        <Text className="message">
          You are approved for funding. We are ready to advance you upto{" "}
          <strong>$8.8M</strong>
        </Text>
        <Button onClick={onLearnMore} className="button">
          Learn More
        </Button>
      </div>
      <Image
        src={congratsBanner}
        alt="Approval badge"
        className="image"
        width={200}
        height={200}
      />
    </div>
  );
};
