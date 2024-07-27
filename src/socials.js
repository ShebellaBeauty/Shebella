import GoogleReviews from "./reviewCarousell";
import { ElfsightWidget } from "react-elfsight-widget";
import "./socials.css";

function Socials() {

  return (
    <div className="flex-container">
      <div className="review-widget widgetControl">
        <GoogleReviews />
      </div>
      <ElfsightWidget widgetId="ef870bda-cf78-488e-85b5-109115b61d29" />
      <ElfsightWidget widgetId="79f39766-0869-4581-8627-665d8ce21eba" />
      <iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/25442466' style={{frameborder:'0',width:'95%',height:'1000px'}}></iframe>
    </div>
  );
}

export default Socials;