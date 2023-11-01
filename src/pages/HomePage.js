// // for horizontal slider
// import React, { useState, useEffect } from "react";
// import data from './data.json';
// import ImageDetailPage from "./ImageDetailPage";
// import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

// export const HomePage = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [imagesPerPage, setImagesPerPage] = useState(3);

//   const [showImageDetail, setShowImageDetail] = useState(false); // Initialize showImageDetail
//   const [selectedImage, setSelectedImage] = useState(null); // Initialize selectedImage

//   const totalImages = data.length;

//   const nextImages = () => {
//     if (startIndex + imagesPerPage < totalImages) {
//       setStartIndex(startIndex + imagesPerPage);
//     }
//   };

//   const prevImages = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - imagesPerPage);
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setImagesPerPage(3);
//       } else {
//         setImagesPerPage(1);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const showDetail = (image) => {
//     setSelectedImage(image);
//     setShowImageDetail(true);
//   };

//   const closeDetail = () => {
//     setShowImageDetail(false);
//   };

//   useEffect(() => {
//     const slideShowInterval = setInterval(() => {
//       let nextIndex = startIndex + imagesPerPage;
//       if (nextIndex >= totalImages) {
//         nextIndex = 0;
//       }
//       setStartIndex(nextIndex);
//     }, 3000);

//     return () => {
//       clearInterval(slideShowInterval);
//     };
//   }, [startIndex, totalImages, imagesPerPage]);

//   const visibleImages = data.slice(startIndex, startIndex + imagesPerPage);
//   const isMobileScreen = window.innerWidth <= 768;

//   return (
//     <div className="w-3/4 m-auto -z-30">
//       <div className="mt-20">
//         <div className="bg-white -z-30 h-[450px] text-black rounded-xl flex items-center justify-center relative">
//           <button
//             onClick={prevImages}
//             disabled={startIndex === 0}
//             style={{ top: isMobileScreen ? '100px' : 0 }}
//           >
//             <GrCaretPrevious className="mr-10" />
//           </button>
//           {visibleImages.map((item, index) => (
//             <div
//               key={item.id}
//               onClick={() => showDetail(item)} // Show detail page on image click
//             >
//               <h1 className="image-title">{item.title}</h1>
//               <img
//                 src={process.env.PUBLIC_URL + item.imagePath}
//                 alt={item.title}
//                 className={`h-44 w-584 gap-4 cursor-pointer rounded-lg${
//                   index < imagesPerPage - 1 ? " mr-8" : ""
//                 }`}
//               />
//             </div>
//           ))}
//           <button
//             onClick={nextImages}
//             disabled={startIndex + imagesPerPage >= totalImages}
//             style={{ top: isMobileScreen ? '100px' : 0 }}
//           >
//             <GrCaretNext className="ml-10" />
//           </button>
//         </div>
//       </div>

//       {/* Conditionally render the detail page */}
//       {showImageDetail && selectedImage && (
//         <div>
//           <button onClick={closeDetail}>Close</button>
//           <ImageDetailPage image={selectedImage} />
//         </div>
//       )}
//     </div>
//   );
// };



// for horizontal slider

import React, { useState, useEffect } from "react";
import data from './data.json';
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";


