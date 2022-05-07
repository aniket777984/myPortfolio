import React from "react";
import Timeline from "@material-ui/lab/Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot/TimelineDot";
import { Event } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography/Typography";

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
      <Timeline position="alternate">
        {timelines.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
            {item.date.toString().split("T")[0]}
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>{item.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default TimeLine;
