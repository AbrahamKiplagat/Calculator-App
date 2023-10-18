import React from 'react';
import './ParentComponent.css'; // Import your custom CSS file for styling

function ParentComponent() {
  return (
    //you can create sections, forms, div, span,etc as html and css...
    <div className="parent">
      <div className="child1">Child 1</div>
      <div className="child2">Child 2</div>
      <div className="child3">Child 3</div>
    </div>
    
  );
}

export default ParentComponent;