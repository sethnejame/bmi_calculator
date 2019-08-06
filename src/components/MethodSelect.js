import React from "react";

function MethodSelect(props) {
  return (
    <>
      <div>
      <label>Method</label>
        <select name="method" id="method" onChange={props.methodChange} value={props.method}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
    </>
  );
}

export default MethodSelect;
