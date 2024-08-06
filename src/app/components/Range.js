import React, { useCallback } from 'react';
import { debounce } from 'lodash';

const Range = (props) => {
  const { value, setValue } = props;

  const debouncedSetValue = useCallback(
    debounce((newValue) => setValue(newValue), 100),
    []
  );

  const handleChange = (e) => {
    debouncedSetValue(e.target.value);
  };

  return (
    <>
      <label htmlFor="customRange" className="form-label">
        Filtro por peso:
      </label>
      <p>{value}</p>
      <input
        value={value}
        onChange={handleChange}
        type="range"
        className="form-range"
        id="customRange"
      />
    </>
  );
};

export default Range;