export const HomePage = () => {

  const [startIndex, setStartIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(3);

  const totalImages = data.length;

  const nextImages = () => {
    if (startIndex + imagesPerPage < totalImages) {
      setStartIndex(startIndex + imagesPerPage);
    }
  };

  const prevImages = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - imagesPerPage);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setImagesPerPage(3);
      } else {
        setImagesPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      let nextIndex = startIndex + imagesPerPage;
      if (nextIndex >= totalImages) {
        nextIndex = 0;
      }
      setStartIndex(nextIndex);
    }, 800000);

    return () => {
      clearInterval(slideShowInterval);
    };
  }, [startIndex, totalImages, imagesPerPage]);

  const visibleImages = data.slice(startIndex, startIndex + imagesPerPage);
  const isMobileScreen = window.innerWidth <= 768;

  return (
    <>
    <div className="bg-red-200 h-200%"> 
    <div className="w-3/4 m-auto -z-30 ">
      <div className="pt-20 pb-20">
        <div className="flex items-center pt-10"> {/* Wrap images in a flex container */}
          <button
            onClick={prevImages}
            disabled={startIndex === 0}
            style={{ top: isMobileScreen ? '100px' : 0 }}
          >
            <GrCaretPrevious className="mr-10" />
          </button>

          {visibleImages.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center"> {/* Center-align title and image */}
             
              <Link to={`ImageDetail/${item.id}`}>
                <img
                class="ease-linear transform hover:scale-125 transition duration-500 bg-teal-400 px-2 py-2 mt-10 ml-10 mr-10 inline"
                  src={process.env.PUBLIC_URL + item.imagePath}
                  alt={item.title}
                  className={`h-44 w-584 gap-9 rounded-lg ${
                    index < imagesPerPage - 1 ? "mt-10 ml-10 mr-10" : ""
                  }`}
                  style={{ cursor: "pointer" }} 
                />
              </Link>
              <a class="inline-block transition duration-500 hover:scale-125 hover:bg-600 flex justify-center items-center rounded-full m-6 p-4 bg-teal-400 text-white">
              <Link to={`ImageDetail/${item.id}`} >{item.title}</Link>
              </a>
            </div>
          ))}

          <button 
            onClick={nextImages}
            disabled={startIndex + imagesPerPage >= totalImages}
            style={{ top: isMobileScreen ? '100px' : 0 }}
          >
            <GrCaretNext className="ml-10"/>
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};
export default HomePage;




// for vrticle slider......

// import React, { useState, useEffect } from "react";
// import data from './data.json';
// import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

// export const HomePage = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [imagesPerPage, setImagesPerPage] = useState(3);

//   const totalImages = data.length;

//   const nextImages = () => {
//     if (startIndex + imagesPerPage < totalImages) {
//       setStartIndex(startIndex + imagesPerPage);
//     }
//   };

//   const prevImages = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - imagesPerPage);
//     }
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setImagesPerPage(3);
//       } else {
//         setImagesPerPage(1);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const slideShowInterval = setInterval(() => {
//       let nextIndex = startIndex + imagesPerPage;
//       if (nextIndex >= totalImages) {
//         nextIndex = 0;
//       }
//       setStartIndex(nextIndex);
//     }, 3000);

//     return () => {
//       clearInterval(slideShowInterval);
//     };
//   }, [startIndex, totalImages, imagesPerPage]);

//   const visibleImages = data.slice(startIndex, startIndex + imagesPerPage);
//   const isMobileScreen = window.innerWidth <= 768;

//   return (
//     <div className="w-3/4 m-auto -z-30 mt-20">
//       <div className="bg-white -z-30 h-[450px] text-black rounded-xl flex items-center justify-center relative">
//         <button
//           onClick={prevImages}
//           disabled={startIndex === 0}
//           style={{ top: isMobileScreen ? '100px' : 0 }}
//         >
//           <GrCaretPrevious className="mr-10" />
//         </button>
//         <div className="horizontal-images-container">
//           {visibleImages.map((item, index) => (
//             <div key={item.id} className="horizontal-image-wrapper">
//               <img
//                 src={process.env.PUBLIC_URL + item.imagePath}
//                 alt={item.title}
//                 className="image"
//               />
//               <h1 className="image-title">{item.title}</h1>
//             </div>
//           ))}
//         </div>
//         <button
//           onClick={nextImages}
//           disabled={startIndex + imagesPerPage >= totalImages}
//           style={{ top: isMobileScreen ? '100px' : 0 }}
//         >
//           <GrCaretNext className="ml-10" />
//         </button>
//       </div>
//     </div>
//   );
// };





// import React, { useState, useEffect } from "react";
// import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
// import jsonData from './data.json'// Import the JSON data

// export const HomePage = () => {
//   const [startIndex, setStartIndex] = useState(0);
//   const [imagesPerPage, setImagesPerPage] = useState(3); // Initial value
//   const data = jsonData.items;

