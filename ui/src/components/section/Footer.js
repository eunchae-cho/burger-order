import styled from "styled-components";

const FooterDiv = styled.div`
  color: white;
  font-family: 'sans-serif;
  margin: 20px;
`;

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <>
            <FooterDiv>
                Copyright by eunchae &copy; <span>{thisYear()}</span>
            </FooterDiv>
        </>
    );
}

export default Footer;