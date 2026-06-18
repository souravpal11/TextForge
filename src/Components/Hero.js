import React from "react";
import "./../styles/Hero.css";
// import { FaArrowRight, FaRocket } from "react-icons/fa";

export default function Hero(props) {

  const scrollToEditor = () => {
    document.getElementById("editor").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className={`hero ${props.mode}`}>

      <div className="hero-container">

<div className="hero-left">

<span className="badge-custom">

🚀 Smart Text Utilities

</span>

<h1>

Transform Your

<span> Text Instantly</span>

</h1>

<p>

Edit, clean, analyze and convert text in seconds.
Designed for developers, students and professionals.

</p>

<div className="hero-buttons">

<button
className="btn-primary-custom"
onClick={scrollToEditor}
>

Start Writing

</button>

<button
className="btn-secondary-custom"
>

Explore Tools

</button>

</div>

<div className="hero-features">

<div>⚡ Fast</div>

<div>🔒 Privacy First</div>

<div>🎁 Free Forever</div>

</div>

</div>

<div className="hero-right">

<div className="hero-window">

<div className="window-top">

<span></span>

<span></span>

<span></span>

</div>

<div className="window-content">

<div className="mock-toolbar">

<span>✏ Text Editor</span>

<div>

<button>Aa</button>

<button>⇄</button>

<button>🔍</button>

<button>📋</button>

</div>

</div>

<div className="mock-editor">

<div className="line">
<span className="keyword">Hello</span> World!
</div>

<div className="line">
<span className="function">camelCase</span>()
</div>

<div className="line">
<span className="email">
john@example.com
</span>
</div>

<div className="line">
<span className="url">
https://textforge.app
</span>
</div>

<div className="line">
Uppercase → LOWERCASE
</div>

<div className="cursor"></div>

</div>

</div>

</div>

</div>

</div>


    </section>
  );
}