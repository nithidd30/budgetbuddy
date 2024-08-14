// src/components/FAQ/FAQ.jsx
import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const faqData = [
  {
    question: 'What makes BudgetBuddy better than other personal finance apps?',
    answer: 'BudgetBuddy is a trusted partner for managing personal finances. With BudgetBuddy, you get a comprehensive toolset that combines simplicity with powerful features. Our app is designed to help you track spending, set financial goals, and grow your net worth with ease.',
  },
  {
    question: 'How secure is my data with BudgetBuddy?',
    answer: 'We prioritize your privacy and security. BudgetBuddy uses advanced encryption and security protocols to ensure your financial data is protected at all times.',
  },
  {
    question: 'What features does BudgetBuddy offer?',
    answer: 'BudgetBuddy offers a wide range of features including expense tracking, income management, budgeting tools, financial goal setting, and detailed reporting. Our app is customizable to fit your unique financial needs.',
  },
  {
    question: 'Is there a free trial for BudgetBuddy?',
    answer: 'Yes, BudgetBuddy offers a 30-day free trial so you can explore all the features and benefits before committing to a subscription. If you are not completely satisfied, you can cancel within the trial period without any charges.',
  },
];

const FAQContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const FAQTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  color: '#5129D6',
  fontWeight: 'bold',
}));

const FAQAccordion = styled(Accordion)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  border: '1px solid #ddd',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
}));

const FAQAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  fontWeight: 700,
}));

const FAQ = () => {
  return (
    <FAQContainer>
      <FAQTitle variant="h3">
        Frequently Asked Questions
      </FAQTitle>
      {faqData.map((item, index) => (
        <FAQAccordion key={index}>
          <FAQAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{item.question}</Typography>
          </FAQAccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.answer}
            </Typography>
          </AccordionDetails>
        </FAQAccordion>
      ))}
    </FAQContainer>
  );
};

export default FAQ;
