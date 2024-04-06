import React from 'react'

export default function ControlledComponent() {
  return (
    <div>ControlledComponent</div>
  )
}


/**
 * controlled component => when we controlled the input fields using states and props called controlled component
 * un-controlled component => when we donot controlled the input fields using states and props called un-controlled component
 * un-controlled component => handle using useref()
 * when we access the DOM element using useref(), so we can directly manipulate the DOM (React doesnot recommended this approach)
 * 
 */