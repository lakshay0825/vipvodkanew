import styled, { css } from "styled-components";

const convertToRem = (px) => {
  let result = ``;
  const idleRem = 16;
  if (typeof px === "string") {
    result = `${parseInt(px) / idleRem}rem`;
  } else if (typeof px === "number") {
    result = `${px / idleRem}rem`;
  }
  return result;
};

function createFontStyles() {
  let styles = ``;
  for (let i = 1; i <= 30; i++) {
    styles =
      styles +
      `.fs-${i}{
            font-size: ${convertToRem(i)}
        };`;
  }

  return css`
    ${styles}
  `;
}
function createFontWeight() {
  let styles = ``;
  for (let i = 100; i <= 800; i = i + 100) {
    styles =
      styles +
      `.fw-${i}{
            font-weight: ${i}}
        };`;
  }

  return css`
    ${styles}
  `;
}
function createPadding() {
  let styles = ``;
  for (let i = 1; i <= 35; i++) {
    styles =
      styles +
      `.ph-${i}{
            padding-left: ${convertToRem(i)};
            padding-right: ${convertToRem(i)};
            
        };`;
  }
  for (let i = 1; i <= 35; i++) {
    styles =
      styles +
      `.pv-${i}{
            padding-top: ${convertToRem(i)};
            padding-bottom: ${convertToRem(i)};

        };`;
  }

  return css`
    ${styles}
  `;
}
function createMargin() {
  let styles = ``;
  for (let i = 1; i <= 35; i++) {
    styles =
      styles +
      `.mh-${i}{
            margin-left: ${convertToRem(i)};
            margin-right: ${convertToRem(i)};
            
        };
        .mv-${i}{
            margin-top: ${convertToRem(i)};
            margin-bottom: ${convertToRem(i)};

        };
        .mt-${i}{
            margin-top: ${convertToRem(i)};

        };
        .mb-${i}{
            margin-bottom: ${convertToRem(i)};

        };
        .mr-${i}{
            margin-right: ${convertToRem(i)};

        };
        .ml-${i}{
            margin-left: ${convertToRem(i)};

        };
        `;
  }

  return css`
    ${styles}
  `;
}

export const GlobalStylesWrapper = styled.div`
  ${createFontStyles()}
  ${createFontWeight()}
  ${createPadding()}
  ${createMargin()}
`;
