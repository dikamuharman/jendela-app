const JProgramStudiCard = () => {
  return (
    <div className="flex flex-col p-4 bg-white rounded-lg border-[2px] border-[#E1E3E7]/30 relative overflow-hidden">
      <div className=" absolute w-[54px] h-[54px]  right-[2px] top-1 bg-primary-20 blur-2xl rounded-full" />
      <div className=" absolute w-[54px] h-[54px]  left-[-4px;] bottom-0 bg-secondary-20 blur-2xl rounded-full" />
      <h2 className="text-xl font-medium mb-2">Program studi</h2>
      <p className="text-netural-30">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis.
      </p>
    </div>
  );
};

export default JProgramStudiCard;
