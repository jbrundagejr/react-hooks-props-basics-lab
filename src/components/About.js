import React from "react"
import Links from "./Links"

function About(props) {
  const hasBio = props.bio
  if (hasBio) {
    return (
      <div id="about">
        <h2>About Me</h2>
          <p>{props.bio}</p>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github="http://github.com/lisa" linkedin="https://www.linkedin.com/in/liza" />
      </div>
    )
  }
  return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github="http://github.com/lisa" linkedin="https://www.linkedin.com/in/liza" />
      </div>
  )
}


export default About