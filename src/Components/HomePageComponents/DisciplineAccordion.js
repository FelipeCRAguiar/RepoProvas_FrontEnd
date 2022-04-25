import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import CategoryItem from "./CategoryItem";


export default function DisciplineAccordion() {

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>CSS</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <CategoryItem />
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}