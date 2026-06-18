import React from "react";
import "../styles/Setting.css";

export default function Settings({
    settings,
    setSettings
}){

const toggle=(key)=>{

setSettings({

...settings,

[key]:!settings[key]

});

};

return(

<div className="settings">

<h2>⚙ Settings</h2>

<label>




Auto Save

</label>

<label>

<input
type="checkbox"
checked={settings.rememberTheme}
onChange={()=>toggle("rememberTheme")}
/>

Remember Theme

</label>

<label>

<input
type="checkbox"
checked={settings.liveCount}
onChange={()=>toggle("liveCount")}
/>

Live Counter

</label>

<label>

<input
type="checkbox"
checked={settings.animations}
onChange={()=>toggle("animations")}
/>

Animations

</label>

</div>

);

}