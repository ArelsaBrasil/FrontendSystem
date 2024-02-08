import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { CheckBoxSection, ReasonContainer } from "./styles";

const labels = [
  "Lâmpada quebrada",
  "Lâmpada queimada",
  "Relé",
  "Chave de comando",
  "Luminaria queimada",
  "Luminaria Danificada",
  "Ponto novo",
  "Modernização",
  "Conexão",
];

export function Reason() {
  return (
    <ReasonContainer>
      <h4>Motivo</h4>

      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">Motivo</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={selectedServiceOptions}
          // onChange={handleSelectedServiceOptions}
          label="Age"
        >
          {labels.map((label) => (
            <MenuItem value={label}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <CheckBoxSection>
        <FormGroup>{/* Checkbox components removed */}</FormGroup>
      </CheckBoxSection>
    </ReasonContainer>
  );
}
