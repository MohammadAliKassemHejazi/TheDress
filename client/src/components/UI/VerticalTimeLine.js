import React from "react";
import styles from "./VerticalTimeLine.module.css";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

function VerticalTimeLine(props) {
  return (
    <VerticalTimeline
      className={`${styles.opacity}  p-5 border border-white border-1 rounded `}
      lineColor="#999"
    >
      {props.Experience &&
        props.Experience.map((n) => (
          <VerticalTimelineElement
            key={n.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(21, 24, 31)",
              color: "#888",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(21, 24, 31)",
            }}
            date={n.date}
            iconStyle={{
              background: "rgb(21, 24, 31)",
              color: "#888",
            }}
            icon={n.iconsSrc}
          >
            <h3 className="vertical-timeline-element-title">{n.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{n.location}</h4>
            <p>{n.description}</p>
          </VerticalTimelineElement>
        ))}
    </VerticalTimeline>
  );
}

export default VerticalTimeLine;
