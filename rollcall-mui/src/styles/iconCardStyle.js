// ##############################
// // // StatsCard styles
// #############################

import {
  card,
  cardHeader,
  defaultFont,
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  cardActions,
  grayColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  primaryColor,
  roseColor
} from "./default";

const iconCardStyle = {
  card,
  cardHeader: {
    ...cardHeader,
    float: "left",
    textAlign: "center"
  },
  orangeCardHeader,
  greenCardHeader,
  redCardHeader,
  blueCardHeader,
  purpleCardHeader,
  cardContent: {},
  cardIcon: {
    width: "40px",
    height: "36px",
    fill: "#fff"
  },
  cardAvatar: {
    margin: "8px"
  },
  cardTop: {
    borderBottom: "rgba(0, 0, 0, 0.1) 1px solid"
  },
  cardTopFinish: {
    clear: "both",
    paddingTop: "8px"
  },
  cardTopContent: {
    padding: "12px 48px 0 0" // cardIcon width plus gap
  },
  cardBody: {},
  warningCardStatsIcon: {
    color: warningColor
  },
  primaryCardStatsIcon: {
    color: primaryColor
  },
  dangerCardStatsIcon: {
    color: dangerColor
  },
  successCardStatsIcon: {
    color: successColor
  },
  infoCardStatsIcon: {
    color: infoColor
  },
  roseCardStatsIcon: {
    color: roseColor
  },
  grayCardStatsIcon: {
    color: grayColor
  }
};

export default iconCardStyle;
