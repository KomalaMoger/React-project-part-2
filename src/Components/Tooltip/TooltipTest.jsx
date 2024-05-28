import Tooltip from "./Tooltip";
import "./Tooltip.css";
export default function TooltipTest() {
  return (
    <div className="main-container">
      <h1>Tooltip</h1>
      <Tooltip
        delay={1000}
        content="Tooltip content"
        children={<p>Hover Me</p>}
      />
    </div>
  );
}
