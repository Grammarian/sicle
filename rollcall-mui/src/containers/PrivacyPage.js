import React, { Component } from "react";
import { withStyles } from "material-ui";

import { Theme, Heading, SubHeading, BodyText } from "../basics";
import TitleBar from "../components/TitleBar";

const pageStyle = {
  container: {
    maxWidth: "640px",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "80px"
  }
};

const typography = {
  title: {
    fontWeight: "900",
    padding: "12px 0px"
  },
  subheading: {
    fontWeight: "700",
    padding: "12px 0px"
  },
  body2: {
    paddingBottom: "16px"
  }
};

class PrivacyPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Theme typography={typography}>
        <div className={classes.container}>
          <TitleBar>RollCall </TitleBar>
          <Heading>Privacy Policy</Heading>
          <BodyText>
            This following document sets forth the Privacy Policy for the Bright Ideas Software website,
            https://rollcallapp.net.
          </BodyText>

          <BodyText>
            Bright Ideas Software is committed to providing you with the best possible customer service experience.
            Bright Ideas Software is bound by the Privacy Act 1988 (Cth), which sets out a number of principles
            concerning the privacy of individuals.
          </BodyText>

          <SubHeading>Collection of your personal information</SubHeading>
          <BodyText>
            There are many aspects of the site which can be viewed without providing personal information, however, for
            access to future Bright Ideas Software customer support features you are required to submit personally
            identifiable information. This may include but not limited to a unique username and password, or provide
            sensitive information in the recovery of your lost password.
          </BodyText>

          <SubHeading>Sharing of your personal information</SubHeading>
          <BodyText>
            We may occasionally hire other companies to provide services on our behalf, including but not limited to
            handling customer support enquiries, processing transactions or customer freight shipping. Those companies
            will be permitted to obtain only the personal information they need to deliver the service. Bright Ideas
            Software takes reasonable steps to ensure that these organisations are bound by confidentiality and privacy
            obligations in relation to the protection of your personal information.
          </BodyText>

          <SubHeading>Use of your personal information</SubHeading>
          <BodyText>
            For each visitor to reach the site, we expressively collect the following non-personally identifiable
            information, including but not limited to browser type, version and language, operating system, pages viewed
            while browsing the Site, page access times and referring website address. This collected information is used
            solely internally for the purpose of gauging visitor traffic, trends and delivering personalized content to
            you while you are at this Site.
          </BodyText>

          <BodyText>
            From time to time, we may use customer information for new, unanticipated uses not previously disclosed in
            our privacy notice. If our information practices change at some time in the future we will use for these new
            purposes only, data collected from the time of the policy change forward will adhere to our updated
            practices.
          </BodyText>

          <SubHeading>Changes to this Privacy Policy</SubHeading>
          <BodyText>
            Bright Ideas Software reserves the right to make amendments to this Privacy Policy at any time. If you have
            objections to the Privacy Policy, you should not access or use the Site.
          </BodyText>

          <SubHeading>Accessing Your Personal Information</SubHeading>
          <BodyText>
            You have a right to access your personal information, subject to exceptions allowed by law. If you would
            like to do so, please let us know. You may be required to put your request in writing for security reasons.
            Bright Ideas Software reserves the right to charge a fee for searching for, and providing access to, your
            information on a per request basis.
          </BodyText>

          <SubHeading>Contacting us</SubHeading>
          <BodyText>
            Bright Ideas Software welcomes your comments regarding this Privacy Policy. If you have any questions about
            this Privacy Policy and would like further information, please contact us by any of the following means
            during business hours Monday to Friday.
          </BodyText>

          <BodyText>E-mail: privacy-policy@rollcallapp.net</BodyText>
        </div>
      </Theme>
    );
  }
}

export default withStyles(pageStyle)(PrivacyPage);
