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
// import React, { useState } from "react";

// export default function TextForm(prop) {

//   const [text, setText] = useState("Enter text here");

//   // ================= BASIC OPERATIONS =================

//   const handleUpClick = () => {
//     setText(text.toUpperCase());
//     prop.showAlert("Converted to uppercase!","success");
//   };

//   const handleLoClick = () => {
//     setText(text.toLowerCase());
//     prop.showAlert("Converted to lowercase!","success");
//   };

//   const capitalizeWords = () => {
//     let newText = text
//       .split(" ")
//       .map(
//         (word) =>
//           word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//       )
//       .join(" ");

//     setText(newText);
//     prop.showAlert("Words capitalized!","success");
//   };

//   const handleClrClick = () => {
//     setText("");
//     prop.showAlert("Text cleared!","success");
//   };

//   const handleOnChange = (event) => {
//     setText(event.target.value);

//   };

//   // ================= TEXT UTILITIES =================

//   const removeExtraSpaces = () => {
//     setText(text.replace(/\s+/g, " ").trim());
//     prop.showAlert("Extra spaces removed!","success");
//   };

//   const reverseText = () => {
//     setText(text.split("").reverse().join(""));
//     prop.showAlert("Text reversed!","success");
//   };

//   const removeDuplicateWords = () => {
//     setText([...new Set(text.split(" "))].join(" "));
//     prop.showAlert("Duplicate words removed!","success");
//   };

//   const sortWords = () => {
//     setText(text.split(" ").sort().join(" "));
//     prop.showAlert("Words sorted!","success");
//   };

//   const removeSpecialChars = () => {
//     setText(text.replace(/[^a-zA-Z0-9\s]/g, ""));
//     prop.showAlert("Special characters removed!","success");
//   };

//   const removeNumbers = () => {
//     setText(text.replace(/[0-9]/g, ""));
//     prop.showAlert("Numbers removed!","success");
//   };

//   const extractEmails = () => {
//     const emails = text.match(
//       /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi
//     );

//     setText(emails ? emails.join("\n") : "No emails found");
//     prop.showAlert("Emails extracted!","success");
//   };

//   const extractURLs = () => {
//     const urls = text.match(/https?:\/\/[^\s]+/g);

//     setText(urls ? urls.join("\n") : "No URLs found");
//     prop.showAlert("URLs extracted!","success");
//   };

//   const textToSlug = () => {
//     setText(
//       text
//         .toLowerCase()
//         .trim()
//         .replace(/\s+/g, "-")
//         .replace(/[^\w-]/g, "")
//     );
//     prop.showAlert("Text converted to slug!","success");
//   };

//   const toCamelCase = () => {
//     const newText = text
//       .toLowerCase()
//       .split(" ")
//       .map((word, index) =>
//         index === 0
//           ? word
//           : word.charAt(0).toUpperCase() + word.slice(1)
//       )
//       .join("");

//     setText(newText);
//     prop.showAlert("Text converted to camelCase!","success");
//   };

//   const toSnakeCase = () => {
//     setText(text.toLowerCase().trim().replace(/\s+/g, "_"));
//     prop.showAlert("Text converted to snake_case!","success");
//   };

//   const toKebabCase = () => {
//     setText(text.toLowerCase().trim().replace(/\s+/g, "-"));
//     prop.showAlert("Text converted to kebab-case!","success");
//   };

//   const copyText = async () => {
//     await navigator.clipboard.writeText(text);
//     prop.showAlert("Text copied to clipboard!","success");
//   };

//   // ================= SUMMARY =================

//   const wordCount =
//     text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

//   const sentenceCount =
//     text.trim() === ""
//       ? 0
//       : text.split(/[.!?]+/).filter(Boolean).length;

//   return (
//     <>
//       <div className="container" style={{ color: prop.mode === "dark" ? "#fff" : "#000" }}>

//         <h3>{prop.heading}</h3>

//         <div className="mb-3">
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleOnChange}
//             style={{ backgroundColor: prop.mode === "dark" ? "#232336" : "#fff", color: prop.mode === "dark" ? "#fff" : "#000" }}  
//             id="myBox"
//             rows="8"
//           ></textarea>
//         </div>

//         {/* ================= BUTTONS ================= */}

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={handleUpClick}
//         >
//           Convert to UPPERCASE
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={handleLoClick}
//         >
//           Convert to lowercase
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={capitalizeWords}
//         >
//           Capitalize Each Word
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={removeExtraSpaces}
//         >
//           Remove Extra Spaces
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={reverseText}
//         >
//           Reverse Text
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={removeDuplicateWords}
//         >
//           Remove Duplicate Words
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={sortWords}
//         >
//           Sort Words Alphabetically
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={removeSpecialChars}
//         >
//           Remove Special Characters
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={removeNumbers}
//         >
//           Remove Numbers
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={extractEmails}
//         >
//           Extract Emails
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={extractURLs}
//         >
//           Extract URLs
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={textToSlug}
//         >
//           Convert to Slug
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={toCamelCase}
//         >
//           Convert to camelCase
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={toSnakeCase}
//         >
//           Convert to snake_case
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={toKebabCase}
//         >
//           Convert to kebab-case
//         </button>

