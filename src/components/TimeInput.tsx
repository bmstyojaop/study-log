import React, { ChangeEventHandler, useCallback, useState } from "react";

export const TimeInput = () => {
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const handleHour: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (parseInt(e.target.value) > parseInt(e.target.max) || e.target.value.length > 2) {
      setHour("");
      return;
    }
    setHour(e.target.value.trim());
  }, []);
  const handleMinute: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    if (parseInt(e.target.value) > parseInt(e.target.max) || e.target.value.length > 2) {
      setMinute("");
      return;
    }
    setMinute(e.target.value.trim());
  }, []);

  return (
    <div className="mb-6">
      <label htmlFor="hour" className="mb-2 block text-sm font-medium text-gray-900">
        学習時間
        <span className="text-gray-500 px-1">(時間：分)</span>
      </label>
      <div className="h-10 block w-full rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 shadow-sm px-2.5">
        <div className="w-full h-full flex items-center">
          <input
            type="number"
            inputMode="numeric"
            id="hour"
            min="0"
            max="99"
            placeholder="00"
            className="w-8 outline-none bg-gray-50 text-center"
            onChange={handleHour}
            value={hour}
            // onFocus={inputBlue}
          />
          <span className="px-1">:</span>
          <input
            type="number"
            inputMode="numeric"
            id="minute"
            min="0"
            max="99"
            placeholder="00"
            className="w-8 outline-none bg-gray-50 text-center"
            onChange={handleMinute}
            value={minute}
          />
        </div>
      </div>
    </div>
  );
};
