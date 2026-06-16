// import React,{useState} from 'react'


// export default function TextForm(prop) {
//     const handleUpClick = ()=>{
//         //console.log("Uppercase was clicked" + text);
//         let newText = text.toUpperCase();
//         setText(newText);
//     }
//     const handleLoClick = ()=>{
//         //console.log("Uppercase was clicked" + text);
//         let newText = text.toLowerCase();
//         setText(newText);
//     }
//        const handleOnChange = (event)=>{
//         console.log("On change");
//         setText(event.target.value);
//     }
//     const capitalizeWords = () => {
//         let newText = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
//         setText(newText);
//     }

//      const handleClrClick = ()=>{
//         let newText = "";
//         setText(newText);
//     }

// // // 3. Capitalize Each Word
// // const capitalizeWords = (text) => {
// //   return text
// //     .split(" ")
// //     .map(
// //       (word) =>
// //         word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
// //     )
// //     .join(" ");
// // };

// // 4. Remove Extra Spaces
// const removeExtraSpaces = (text) => {
//   return text.replace(/\s+/g, " ").trim();
// };

// // 5. Reverse Text
// const reverseText = (text) => {
//   return text.split("").reverse().join("");
// };

// // 8. Sentence Count
// const sentenceCount = (text) => {
//   return text.split(/[.!?]+/).filter(Boolean).length;
// };

// // 10. Remove Duplicate Words
// const removeDuplicateWords = (text) => {
//   return [...new Set(text.split(" "))].join(" ");
// };

// // 11. Sort Words Alphabetically
// const sortWords = (text) => {
//   return text.split(" ").sort().join(" ");
// };

// // 12. Remove Special Characters
// const removeSpecialChars = (text) => {
//   return text.replace(/[^a-zA-Z0-9\s]/g, "");
// };

// // 13. Remove Numbers
// const removeNumbers = (text) => {
//   return text.replace(/[0-9]/g, "");
// };

// // 14. Extract Emails
// const extractEmails = (text) => {
//   return text.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi);
// };

// // 15. Extract URLs
// const extractURLs = (text) => {
//   return text.match(/https?:\/\/[^\s]+/g);
// };

// // 16. Convert Text to Slug
// const textToSlug = (text) => {
//   return text
//     .toLowerCase()
//     .trim()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w-]/g, "");
// };

// // 17. camelCase
// const toCamelCase = (text) => {
//   return text
//     .toLowerCase()
//     .split(" ")
//     .map((word, index) =>
//       index === 0
//         ? word
//         : word.charAt(0).toUpperCase() + word.slice(1)
//     )
//     .join("");
// };

// // 18. snake_case
// const toSnakeCase = (text) => {
//   return text.toLowerCase().trim().replace(/\s+/g, "_");
// };

// // 19. kebab-case
// const toKebabCase = (text) => {
//   return text.toLowerCase().trim().replace(/\s+/g, "-");
// };

// // 20. Copy Text
// const copyText = async (text) => {
//   await navigator.clipboard.writeText(text);
//   alert("Copied to clipboard!");
// };
//     const [text, setText] = useState("Enter text here");
//     //text = "New text"; wrong way to change the state
//     //setText("New text"); correct way to change the state
//     return (
//     <>
//     <div>
//         <h3>{prop.heading}</h3>
//         <div className="mb-3">
//         <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
//         </div> 
//     <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
//      <button className="btn btn-primary" onClick={handleLoClick}>Convert to lowercase</button>
//      <button className="btn btn-primary mx-2" onClick={capitalizeWords}>Capitalize Each Words</button> 
//      <button className="btn btn-primary mx-2 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
//      <button className="btn btn-primary mx-2" onClick={reverseText}>Reverse the Text</button> 
//      <button className="btn btn-primary mx-2" onClick={removeDuplicateWords}>Remove Duplicate Words</button>  
//      <button className="btn btn-primary mx-2" onClick={sortWords}>Sort Words Alphabetically</button> 
//     <button className="btn btn-primary mx-2" onClick={removeSpecialChars}>Remove Special Characters</button>
//     <button className="btn btn-primary mx-2" onClick={removeNumbers}>Remove Numbers</button> 
//     <button className="btn btn-primary mx-2" onClick={extractEmails}>Extract Emails</button>
//     <button className="btn btn-primary mx-2" onClick={extractURLs}>Extract URLs</button>
//     <button className="btn btn-primary mx-2" onClick={textToSlug}>Convert Text to Slug</button>
//     <button className="btn btn-primary mx-2" onClick={toCamelCase}>Convert to camelCase</button>
//     <button className="btn btn-primary mx-2" onClick={toSnakeCase}>Convert to snake_case</button>
//     <button className="btn btn-primary mx-2" onClick={toKebabCase}>Convert to kebab-case</button>
//     <button className="btn btn-primary mx-2 my-1" onClick={() => copyText(text)}>Copy Text</button>  
//     <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button> 
          

