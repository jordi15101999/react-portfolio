/* eslint-disable react/prop-types */
const SkillCard = ({ name, icon }) => {
  return (
    <div className="px-2">
      <div className="flex items-center text-sm w-full space-x-2 rounded-full px-4 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.15)] dark:shadow-neutral-500  dark:bg-white">
        <div className="h-6 w-6">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
};

export default SkillCard;
