import React from 'react';
import styled from "@emotion/styled";
import Fade from 'react-reveal/Fade';

const DiscussionPortals = styled.a`
    min-height: 30vmin;
    padding: 2.5vh 5vw;
    display: flex;
    align-items: center;
    text-align: center;
    color: white!important;
    text-decoration: none!important;
    div {
        display: flex;
        align-items: center;
        justify-content: left;
        text-align: left;
    }
    @media (min-width: 768px){
      justify-content: center;
      div {
          display: block!important;
          text-align: center;
      }
      h5 {
        display: none;
      }
    }
    img {
        height: 120px!important;
        filter: drop-shadow(2px 3px 8px rgba(0,0,0,0.3));
        margin: 5px auto;
    }
    &:hover {
      h5 {
        display: block;
      }
    }
`;

const DiscordDiscussion = styled(DiscussionPortals)`
    background: #7289DA;
`;

const TelegramDiscussion = styled(DiscussionPortals)`
    background: #0088cc ;
`;

const TwitterDiscussion = styled(DiscussionPortals)`
    background: #14171A ;
`;

const LandingJoinDiscussion = () => {

    return <div className="flex flex-wrap">
        <div className="md:w-1/2 w-full">
            <TwitterDiscussion href="https://twitter.com/InCTFj" rel="noopener noreferrer" target="_blank">
                <Fade left>
                    <div>
                        <img src={require('../../assets/images/logos/twitter.png')} alt="Follow us on Twitter<" />
                        <h5>Follow us on Twitter</h5>
                    </div>
                </Fade>
            </TwitterDiscussion>
        </div>

        <div className="md:w-1/2 w-full">
            <DiscordDiscussion href="https://discord.gg/rkyDM6p3m2" rel="noopener noreferrer" target="_blank">
                <Fade right>
                    <div>
                        <img src={require('../../assets/images/logos/discord.png')} alt="Join Discord Server" />
                        <h5>Join the Discord Server</h5>
                    </div>
                </Fade>
            </DiscordDiscussion>
        </div>
    </div>
};

export default LandingJoinDiscussion;