//         <button
//           className="btn btn-primary mx-2 my-1"
//           onClick={copyText}
//         >
//           Copy Text
//         </button>

//         <button
//           className="btn btn-danger mx-2 my-1"
//           onClick={handleClrClick}
//         >
//           Clear Text
//         </button>
//       </div>

//       {/* ================= SUMMARY SECTION ================= */}

//       <div className="container my-4" style={{ color: prop.mode === "dark" ? "#fff" : "#000" }}>

//         <h2>Your Text Summary</h2>

//         <p>
//           <strong>{wordCount}</strong> words and{" "}
//           <strong>{text.length}</strong> characters
//         </p>

//         <p>
//           <strong>{sentenceCount}</strong> sentences
//         </p>

//         <p>
//           <strong>{(0.008 * wordCount).toFixed(2)}</strong> Minutes read
//         </p>

//         <h2>Preview</h2>

//         <p>
//           {text.length > 0
//             ? text
//             : "Enter something in the textbox above to preview it here"}
//         </p>
//       </div>
//     </>
//   );
// }

import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "../styles/TextForm.css";

import {
  FaArrowUp,
  FaArrowDown,
  FaMagic,
  FaTrash,
  FaCopy,
  FaUndo,
  FaSortAlphaDown,
  FaEnvelope,
  FaLink,
  FaCode,
  FaPaste,
  FaCut,
  FaDownload,
  FaRedo
} from "react-icons/fa";

