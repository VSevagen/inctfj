import React from 'react';
import Base from "../src/components/shared/Base";

import LandingHeader from "../src/components/landing/Header";
import LandingSponsorship from "../src/components/landing/Sponsorship";
import LandingTestimonials from "../src/components/landing/Testimonials";
import LandingOrganizers from "../src/components/landing/Organizers";
import LandingReasonsToParticipate from "../src/components/landing/WhyParticipate";
import CTAReg from "../src/components/landing/CTAReg";
import LandingQuickInfo from "../src/components/landing/QuickInfo";
import LandingAboutInCTF from "../src/components/landing/About";
import LandingStatsBar from "../src/components/landing/StatsCounter";
import LandingHowItWorks from "../src/components/landing/HowItWorks";
import LandingContactsBar from "../src/components/landing/ContactsBar";
import TopBar from "../src/components/shared/TopBar";
import LandingJoinDiscussion from "../src/components/landing/JoinDiscussions";
import SponsorBar from "../src/components/landing/SponsorBar";
import CTAPartners from "../src/components/landing/CTAPartners";
// import Schedule from "../src/components/landing/Schedule";

const LandingPage = () => {

    return <Base>
        <div style={{ overflowX: 'hidden' }} id="landing-page">
            <TopBar darkenOnSidebar includeSpace={false} />
            <LandingHeader />
            <LandingQuickInfo />
            <LandingAboutInCTF />
            <SponsorBar />
            {/*<Schedule />*/}
            <LandingTestimonials />
            <LandingHowItWorks />
            <LandingJoinDiscussion />
            <LandingReasonsToParticipate />
            <CTAReg />
            <LandingSponsorship />
            <CTAPartners />
            <LandingStatsBar />
            <LandingOrganizers />
            <LandingContactsBar />
        </div>
    </Base>

};

export default LandingPage;