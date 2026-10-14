"use client";

import { useState } from "react";
import Image from "next/image";

const Input = ({ label, type, placeholder, value, onChange, error, pwd }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="input-wrap">
      {label && <label className="text-lg-regular">{label}</label>}
      <div className="input-inner">
        <input
          className="input-field text-lg-regular"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {pwd && (
          <button
            type="button"
            className="password-toggle"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <Image
              src={
                passwordVisible
                  ? "/images/icons/pwd-visibility-on.svg"
                  : "/images/icons/pwd-visibility-off.svg"
              }
              alt="비밀번호 표시"
              width={24}
              height={24}
            />
          </button>
        )}

        {error && <span className="input-error">{error}</span>}
      </div>
    </div>
  );
};

export default Input;
