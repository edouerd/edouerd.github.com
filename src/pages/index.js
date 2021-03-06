import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styling from "styled-components";

import Bio from "../components/Bio";
import Bio2 from "../components/Bio2";
import WorksShort from "../components/WorksShort";
import More from "../components/More";
import Context from "../components/Context";

class Front extends React.Component {
  render() {
    const siteTitle = "Édouard U.";

    return (
      <section>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{`${siteTitle}`}</title>
          <meta name="description" content="No brand, quality interfaces." />
          <link rel="canonical" href="http://edouard.us/" />
          <meta property="og:title" content="Édouard U." />
          <meta property="og:locale" content="en_US" />
          <meta
            property="og:description"
            content="No brand, quality interfaces."
          />
          <meta property="og:url" content="http://edouard.us/" />
          <meta property="og:site_name" content="Édouard U." />
        </Helmet>
<<<<<<< HEAD
        {/* <Bio2 /> */}
        <Bio />
        <WorksShort />
        <More />
        <Context />
=======
        <Bio2 />
        {/* <Bio /> */}
        {/* <WorksShort /> */}
        {/* <More /> */}
        {/* <Context /> */}
>>>>>>> parent of ad60f12... old menu revival
      </section>
    );
  }
}

export default Front;
