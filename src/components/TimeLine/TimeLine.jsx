import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Event } from "@mui/icons-material";
import { Typography } from "@mui/material";
import CurrencyBitcoinRoundedIcon from "@mui/icons-material/CurrencyBitcoinRounded";
import LanguageIcon from "@mui/icons-material/Language";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const TimeLine = () => {
  return (
    <div>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body1"
            color="text.secondary"
            fontFamily="Josefin Sans"
          >
            June'19 - April'23
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{backgroundColor: "blueviolet"}}>
              <Event />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" component="span" fontFamily="Josefin Sans">
              S.C.E.T.
            </Typography>
            <Typography variant="h6" fontFamily="Josefin Sans">
              Percuing my Bachelor's in I.T. Engineering.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body1"
            color="text.secondary"
            fontFamily="Josefin Sans"
          >
               Jan'22 - April'22
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: "red"}}>
              <LanguageIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" fontFamily="Josefin Sans" component="span">
              MERN Stack
            </Typography>
            <Typography variant="h6" fontFamily="Josefin Sans">
            Learning MERN stack Technology !
             </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body1"
            color="text.secondary"
            fontFamily="Josefin Sans"
          >
            May'22 - Continue
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{backgroundColor:"lightsalmon"}}>
              <CurrencyBitcoinRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" fontFamily="Josefin Sans" component="span">
              WEB 3.0
            </Typography>
            <Typography variant="h6" fontFamily="Josefin Sans">
             Jump into the blockchain technology, Solidity and Smart Contracts 
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body1"
            color="text.secondary"
            fontFamily="Josefin Sans"
          >
            July 1 - Now
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor:"blue"}} >
              <ManageAccountsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h4" fontFamily="Josefin Sans" component="span">
              C4C
            </Typography>
            <Typography variant="h6" fontFamily="Josefin Sans">
              Working on Employee Managment System !
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default TimeLine;
