// eslint-disable-next-line react/prop-types
const PercentageSlider = ({percentage, value}) => {

  return (
    <div className="w-full my-4">
      <div className="relative w-full h-3 bg-gray-200 rounded-lg overflow-hidden">
        <div 
          className="absolute left-0 top-0 h-full bg-yellow-400"
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
          className="absolute top-0 right-0 h-8 w-12 font-bold  bg-yellow-400 flex items-center justify-center text-customgray"
          style={{ 
            left: `${percentage}%`, 
            transform: 'translateX(-50%) translateY(-33%)',
            borderRadius: '4px'
          }}
        >
          {value}
        </div>
      </div>
    </div>
  );
};

export default PercentageSlider;