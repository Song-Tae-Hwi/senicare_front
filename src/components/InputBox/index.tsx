import React, { ChangeEvent } from 'react'
import './style.css';

interface Props {
  label: string;
  type: 'text' | 'password';
  placehorder: string;
  value: string; // 상태함수를 위한 변수
  message: string;
  messageError: boolean;
  buttonName?: string; //필수가 아닌 값 표현

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;

}

export default function InputBox({ label, type, placehorder, value, buttonName, message, messageError, onChange, onButtonClick }: Props) {

  return (
    <div className="input-box">
      <div className="label">{label}</div>
      <div className="input-area">
        <input value={value} type={type} placeholder={placehorder} onChange={onChange} />
        {buttonName && <div className={`input-button ${value ? 'active' : 'disable'}`} onClick={onButtonClick}>{buttonName}</div>}
      </div>
      <div className={`message ${messageError ? 'error' : 'primary'}`}>{message}</div>
    </div>
  )
}
