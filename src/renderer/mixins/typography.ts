/* Copyright (c) 2021-2022 SnailDOS */

import {
  FONT_INTER_REGULAR,
  FONT_INTER_MEDIUM,
  FONT_INTER_LIGHT,
} from '../constants';

export const getLetterSpacing = (fontSize: number, tracking: number) =>
  tracking / fontSize;

export const interLight = () => `
  font-family: Inter;
  font-weight: 300;
`;

export const interRegular = () => `
  font-family: Inter;
  font-weight: 400;
`;

export const interMedium = () => `
  font-family: Inter;
  font-weight: 500;
`;

export const h1 = () => `
  ${interLight()};
  letter-spacing: ${getLetterSpacing(96, -1.5)}rem;
  font-size: 96px;
`;

export const h2 = () => `
  ${interLight()};
  letter-spacing: ${getLetterSpacing(60, -0.5)}rem;
  font-size: 60px;
`;

export const h3 = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(48, 0)}rem;
  font-size: 48px;
`;

export const h4 = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(34, 0.25)}rem;
  font-size: 34px;
`;

export const h5 = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(24, 0)}rem;
  font-size: 24px;
`;

export const h6 = () => `
  ${interMedium()};
  letter-spacing: ${getLetterSpacing(20, 0.15)}rem;
  font-size: 20px;
`;

export const subtitle1 = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(16, 0.15)}rem;
  font-size: 16px;
`;

export const subtitle2 = () => `
  ${interMedium()};
  letter-spacing: ${getLetterSpacing(14, 0.1)}rem;
  font-size: 14px;
`;

export const body1 = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(16, 0.5)}rem;
  font-size: 16px;
`;

export const body2 = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(14, 0.25)}rem;
  font-size: 14px;
`;

export const button = () => `
  ${interMedium()};
  letter-spacing: ${getLetterSpacing(14, 0.75)}rem;
  font-size: 14px;
`;

export const caption = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(12, 0.4)}rem;
  font-size: 12px;
`;

export const overline = () => `
  ${interRegular()};
  letter-spacing: ${getLetterSpacing(10, 1.5)}rem;
  font-size: 10px;
  text-transform: uppercase;
`;

export const maxLines = (count: number, lineHeight?: number) => `
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${count};
  -webkit-box-orient: vertical;
`;

export const injectFonts = () => {
  const styleElement = document.createElement('style');

  styleElement.textContent = `
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src: url(${FONT_INTER_REGULAR}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src: url(${FONT_INTER_MEDIUM}) format('woff2');
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  src: url(${FONT_INTER_LIGHT}) format('woff2');
}
`;

  document.head.appendChild(styleElement);
};
