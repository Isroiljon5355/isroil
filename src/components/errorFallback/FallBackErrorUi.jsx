import React from "react";

function FallBackErrorUi({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cum.</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}></button>
    </div>
  );
}

export default FallBackErrorUi;
