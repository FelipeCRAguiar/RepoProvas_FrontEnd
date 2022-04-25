import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";


export default function Selector() {
  const [selected, setSelected] = useState("DISCIPLINAS")

  const handleChange = (event, newSelected) => {
    setSelected(newSelected)
  }

  return(
    <ToggleButtonGroup color="primary" value={selected} exclusive fullWidth={true} onChange={handleChange}>
      <ToggleButton value="DISCIPLINAS">DISCIPLINAS</ToggleButton>
      <ToggleButton value="PESSOA INSTRUTORA">PESSOA INSTRUTORA</ToggleButton>
      <ToggleButton value="ADICIONAR">ADICIONAR</ToggleButton>
    </ToggleButtonGroup>
  )
}