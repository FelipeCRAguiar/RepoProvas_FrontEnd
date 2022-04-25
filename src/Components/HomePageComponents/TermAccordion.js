import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import DisciplineAccordion from "./DisciplineAccordion";


export default function TermAccordion() {

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>1° periodo</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <DisciplineAccordion />
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}