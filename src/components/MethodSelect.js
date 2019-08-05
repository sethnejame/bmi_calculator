import React from "react";

function MethodSelect() {
  return (
    <>
      <label>Method</label>
          <div className="field">
            <select
              name="method"
              onChange={props.onChange}
              value={props.method}
            >
              <option value="1">Metric</option>
              <option value="2">Imperial</option>
            </select>
          </div>
    </>
  );
}

