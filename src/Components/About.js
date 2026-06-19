// // import React, {useState} from 'react'

// // export default function About() {
// //     const [myStyle, setMyStyle] = useState({
// //         color: 'black',
// //         backgroundColor: 'white'
// //     })

// //     const [btnText, setBtnText] = useState("Enable Dark Mode")

// //     const toggleStyle = () => {
// //         if(myStyle.color === 'black'){
// //             setMyStyle({  
// //                 color: 'white',
// //                 backgroundColor: 'black',
// //                 border: '1px solid white'
// //             })
// //             setBtnText("Enable Light Mode")
// //         } else {
// //             setMyStyle({
// //                 color: 'black',     
// //                 backgroundColor: 'white'
// //             })
// //             setBtnText("Enable Dark Mode")
// //         }
// //     }
// //   return (

// //     <div className="container" style={myStyle}>
// //         <h1 className='my-3'>About Us</h1>
// //       <div className="accordion" id="accordionExample">
// //   <div className="accordion-item">
// //     <h2 className="accordion-header">
// //       <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle} >
// //         Accordion Item #1
// //       </button>
// //     </h2>
// //     <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={myStyle}>
// //       <div className="accordion-body">
// //         <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
// //       </div>
// //     </div>
// //   </div>
// //   <div className="accordion-item">
// //     <h2 className="accordion-header">
// //       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
// //         Accordion Item #2
// //       </button>
// //     </h2>
// //     <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
// //       <div className="accordion-body">
// //         <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
// //       </div>
// //     </div>
// //   </div>
// //   <div className="accordion-item">
// //     <h2 className="accordion-header">
// //       <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
// //         Accordion Item #3
// //       </button>
// //     </h2>
// //     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
// //       <div className="accordion-body">
// //         <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
// //       </div>
// //     </div>
// //   </div>
// // </div>
// //     <div className="container my-3">
// //       <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button>
// //     </div>
// //     </div>
// //   )
// // }

// // About.js
// import React from "react";

// export default function About(prop) {
//   // const myStyle = {
//   //   color: prop.mode === "dark" ? "white" : "#212529",
//   //   backgroundColor: prop.mode === "dark" ? "#212529" : "white",
//   // };

//   return (
//     <div className="container my-5">
//       <div
//         className="card shadow-lg border-0"
        
//       >
//         <div className="card-body p-5" style={ { backgroundColor: prop.mode === "dark" ? "#232336" : "#fff", color: prop.mode === "dark" ? "#fff" : "#000" }}>
//           <h1 className="card-title text-center mb-4">
//             About TextUtils
//           </h1>

//           <p className="lead text-center mb-5">
//             A powerful and user-friendly text utility application built with
//             React.js to help users analyze, modify, and optimize text quickly.
//           </p>

//           <div className="row g-4">
//             <div className="col-md-4">
//               <div className="card h-100 shadow-sm border-0">
//                 <div className="card-body" style={{ backgroundColor: prop.mode === "dark" ? "#2A2A40" : "#fff", color: prop.mode === "dark" ? "#fff" : "#000" }}>
//                   <h4 className="card-title">🚀 Fast Processing</h4>
//                   <p className="card-text">
//                     Instantly perform text transformations such as case
//                     conversion, word counting, and text formatting.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card h-100 shadow-sm border-0">
//                 <div className="card-body" style={{ backgroundColor: prop.mode === "dark" ? "#2A2A40" : "#fff", color: prop.mode === "dark" ? "#fff" : "#000" }}>
//                   <h4 className="card-title">📊 Text Analysis</h4>
//                   <p className="card-text">
//                     Get detailed insights including word count, character
//                     count, reading time, and text statistics.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4">
//               <div className="card h-100 shadow-sm border-0">
//                 <div className="card-body" style={{ backgroundColor: prop.mode === "dark" ? "#2A2A40" : "#fff", color: prop.mode === "dark" ? "#fff" : "#000" }}>
//                   <h4 className="card-title">🌙 Dark Mode</h4>
//                   <p className="card-text">
//                     Enjoy a comfortable viewing experience with both light and
//                     dark themes for every environment.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <hr className="my-5" />

//           <div className="text-center" style={{ color: prop.mode === "dark" ? "#06B6D4" : "#000" }}>
//             <h3>Why Choose TextUtils?</h3>
//             <p className="mt-3">
//               TextUtils is designed with simplicity, speed, and usability in
//               mind. Whether you're a student, developer, writer, or
//               professional, our tools help you work with text more efficiently
//               and accurately.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function About(props) {
  const cardStyle = {
    background:
      props.mode === "dark"
        ? "rgba(255,255,255,0.08)"
        : "rgba(255,255,255,0.08)",
    color: props.mode === "dark" ? "#ffffff" : "#000000",
    backdropFilter: props.mode === "dark" ? "blur(12px)" : "none",
    border:
      props.mode === "dark"
        ? "1px solid rgba(255,255,255,0.1)"
        : "none",
    borderRadius: "20px",
  };

  return (
    <div className="container my-5">
      <div className="shadow-lg" style={cardStyle}>
        <div className="card-body p-5">
          <h1 className="text-center fw-bold mb-4">
            About TextForge
          </h1>

          <p className="lead text-center mb-5">
            A powerful and user-friendly text utility
            application built with React.js to help
            users analyze, modify and optimize text
            quickly.
          </p>

          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="h-100 p-4 shadow"
                style={cardStyle}
              >
                <h4>🚀 Fast Processing</h4>
                <p>
                  Instantly perform text transformations
                  such as case conversion, word counting
                  and text formatting.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="h-100 p-4 shadow"
                style={cardStyle}
              >
                <h4>📊 Text Analysis</h4>
                <p>
                  Get detailed insights including word
                  count, character count and reading
                  time.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="h-100 p-4 shadow"
                style={cardStyle}
              >
                <h4>🌙 Dark Mode</h4>
                <p>
                  Enjoy a comfortable viewing experience
                  with both light and dark themes.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          <div className="text-center">
            <h3
              style={{
                color:
                  props.mode === "dark"
                    ? "#06B6D4"
                    : "#2563EB",
              }}
            >
              Why Choose TextForge?
            </h3>

            <p className="mt-3">
              TextUtils is designed with simplicity,
              speed and usability in mind. Whether
              you're a student, developer, writer or
              professional, our tools help you work
              with text efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}