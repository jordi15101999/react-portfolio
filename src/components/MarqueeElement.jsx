/* eslint-disable react/prop-types */
import Marquee from "react-fast-marquee";

function MarqueeElement({ children, direction = "left", withPadding = true }) {
  return (
    <Marquee
      direction={direction}
      speed={25}
      className={withPadding ? "py-3" : ""}
    >
      {children}
    </Marquee>
  );
}

export default MarqueeElement;
