import React from "react";

export const Spinner = (props) => {
  return (
    
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.message}</div>
      </div>
      
   
  );
};
