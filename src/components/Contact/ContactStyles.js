import styled from "styled-components"

export const ContactSection = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1080px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "16px 16px 0" } ;
    display: ${({ open }) => open ? "none": null}
    width: calc(100vw - 32px);
    flex-direction: column;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
    display: ${({ open }) => open ? "none": null}
  }

`

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Box = styled.div`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`
export const BoxNum = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`

export const BoxText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`


export const Image = styled.img`
  height: 40rem;
  width: 40rem;
  margin-top: 15rem;
  border: 2px solid white;
  border-radius: 999%;

@media ${(props) => props.theme.breakpoints.sm} {
  height: 15rem;
  width: 15rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 2px solid white;
  border-radius: 999%;
}

@media ${(props) => props.theme.breakpoints.md} {
  height: 25rem;
  width: 25rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 2px solid white;
  border-radius: 999%;
}
`

export const ContactForm = styled.div`{
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
   
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0px;
  }
}
`

export const ContactLabel = styled.label`
  font-size: 18px;
  padding-bottom: 5px;
`

export const ContactInput = styled.input`
  margin-top: .2rem;
  width: 50%;
  padding: 2px;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: width 0.4s ease-in-out;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
  }

`

export const ContactMessage = styled.textarea`
  margin-top: .2rem;
  width: 60%;
  height: 150px;
  padding: 2px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    height: 120px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 80%;
  }
`

export const ContactButton = styled.button`
  margin-top: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.75);
  border-radius: 1rem;
  padding: 8px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.75);
  font-size: 18px;

  &:hover {
    border: 2px solid white;
    color: white;
    transform: scale(1.1);
    cursor: pointer;
    background-color: rgba(46, 204, 113, 0.65);
    transition: all 0.3s ease-in-out;
  }
  `