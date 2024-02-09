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

export function Solution() {
  return (
    <ReasonContainer>
      <h4>Solução</h4>
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-standard-label">
          Luminária
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={selectedServiceOptions}
          // onChange={handleSelectedServiceOptions}
          label="Age"
        >
          <MenuItem value={"Luminária completa"}>Luminária completa</MenuItem>
          <MenuItem value={"Luminária 35W"}>Luminária 35W</MenuItem>
          <MenuItem value={"Luminária 55W"}>Luminária 55W</MenuItem>
          <MenuItem value={"Luminária 80W"}>Luminária 80W</MenuItem>
          <MenuItem value={"Luminária 120W"}>Luminária 120W</MenuItem>
          <MenuItem value={"Luminária 180W"}>Luminária 180W</MenuItem>
          <MenuItem value={"Luminária LED 35W"}>Luminária LED 35W</MenuItem>
          <MenuItem value={"Luminária LED 55W"}>Luminária LED 55W</MenuItem>
          <MenuItem value={"Luminária LED 80W"}>Luminária LED 80W</MenuItem>
          <MenuItem value={"Luminária LED 120W"}>Luminária LED 120W</MenuItem>
          <MenuItem value={"Luminária LED 180W"}>Luminária LED 180W</MenuItem>
          <MenuItem value={"Luminária LED 30W"}>Luminária LED 30W</MenuItem>
        </Select>
      </FormControl>
      <CheckBoxSection>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Relé NF" />
          <FormControlLabel control={<Checkbox />} label="Relé NA" />
          <FormControlLabel control={<Checkbox />} label="Base para relé" />
          <FormControlLabel control={<Checkbox />} label="Lâmpada 30W" />
          <FormControlLabel control={<Checkbox />} label="Lâmpada 75W" />
          <FormControlLabel control={<Checkbox />} label="Fuzível" />
          <FormControlLabel control={<Checkbox />} label="Disjuntor" />
          <FormControlLabel control={<Checkbox />} label="Religação" />
          <FormControlLabel control={<Checkbox />} label="Conector" />
          <FormControlLabel control={<Checkbox />} label="Disjuntor" />
          <FormControlLabel
            control={<Checkbox />}
            label="Implantação de Poste"
          />
        </FormGroup>
      </CheckBoxSection>
    </ReasonContainer>
  );
}
