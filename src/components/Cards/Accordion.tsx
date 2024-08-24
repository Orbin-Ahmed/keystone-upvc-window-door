import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type AccordionItemProps = {
  title: string;
  content?: string;
  bulletList?: string[];
  endContent?: string;
  panel: string;
  expanded: string | false;
  handleChange: (
    panel: string,
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

const AccordionItem = ({
  title,
  content,
  bulletList,
  panel,
  expanded,
  handleChange,
}: AccordionItemProps) => (
  <Accordion
    expanded={expanded === panel}
    onChange={handleChange(panel)}
    className="w-full"
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${panel}-content`}
      id={`${panel}-header`}
    >
      <Typography className="font-bold">{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>{content}</Typography>
      {bulletList && (
        <ul className="list-decimal p-8 text-justify">
          {bulletList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </AccordionDetails>
  </Accordion>
);

export default AccordionItem;
