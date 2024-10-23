import React, { useState }  from 'react'

const Slider = () => {
    const [scrollPosition, setScrollPosition] = useState(0); // State to store scroll position
    // Scroll Position Handle for the scrollbar line
    const handleScroll = (e) => {
        const scrollTop = e.currentTarget.scrollTop;
        const scrollHeight = e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        setScrollPosition(scrollPercentage);
    };

  return (
    <>
    {/* horizontal align */}
    <div className="h-[450px] overflow-y-scroll flex flex-col flex-wrap justify-around space-y space-x-4 p-4  custom-scrollbar" onScroll={handleScroll}>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
    </div>
    {/* vertical align */}
    <div className="h-[450px] overflow-y-scroll flex flex-col md:flex-row md:flex-wrap justify-around space-y p-4 py-10 custom-scrollbar" onScroll={handleScroll}>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
        <div className='p-20 bg-green-500 mt-10 text-center w-[40%]'>
            <h1>Child Scroll section</h1>
        </div>
    </div>
    <div className='p-10 bg-red-500'></div>
    </>
  )
}

export default Slider





// for Global css 

/*  Scrollbar change all scrollbar  */
/* ::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #23db3f;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555;
} */


/* Custom scrollbar only for specific class */

// .custom-scrollbar::-webkit-scrollbar {
//     width: 5px;
//     height: 5px;
//   }
  
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: #f1f1f1;
//     border-radius: 10px;
//   }
  
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: #23db3f;
//     border-radius: 10px;
//     transition: background-color 0.3s ease-in-out;
//   }
  
//   .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//     box-shadow: 0 0 10px rgba(0, 255, 10, 0.5); /* Glow effect */
//   } 
  
//   .custom-placeholder::placeholder {
//     color: white; /* Customize placeholder color if needed */
//   }
  
  
//   .custom-cursor {
//     position: fixed;
//     pointer-events: none; /* Prevent interaction with the cursor */
//     border: 2px solid #fff; /* Optional border for visibility */
//     z-index: 9999; /* Ensure it appears above other elements */
//   }
  
