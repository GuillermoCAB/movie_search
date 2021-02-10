import styled from 'styled-components';

export interface CommonStyledType {
  width?: string;
  maxWidth?: string;
  minWidth?: string;

  height?: string;
  maxHeight?: string;
  minHeight?: string;

  margin?: string;

  overflowX?: string;
  overflowY?: string;
  overflow?: string;

  index?: string;

  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;

  display?: string;
  direction?: string;
  justify?: string;
  align?: string;
  padding?: string;

  border?: string;
  borderBottom?: string;
  radius?: string;
  background?: string;
  bgColor?: string;

  opacity?: string;

  transition?: string;

  font?: string;
  spacing?: string;
  color?: string;

  custom?: string;

  hover?: string;

  mobile?: string;

  active?: string;

  ref?: any;
}

export interface InputType extends CommonStyledType {
  onChange: (e: any) => void,
  value: string | number
}

export const Container = styled.div<CommonStyledType>`
  width: ${p => p.width || 'auto'};
  max-width: ${p => p.maxWidth};  
  min-width: ${p => p.minWidth};  

  height: ${p => p.height || 'auto'};
  max-height: ${p => p.maxHeight}; 
  min-height: ${p => p.minHeight}; 

  margin: ${p => p.margin || '0'};

  overflow-x: ${p => p.overflowX};
  overflow-y: ${p => p.overflowY};
  overflow: ${p => p.overflow};

  z-index: ${p => p.index};

  position: ${p => p.position};
  top: ${p => p.top};
  bottom: ${p => p.bottom};
  left: ${p => p.left};
  right: ${p => p.right};

  display: ${p => p.display || 'flex'};
  flex-direction: ${p => p.direction || 'row'};
  justify-content: ${p => p.justify || 'center'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding};

  border: ${p => p.border || 'none'};
  border-bottom: ${p => p.borderBottom};
  border-radius: ${p => p.radius};
  background: ${p => p.background};
  background-color: ${p => p.bgColor};

  opacity: ${p => p.opacity || '1'};

  transition: ${p => p.transition || 'all ease-in 0.3s'};

  font: ${p => p.font || 'normal 18px/22px Nunito'};
  letter-spacing: ${p => p.spacing || '2px'};
  color: ${p => p.color || 'var(--gray)'};

  ${p => p.custom}
  
  &:hover {
    ${p => p.hover};
  }

  @media only screen and (max-width: 450px) {
    ${p => p.mobile};
  }

  &:active {    
    ${p => p.active};
  }               
`;

export const H1 = styled.h1<CommonStyledType>`
  margin: ${p => p.margin || '0'};

  font: ${p => p.font || 'normal 32px/37px Nunito'};
  letter-spacing: ${p => p.spacing || '0'};
  color: ${p => p.color || 'var(--gray)'};
  text-align: ${p => p.align};

  @media only screen and (max-width: 450px) {
    ${p => p.mobile};
  }
`;

export const Title = styled.p<CommonStyledType>`
  margin: ${p => p.margin || '0'};

  text-align: ${p => p.align};
  font: ${p => p.font || 'bold 18px/23px Nunito'};
  letter-spacing: ${p => p.spacing || '0'};
  color: ${p => p.color || 'var(--black)'};

  @media only screen and (max-width: 450px) {
    ${p => p.mobile};
  }
`;

