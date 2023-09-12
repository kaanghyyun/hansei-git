import React from "react";
import { useState } from "react";
import { StyledButton } from "./StyledButton";

interface Props{
    label: string;
    onClick: () => void;
}

function Button({label, onClick}:Props){
  return(
    <StyledButton onClick={onClick}>
        {label}
    </StyledButton>
  )
}

export default Button;