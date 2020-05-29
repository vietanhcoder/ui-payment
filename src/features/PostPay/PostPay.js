import React from "react";
import styled, { css } from "styled-components";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";

const PostPayWrapper = styled.div`
  border: 1px solid #ededed;
  margin: 0 auto;
  background: #f2f2f2;
  max-width: 800px;
  width: 100%;
  color: #66686a;
`;

// const StyledPostPayCard = styled.div``
const StyledPostPayContentWrapper = styled.div`
  width: 49%;
  padding: 0 20px 10px 35px;
`;

const StyledPostPayContentTitle = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding-top: 15px;
  padding-bottom: 30px;
  text-align: center;
`;

// =================================================================

const StyledPostPayItemList = styled.ul`
  ,
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    width: 100%;
  }
`;

const PostPayTextContent = styled.h4`

  display: block;
  font-size: 1.5em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  color: #6c6e70;

  ${(props) =>
    props.normalText &&
    css`
      font-weight: normal;
      font-size: 1.3em;
    `}
  span {
    font-size: 0.7em;
    position: absolute;
    bottom: 10px;
    font-weight: normal;
  }
`;


const PostPayItem = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;

  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 98px;
  ${(props) =>
    props.newAttr &&
    css`
      height: 300px;
      span {
        height: 48%;
      }
      ${PostPayTextContent} {
        span {
          height: auto;
          bottom: auto;
          padding-top: 6px;
        }
      }
    `}
`;

const PostPayImgItemWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
`;
const StyledPostPayImgItem = styled.img`
  max-width: 52px;
  height: auto;
`;
const StyledPostPayHrItem = styled.span`
  margin: 0;
  padding: 0;
  height: 45%;
  display: flex;
  overflow: hidden;
  justify-content: center;
  position: absolute;
  top: -23px;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: auto;
  margin-inline-end: auto;
  border-style: solid;
  border-width: 1px;
  border: 1px solid #d8d8d8;
`;

const PostPayContent = styled.div``;

const StylePostPayBottomText = styled.h3`
  text-align: center;
  bottom: 0;
  display: block;
  font-size: 1.2em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding: 10px;
`;

const PostPayBody = styled.div`
  display: flex;
  width: 100%;
`;

const PostPayBodyBorderSlice = styled.div`
  width: 2%;
  display: flex;
  justify-content: center;
  position: relative;
`;

const PostPayBodyBorderSliceContent = styled.span`
  border-right: 1px solid #d0d0d0;
`;

const PostPayBodyBorderSliceText = styled.h2`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  text-align: center;
  position: absolute;
  top: 10px;
  padding: 5px;
  z-index: 1;
  background: #f2f2f2;
  color: #525457;
`;

const StyledPostPayFooter = styled.div`
  background: #949799;
  color: white;
  width: 100%;
  position: relative;
`;

const PostPayCardItem = ({
  imgName,
  url,
  itemTitle,
  desTitle,
  children,
  newAttr,
  normalText,
}) => (
  <PostPayItem newAttr={newAttr}>
    <PostPayImgItemWrapper>
      <StyledPostPayImgItem src={url} alt={imgName} />
      {children}
    </PostPayImgItemWrapper>

    <PostPayContent>
      <PostPayTextContent normalText={normalText}>
        {itemTitle} <br />
        {`${desTitle}` && <span> {desTitle} </span>}
      </PostPayTextContent>
    </PostPayContent>
  </PostPayItem>
);

const PostPayCard = ({ titleComponent, children }) => (
  <>
    <StyledPostPayContentWrapper>
      <StyledPostPayContentTitle>
        {titleComponent}
      </StyledPostPayContentTitle>
      <StyledPostPayItemList>{children}</StyledPostPayItemList>
    </StyledPostPayContentWrapper>
  </>
);

const PostPay = () => (
  <PostPayWrapper>
    <PostPayBody>
      <PostPayCard titleComponent="Pay in two!" imgName="pay-half">
        <PostPayCardItem
          itemTitle="Pay half today!"
          desTitle="AED 100.00 in one month"
          url={img1}
          imgName="pay-half"
        ></PostPayCardItem>
        <PostPayCardItem
          newAttr
          itemTitle="Pay half next month!"
          desTitle="Pay AED 100.00 in one month"
          url={img2}
          imgName="pay-half2"
        >
          <StyledPostPayHrItem />
        </PostPayCardItem>
      </PostPayCard>
      <PostPayBodyBorderSlice>
        <PostPayBodyBorderSliceContent />
        <PostPayBodyBorderSliceText>
          OR
        </PostPayBodyBorderSliceText>
      </PostPayBodyBorderSlice>

      <PostPayCard normalText titleComponent="Pay in four!">
        <PostPayCardItem
          normalText
          itemTitle="Pay AED 50.00 today"
          url={img3}
          imgName="pay-half"
        ></PostPayCardItem>
        <PostPayCardItem
          normalText
          itemTitle="Pay AED 50.00 in two weeks"
          url={img1}
          imgName="pay-half-2week"
        >
          <StyledPostPayHrItem />
        </PostPayCardItem>
        <PostPayCardItem
          normalText
          itemTitle="Pay AED 50.00 in four weeks"
          url={img4}
          imgName="pay-half-four-week"
        >
          <StyledPostPayHrItem />
        </PostPayCardItem>
        <PostPayCardItem
          normalText
          itemTitle="Pay AED 50.00 in six weeks"
          url={img2}
          imgName="pay-half-six"
        >
          <StyledPostPayHrItem />
        </PostPayCardItem>
      </PostPayCard>
    </PostPayBody>
    <StyledPostPayFooter>
      <StylePostPayBottomText>
        Zero interest. Zero fees.
      </StylePostPayBottomText>
    </StyledPostPayFooter>
  </PostPayWrapper>
);

export default PostPay;