export const Input = styled.input<InputType>`
  width: ${p => p.width || '300px'};
  max-width: ${p => p.maxWidth};  
  min-width: ${p => p.minWidth};  

  height: ${p => p.height || '50px'};
  max-height: ${p => p.maxHeight}; 
  min-height: ${p => p.minHeight}; 

  margin: ${p => p.margin || '0'};

  overflow-x: ${p => p.overflowX};
  overflow-y: ${p => p.overflowY};
  overflow: ${p => p.overflow};

  z-index: ${p => p.index};

  position: ${p => p.position};
  top: ${p => p.top};
  bottom: ${p => p.bottom};
  left: ${p => p.left};
  right: ${p => p.right};

  display: ${p => p.display || 'flex'};
  flex-direction: ${p => p.direction || 'row'};
  justify-content: ${p => p.justify || 'flex-start'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding || '6px 18px'};

  border: ${p => p.border || 'none'};
  border-bottom: ${p => p.borderBottom};
  border-radius: ${p => p.radius || '8px'};
  background: ${p => p.background};
  background-color: ${p => p.bgColor || 'var(--white)'};

  opacity: ${p => p.opacity || '1'};

  transition: ${p => p.transition || 'all ease-in 0.3s'};

  font: ${p => p.font || 'normal 14px/19px Nunito'};
  letter-spacing: ${p => p.spacing || '0'};
  color: ${p => p.color || 'var(--darkGray)'};

  ${p => p.custom}
  
  &:hover {
    cursor: text;
    ${p => p.hover};
  }

  @media only screen and (max-width: 450px) {
    ${p => p.mobile};
  }

  &:active {    
    ${p => p.active};
  }               
`;

export const Button = styled.button<CommonStyledType>`
  width: ${p => p.width || '160px'};
  max-width: ${p => p.maxWidth};  
  min-width: ${p => p.minWidth};  

  height: ${p => p.height || '40px'};
  max-height: ${p => p.maxHeight}; 
  min-height: ${p => p.minHeight}; 

  margin: ${p => p.margin || '0'};

  overflow-x: ${p => p.overflowX};
  overflow-y: ${p => p.overflowY};
  overflow: ${p => p.overflow};

  z-index: ${p => p.index};

  position: ${p => p.position};
  top: ${p => p.top};
  bottom: ${p => p.bottom};
  left: ${p => p.left};
  right: ${p => p.right};

  display: ${p => p.display || 'flex'};
  flex-direction: ${p => p.direction || 'row'};
  justify-content: ${p => p.justify || 'flex-start'};
  align-items: ${p => p.align || 'center'};
  padding: ${p => p.padding || '6px 18px'};

  border: ${p => p.border || 'none'};
  border-bottom: ${p => p.borderBottom};
  border-radius: ${p => p.radius || '8px'};
  background: ${p => p.background};
  background-color: ${p => p.bgColor || 'var(--darkRed)'};

  opacity: ${p => p.opacity || '1'};

  transition: ${p => p.transition || 'all ease-in 0.3s'};

  font: ${p => p.font || 'normal 14px/19px Nunito'};
  letter-spacing: ${p => p.spacing || '0'};
  color: ${p => p.color || 'var(--white)'};

  ${p => p.custom}
  
  &:hover {
    ${p => p.hover};
  }

  @media only screen and (max-width: 450px) {
    ${p => p.mobile};
  }

  &:active {    
    ${p => p.active};
  }               
`;

export const Image = styled.img<CommonStyledType>`
  width: ${p => p.width || 'auto'};
  max-width: ${p => p.maxWidth};  
  min-width: ${p => p.minWidth};  

  height: ${p => p.height || 'auto'};
  max-height: ${p => p.maxHeight}; 
  min-height: ${p => p.minHeight}; 

  display: ${p => p.display};

  margin: ${p => p.margin || '0'};

  z-index: ${p => p.index};

  position: ${p => p.position};
  top: ${p => p.top};
  bottom: ${p => p.bottom};
  left: ${p => p.left};
  right: ${p => p.right};
  
  border: ${p => p.border || 'none'};
  border-bottom: ${p => p.borderBottom};
  border-radius: ${p => p.radius};
  background: ${p => p.background};
  background-color: ${p => p.bgColor};

  opacity: ${p => p.opacity || '1'};

  transition: ${p => p.transition || 'all ease-in 0.3s'};

  ${p => p.custom}
  
  &:hover {
    ${p => p.hover};
  }

  @media only screen and (max-width: 450px) {
    ${p => p.mobile};
  }
`;