//   const totalImages = data.length;

//   const nextImages = () => {
//     if (startIndex + imagesPerPage < totalImages) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const prevImages = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   const visibleImages = data.slice(startIndex, startIndex + imagesPerPage);

//   const isMobileScreen = window.innerWidth <= 768; // Adjust this value as needed

//   return (
//     <div className="w-3/4 m-auto -z-30">
//       <div className="mt-20 ">
//         <div className="bg-white -z-30 h-[450px] text-black rounded-xl flex items-center justify-center relative">
//           <button
//             onClick={prevImages}
//             disabled={startIndex === 0}
//             style={{ top: isMobileScreen ? "100px" : 0 }}
//           >
//             <GrCaretPrevious className="mr-10" />
//           </button>
//           {visibleImages.map((item, index) => (
//             <img
//               key={item.id}
//               src="./Images/1.webp.jpg"
//               alt={item.title}
//               className={`h-44 w-584 gap-4 cursor-pointer rounded-lg ${
//                 index < visibleImages.length - 1 ? "mr-8" : ""
//               }`}
//             />
//              ) )}
//           <button
//             onClick={nextImages}
//             disabled={startIndex + imagesPerPage >= totalImages}
//             style={{ top: isMobileScreen ? "100px" : 0 }}
//           >
//             <GrCaretNext className="ml-10" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };












// import React from 'react'
// import { useState, useEffect } from "react";
// import { images } from './img';
// import jsonData from './data.json'
// import { GrCaretNext, GrCaretPrevious} from "react-icons/gr";

// export const HomePage = () => {
//   const [startIndex, setStartIndex] = useState(0);

//   const [imagesPerPage, setImagesPerPage] = useState(3); // Initial value




//   const totalImages = Object.keys(images).length;

//   const nextImages = () => {
//     if (startIndex + imagesPerPage < totalImages) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const prevImages = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };



//   useEffect(() => {
//     const handleResize = () => {
//         // Adjusting image for small screen [chote screen keliye]
//       if (window.innerWidth >= 768) { 
//         setImagesPerPage(3);
//       } else {
//         setImagesPerPage(1);
//       }
//     };

//     // Initial call
//     handleResize();

//     // Listen for window resize events
//     window.addEventListener("resize", handleResize);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Auto slide to the next set of images every 3 seconds
//   useEffect(() => {
//     const slideShowInterval = setInterval(() => {
//       let nextIndex = startIndex + 1;
//       if (nextIndex >= totalImages) {
//         nextIndex = 0; // Reseting t to the first image
//       }
//       setStartIndex(nextIndex);
//     }, 3000);

//     return () => {
//       clearInterval(slideShowInterval);
//     };
//   }, [startIndex, totalImages]);

//   const visibleImages = Object.keys(images).slice(
//     startIndex,
//     startIndex + imagesPerPage
//   );

//   const isMobileScreen = window.innerWidth <= 768; // Adjust this value as needed


//   return (
//     <div className="w-3/4 m-auto -z-30">
//       <div className="mt-20 ">
//         <div className="bg-white -z-30 h-[450px] text-black rounded-xl flex items-center justify-center relative">
//           <button
//             onClick={prevImages}
//             disabled={startIndex === 0}
//             style={{ top: isMobileScreen ? '100px' : 0 }}
//           >
//             <GrCaretPrevious  className="mr-10" />
//           </button>
//           {visibleImages.map((imageKey, index) => (
//             <img
//               key={imageKey}
//               src={images[imageKey]}
              
//               alt={imageKey}
//               className={`h-44 w-584 gap-4 cursor-pointer rounded-lg ${
//                 index < visibleImages.length - 1 ? "mr-8" : ""
//               }`}
//             />
//           ))}

//           <button
//             onClick={nextImages}
//             disabled={startIndex + imagesPerPage >= totalImages}
//             style={{ top: isMobileScreen ? '100px' : 0 }}
//           >
//              <GrCaretNext className="ml-10"/>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }






