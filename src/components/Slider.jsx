// eslint-disable-next-line react/prop-types
const PercentageSlider = ({percentage, value}) => {

  return (
    <div className="w-full my-4">
      <div className="relative w-full h-[6px] bg-gray-200 rounded-lg overflow-visible">
        <div 
          className="absolute left-0 top-0 h-full bg-customgreen"
          style={{ width: `${percentage}%` }}
        />
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={value}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <div 
          className="absolute top-0 right-0 h-6 w-8 font-bold  bg-customgreen z-50 flex items-center justify-center text-customgray text-sm lg:text-md"
          style={{ 
            left: `${percentage}%`, 
            transform: 'translateX(-50%) translateY(-33%)',
            borderRadius: '10px'
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default PercentageSlider;