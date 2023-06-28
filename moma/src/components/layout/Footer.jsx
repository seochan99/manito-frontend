import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterWrapper = styled.footer`
  background: linear-gradient(
    180deg,
    rgba(247, 247, 247, 0) 0%,
    #eaeaea 99.94%,
    rgba(255, 240, 245, 0.892708) 99.95%,
    #dfdfdf 99.96%
  );
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 10%;
  color: #bbbbbb;
  font-size: 12px;
  min-height: 90px;
`;

const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FooterInsta = styled.div`
  flex-direction: row;
  font-size: 20px;
  gap: 30%;
  display: flex;
  text-align: right;
  justify-content: right;
`;

const LinkTag = styled.span`
  color: #1e4154;
  padding-top: 3%;
  font-size: 10px;
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  height: 100%;
  
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

export default function Footer() {
  return (
    <PageWrapper>
      <ContentWrapper>
        {/* Your content goes here */}
      </ContentWrapper>
      <FooterWrapper>
        <FooterText>
          ©Moma. All rights reserved.
          <LinkTag>
            special thanks to <span onClick={() => {}}>@manito_moma</span>
          </LinkTag>
        </FooterText>
        <FooterInsta>
          <FontAwesomeIcon onClick={() => {}} icon={faInstagram} />
          <FontAwesomeIcon onClick={() => {}} icon={faGithub} />
        </FooterInsta>
      </FooterWrapper>
    </PageWrapper>
  );
}
