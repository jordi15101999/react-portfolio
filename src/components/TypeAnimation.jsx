/* eslint-disable react/prop-types */
import { TypeAnimation as TypeAnimationComponent } from "react-type-animation";

const TypeAnimation = ({ sequence, delay = 1000 }) => {
  const modifiedSequence = [];

  sequence.forEach((item, index) => {
    modifiedSequence.push(item);

    if (index < sequence.length) {
      modifiedSequence.push(delay);
    }
  });

  return (
    <TypeAnimationComponent
      sequence={modifiedSequence}
      speed={10}
      deletionSpeed={70}
      repeat={Infinity}
      aria-label={sequence[0]}
    />
  );
};

export default TypeAnimation;
