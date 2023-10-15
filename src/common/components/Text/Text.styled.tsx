import styled from "styled-components/macro";

interface TextProps {
  size?: string;
  align?: "center" | "inherit" | "justify" | "left" | "right";
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  weight?: string;
  color?: string;
  lineHeight?: string;
  display?: string;
  letterSpacing?: string;
  fontStyle?: string;
}

const defaultProps: TextProps = {
  size: "16px",
  align: "inherit",
  mt: "0",
  mb: "0",
  mr: "0",
  ml: "0",
  weight: "normal",
  color: "inherit",
  lineHeight: "normal",
  fontStyle: "normal",
};

export const Text = styled.p<TextProps>`
  display: ${({ display }) => display};
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-right: ${({ mr }) => mr};
  margin-left: ${({ ml }) => ml};
  font-size: ${({ size }) => size};
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-style: ${({ fontStyle }) => fontStyle};
`;

Text.defaultProps = defaultProps;