export default function TextForm(prop) {

  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [redoHistory, setRedoHistory] = useState([]);
  const textRef = useRef(null);

  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState(""); 

  useEffect(()=>{
  const saved=localStorage.getItem("textforge");
  if(saved){
  setText(saved);
  }
  },[]);

  useEffect(()=>{
  localStorage.setItem("textforge",text);
  },[text]);

  const importText=(event)=>{
  const file=event.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=(e)=>{
  setText(e.target.result);
  prop.showAlert("File Imported","success");
  };
  reader.readAsText(file);
  };

  const speakText=()=>{
  const speech=new SpeechSynthesisUtterance(text);
  speech.lang="en-US";
  window.speechSynthesis.speak(speech);
  };

  const stopSpeaking=()=>{
  window.speechSynthesis.cancel();
  };

  // ==========================
  // Basic Operations
  // ==========================

  const handleOnChange = (e) => {
  setHistory(prev => [...prev, text]);
  setRedoHistory([]);
  setText(e.target.value);
  };

  const undoText = () => {
    if (history.length > 0) {
      const prevText = history[history.length - 1];
      setRedoHistory(prev => [...prev, text]);
      setHistory(prev => prev.slice(0, -1));
      setText(prevText);
    }
  };

  const redoText = () => {
    if (redoHistory.length > 0) {
      const nextText = redoHistory[redoHistory.length - 1];
      setHistory(prev => [...prev, text]);
      setRedoHistory(prev => prev.slice(0, -1));
      setText(nextText);
    }
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    prop.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    prop.showAlert("Converted to Lowercase", "success");
  };

  const capitalizeWords = () => {
    const newText = text
      .split(" ")
      .map(
        word =>
          word.charAt(0).toUpperCase() +
          word.slice(1).toLowerCase()
      )
      .join(" ");

    setText(newText);

    prop.showAlert("Capitalized", "success");
  };

  const handleClrClick = () => {
    setText("");
    prop.showAlert("Text Cleared", "success");
  };

  // ==========================
  // Text Utilities
  // ==========================

  const removeExtraSpaces = () => {

    const newText = text.replace(/\s+/g, " ").trim();

    setText(newText);

    prop.showAlert("Extra Spaces Removed", "success");

  };

  const reverseText = () => {

    setText(text.split("").reverse().join(""));

    prop.showAlert("Text Reversed", "success");

  };

  const removeDuplicateWords = () => {

    const newText =
      [...new Set(text.split(/\s+/))].join(" ");

    setText(newText);

    prop.showAlert("Duplicates Removed", "success");

  };

  const sortWords = () => {

    const newText =
      text
      .split(/\s+/)
      .sort((a,b)=>a.localeCompare(b))
      .join(" ");

    setText(newText);

    prop.showAlert("Sorted", "success");

  };

  const removeSpecialChars = () => {

    const newText =
      text.replace(/[^a-zA-Z0-9\s]/g,"");

    setText(newText);

    prop.showAlert("Special Characters Removed","success");

  };

  const removeNumbers = () => {

    const newText =
      text.replace(/[0-9]/g,"");

    setText(newText);

    prop.showAlert("Numbers Removed","success");

  };
    const extractEmails = () => {

    const emails = text.match(
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}/g
    );

    setText(emails ? emails.join("\n") : "No emails found");

    prop.showAlert("Emails Extracted","success");

  };

  const extractURLs = () => {

    const urls = text.match(/https?:\/\/[^\s]+/g);

    setText(urls ? urls.join("\n") : "No URLs Found");

    prop.showAlert("URLs Extracted","success");

  };

  const textToSlug = () => {

    const newText =
      text
        .toLowerCase()
        .trim()
        .replace(/\s+/g,"-")
        .replace(/[^\w-]/g,"");

    setText(newText);

    prop.showAlert("Slug Generated","success");

  };

  const toCamelCase = () => {

    const newText =
      text
        .toLowerCase()
        .split(" ")
        .map((word,index)=>

          index===0

          ? word

          : word.charAt(0).toUpperCase()+word.slice(1)

        )
        .join("");

    setText(newText);

    prop.showAlert("camelCase Generated","success");

  };

  const toSnakeCase = () => {

    setText(

      text

      .toLowerCase()

      .trim()

      .replace(/\s+/g,"_")

    );

    prop.showAlert("snake_case Generated","success");

  };

  const toKebabCase = () => {

    setText(

      text

      .toLowerCase()

      .trim()

      .replace(/\s+/g,"-")

    );

    prop.showAlert("kebab-case Generated","success");

  };

  const selectAll = () => {
  textRef.current.select();
  prop.showAlert("All text selected!", "success");
  };

  const cutText = async () => {
  try {
    await navigator.clipboard.writeText(text);
    setText("");
    prop.showAlert("Text cut successfully!", "success");
  } catch (err) {
    prop.showAlert("Unable to cut text!", "error");
  }
  };

  const copyText = async () => {

    await navigator.clipboard.writeText(text);

    prop.showAlert("Copied Successfully","success");

  };

  const pasteText = async () => {
  try {
    const clipboardText = await navigator.clipboard.readText();
    setText(clipboardText);
    prop.showAlert("Text pasted successfully!", "success");
  } catch (err) {
    prop.showAlert("Clipboard access denied!", "error");
  }
  };

  const downloadText = () => {

    const element = document.createElement("a");

    const file = new Blob([text],{

      type:"text/plain"

    });

    element.href = URL.createObjectURL(file);

    element.download = "TextForge.txt";

    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);

    prop.showAlert("Downloaded","success");

  };

  const findWord = () => {

  if (findText.trim() === "") {
    prop.showAlert("Enter text to find", "error");
    return;
  }

  if (text.includes(findText)) {

    prop.showAlert("Text Found", "success");

  } else {

    prop.showAlert("Text Not Found", "error");

  }

};

const replaceFirst = () => {

  if (findText === "") return;

  const newText = text.replace(findText, replaceText);

  setText(newText);

  prop.showAlert("First occurrence replaced", "success");

};

