import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionItemProps = {
  title: string;
  subtitle?: string;
  content: string;
  panel: string;
  expanded: string | false;
  handleChange: (
    panel: string,
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

const AccordionItem = ({
  title,
  subtitle,
  content,
  panel,
  expanded,
  handleChange,
}: AccordionItemProps) => (
  <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${panel}-content`}
      id={`${panel}-header`}
    >
      <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
      {subtitle && (
        <Typography sx={{ color: "text.secondary" }}>{subtitle}</Typography>
      )}
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography>
    </AccordionDetails>
  </Accordion>
);

export default AccordionItem;