//      </div> 
//      <div className="container my-3">
//         <h2>Your text summary</h2>
//         <p>{text.split(" ").length} words and {text.length} characters</p>
//         <p>{sentenceCount(text)} sentences</p>
//         <p>{0.008 * text.split(" ").length} Minutes read</p>
//         <h2>Preview</h2>
//         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
//      </div>     
//     </>
//   )
// }
import React, { useState } from "react";

export default function TextForm(prop) {

  const [text, setText] = useState("Enter text here");

  // ================= BASIC OPERATIONS =================

  const handleUpClick = () => {
    setText(text.toUpperCase());
    prop.showAlert("Converted to uppercase!","success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    prop.showAlert("Converted to lowercase!","success");
  };

  const capitalizeWords = () => {
    let newText = text
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ");

    setText(newText);
    prop.showAlert("Words capitalized!","success");
  };

  const handleClrClick = () => {
    setText("");
    prop.showAlert("Text cleared!","success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);

  };

  // ================= TEXT UTILITIES =================

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    prop.showAlert("Extra spaces removed!","success");
  };

  const reverseText = () => {
    setText(text.split("").reverse().join(""));
    prop.showAlert("Text reversed!","success");
  };

  const removeDuplicateWords = () => {
    setText([...new Set(text.split(" "))].join(" "));
    prop.showAlert("Duplicate words removed!","success");
  };

  const sortWords = () => {
    setText(text.split(" ").sort().join(" "));
    prop.showAlert("Words sorted!","success");
  };

  const removeSpecialChars = () => {
    setText(text.replace(/[^a-zA-Z0-9\s]/g, ""));
    prop.showAlert("Special characters removed!","success");
  };

  const removeNumbers = () => {
    setText(text.replace(/[0-9]/g, ""));
    prop.showAlert("Numbers removed!","success");
  };

  const extractEmails = () => {
    const emails = text.match(
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi
    );

    setText(emails ? emails.join("\n") : "No emails found");
    prop.showAlert("Emails extracted!","success");
  };

  const extractURLs = () => {
    const urls = text.match(/https?:\/\/[^\s]+/g);

    setText(urls ? urls.join("\n") : "No URLs found");
    prop.showAlert("URLs extracted!","success");
  };

  const textToSlug = () => {
    setText(
      text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "")
    );
    prop.showAlert("Text converted to slug!","success");
  };

  const toCamelCase = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word, index) =>
        index === 0
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");

    setText(newText);
    prop.showAlert("Text converted to camelCase!","success");
  };

  const toSnakeCase = () => {
    setText(text.toLowerCase().trim().replace(/\s+/g, "_"));
    prop.showAlert("Text converted to snake_case!","success");
  };

  const toKebabCase = () => {
    setText(text.toLowerCase().trim().replace(/\s+/g, "-"));
    prop.showAlert("Text converted to kebab-case!","success");
  };

  const copyText = async () => {
    await navigator.clipboard.writeText(text);
    prop.showAlert("Text copied to clipboard!","success");
  };

  // ================= SUMMARY =================

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  const sentenceCount =
    text.trim() === ""
      ? 0
      : text.split(/[.!?]+/).filter(Boolean).length;

  return (
    <>
      <div className="container" style={{ color: prop.mode === "dark" ? "#fff" : "#000" }}>

        <h3>{prop.heading}</h3>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: prop.mode === "dark" ? "#232336" : "#fff", color: prop.mode === "dark" ? "#fff" : "#000" }}  
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        {/* ================= BUTTONS ================= */}

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
        >
          Convert to UPPERCASE
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to lowercase
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={capitalizeWords}
        >
          Capitalize Each Word
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={removeExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={reverseText}
        >
          Reverse Text
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={removeDuplicateWords}
        >
          Remove Duplicate Words
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={sortWords}
        >
          Sort Words Alphabetically
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={removeSpecialChars}
        >
          Remove Special Characters
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={removeNumbers}
        >
          Remove Numbers
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={extractEmails}
        >
          Extract Emails
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={extractURLs}
        >
          Extract URLs
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={textToSlug}
        >
          Convert to Slug
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={toCamelCase}
        >
          Convert to camelCase
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={toSnakeCase}
        >
          Convert to snake_case
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={toKebabCase}
        >
          Convert to kebab-case
        </button>

        <button
          className="btn btn-primary mx-2 my-1"
          onClick={copyText}
        >
          Copy Text
        </button>

        <button
          className="btn btn-danger mx-2 my-1"
          onClick={handleClrClick}
        >
          Clear Text
        </button>
      </div>

      {/* ================= SUMMARY SECTION ================= */}

      <div className="container my-4" style={{ color: prop.mode === "dark" ? "#fff" : "#000" }}>

        <h2>Your Text Summary</h2>

        <p>
          <strong>{wordCount}</strong> words and{" "}
          <strong>{text.length}</strong> characters
        </p>

        <p>
          <strong>{sentenceCount}</strong> sentences
        </p>

        <p>
          <strong>{(0.008 * wordCount).toFixed(2)}</strong> Minutes read
        </p>

        <h2>Preview</h2>

        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