const replaceAll = () => {

  if (findText === "") return;

  const escaped = findText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(escaped, "g");

  setText(text.replace(regex, replaceText));

  prop.showAlert("All occurrences replaced", "success");

};

  const words =
    text.trim()===""
    ?0
    :text.trim().split(/\s+/).length;

    const characters=text.length;

    const lines=
    text===""
    ?0
    :text.split("\n").length;

    const readingTime=(words*0.008).toFixed(2);

  return (
  <div
    id="editor"
    className={`textforge-container ${prop.mode}`}
    style={{
      color: prop.mode === "dark" ? "#fff" : "#111"
    }}
  >
    <div className="editor-wrapper">

      {/* Header */}

      <div className="editor-header">

        <h2>✍ {prop.heading}</h2>

        <p>
          Powerful text utilities for developers, students and professionals.
        </p>

      </div>

      {/* Textarea */}

      <textarea
        ref={textRef}
        className={`editor-box ${prop.mode}`}
        rows="12"
        value={text}
        onChange={handleOnChange}
        placeholder="Start typing here..."
      ></textarea>

      {/* Progress */}

      <div className="progress-container">

        <div
          className="progress-fill"
          style={{
            width: `${Math.min((characters / 5000) * 100, 100)}%`
          }}
        ></div>

      </div>

      <p className="progress-text">

        {characters} / 5000 Characters

      </p>
      <div className="Speakbuttons">
      <button onClick={speakText} className="speak-btn">
      🔊 Speak
      </button>
      <button onClick={stopSpeaking} className="speak-btn">
      ⏹ Stop
      </button>
      
      <label className="upload-btn">
        📂 Import TXT
        <input
        type="file"
        accept=".txt"
        hidden
        onChange={importText}
        />
      </label>
      </div>


      {/* ================= CASE CONVERSION ================= */}
      <div className="find-card">

        <h3 className="tool-title">

        🔍 Find & Replace

        </h3>

        <div className="find-grid">

        <input

        type="text"

        placeholder="Find"

        value={findText}

        onChange={(e)=>setFindText(e.target.value)}

        />

        <input

        type="text"

        placeholder="Replace With"

        value={replaceText}

        onChange={(e)=>setReplaceText(e.target.value)}

        />

        </div>

        <div className="tool-grid">

        <button onClick={findWord}>

        Find

        </button>

        <button onClick={replaceFirst}>

        Replace

        </button>

        <button onClick={replaceAll}>

        Replace All

        </button>

        </div>

        </div>
      <div className="tool-card" id = "case">
        <h3 className="tool-title">
          🔤 Case Conversion
        </h3>

        <div className="tool-grid">

          <button onClick={handleUpClick}>
            <FaArrowUp />
            Uppercase
          </button>

          <button onClick={handleLoClick}>
            <FaArrowDown />
            Lowercase
          </button>

          <button onClick={capitalizeWords}>
            <FaMagic />
            Capitalize
          </button>

          <button onClick={toCamelCase}>
            <FaCode />
            camelCase
          </button>

          <button onClick={toSnakeCase}>
            snake_case
          </button>

          <button onClick={toKebabCase}>
            kebab-case
          </button>

        </div>

      </div>

      {/* ================= CLEANING ================= */}

      <div className="tool-card" id="clean">

        <h3 className="tool-title">
          🧹 Text Cleaning
        </h3>

        <div className="tool-grid">

          <button onClick={removeExtraSpaces}>
            Remove Spaces
          </button>

          <button onClick={removeDuplicateWords}>
            Remove Duplicates
          </button>

          <button onClick={sortWords}>
            <FaSortAlphaDown />
            Sort Words
          </button>

          <button onClick={removeSpecialChars}>
            Special Characters
          </button>

          <button onClick={removeNumbers}>
            Remove Numbers
          </button>

          <button onClick={reverseText}>
            <FaUndo />
            Reverse
          </button>

        </div>

      </div>

      {/* ================= EXTRACTION ================= */}

      <div className="tool-card" id="extract">

        <h3 className="tool-title">
          📧 Extraction
        </h3>

        <div className="tool-grid">

          <button onClick={extractEmails}>
            <FaEnvelope />
            Emails
          </button>

          <button onClick={extractURLs}>
            <FaLink />
            URLs
          </button>

          <button onClick={textToSlug}>
            Slug Generator
          </button>

        </div>

      </div>

      {/* ================= CLIPBOARD ================= */}

      <div className="tool-card" id="clipboard">

        <h3 className="tool-title">
          📋 Clipboard
        </h3>

        <div className="tool-grid">

          <button onClick={undoText}>
          <FaUndo/>
          Undo
          </button>

          <button onClick={redoText}>
          <FaRedo/>
          Redo
          </button>
          
          <button onClick={selectAll}>
            📑 Select All
          </button>

          <button onClick={cutText}>
            <FaCut />
            Cut
          </button>

          <button onClick={copyText}>
            <FaCopy />
            Copy
          </button>

          <button onClick={pasteText}>
            <FaPaste />
            Paste
          </button>

          <button onClick={downloadText}>
            <FaDownload />
            Download
          </button>

          <button
            className="danger"
            onClick={handleClrClick}
          >
            <FaTrash />
            Clear
          </button>

        </div>

      </div>
         {/* ================= Statistics ================= */}

      <div className="stats-section" id="stats">

        <div className="stat-card">
          <h2>{words}</h2>
          <span>Words</span>
        </div>

        <div className="stat-card">
          <h2>{characters}</h2>
          <span>Characters</span>
        </div>

        <div className="stat-card">
          <h2>{lines}</h2>
          <span>Lines</span>
        </div>

        <div className="stat-card">
          <h2>{readingTime}</h2>
          <span>Minutes Read</span>
        </div>

      </div>

      {/* ================= Preview ================= */}

      <div className="preview-card">

        <h3>📄 Live Preview</h3>

        {text.length === 0 ? (

          <p className="empty">
            Start typing to see preview...
          </p>

        ) : (

          <p className="preview-text">
            {text}
          </p>

        )}

      </div>
      

    </div>
  </div>
);

}
