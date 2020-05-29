import React from "react";
import styled, { css } from "styled-components";
import img1 from "../../img/1.png";
import img2 from "../../img/2.png";
import img3 from "../../img/3.png";
import img4 from "../../img/4.png";

const StyledPostPayWrapper = styled.div`
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

const StyledPostPayItem = styled.li`
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
      h4 {
        span {
          height: auto;
          bottom: auto;
          padding-top: 6px;
        }
      }
    `}
`;

const StyledPostPayImgItemWrapper = styled.div`
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

const StyledPostPayContent = styled.div``;
const StyledPostPayTextContent = styled.h4`
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

const StyledPostPayBody = styled.div`
  display: flex;
  width: 100%;
`;

const StyledPostPayBodyBorderSlice = styled.div`
  width: 2%;
  display: flex;
  justify-content: center;
  postion: relative;
`;
const StyledPostPayBodyBorderSliceContent = styled.span`
  border-right: 1px solid #d0d0d0;
`;
const StyledPostPayBodyBorderSliceText = styled.h2`
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

const PostPay = () => {
  const PostPayCardItem = ({
    imgName,
    url,
    itemTitle,
    desTitle,
    children,
    newAttr,
    normalText,
  }) => {
    return (
      <StyledPostPayItem newAttr={newAttr}>
        <StyledPostPayImgItemWrapper>
          <StyledPostPayImgItem src={url} alt={imgName} />
          {children}
        </StyledPostPayImgItemWrapper>

        <StyledPostPayContent>
          <StyledPostPayTextContent normalText={normalText}>
            {itemTitle} <br />
            {`${desTitle}` && <span> {desTitle} </span>}
          </StyledPostPayTextContent>
        </StyledPostPayContent>
      </StyledPostPayItem>
    );
  };

  const PostPayCard = ({ titleComponent, children }) => {
    return (
      <>
        <StyledPostPayContentWrapper>
          <StyledPostPayContentTitle>
            {titleComponent}
          </StyledPostPayContentTitle>
          <StyledPostPayItemList>{children}</StyledPostPayItemList>
        </StyledPostPayContentWrapper>
      </>
    );
  };

  return (
    <StyledPostPayWrapper>
      <StyledPostPayBody>
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
        <StyledPostPayBodyBorderSlice>
          <StyledPostPayBodyBorderSliceContent />
          <StyledPostPayBodyBorderSliceText>
            OR
          </StyledPostPayBodyBorderSliceText>
        </StyledPostPayBodyBorderSlice>

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
      </StyledPostPayBody>
      <StyledPostPayFooter>
        <StylePostPayBottomText>
          Zero interest. Zero fees.
        </StylePostPayBottomText>
      </StyledPostPayFooter>
    </StyledPostPayWrapper>
  );
};

export default PostPay;
