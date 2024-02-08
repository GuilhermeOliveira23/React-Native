import styled from "styled-components";

export const LinkMedium = styled.Text`
font-family: "MontserratAlternates_500Medium";
color: gray;
text-decoration: underline;

padding-right: 45%;


`
export const LinkBold = styled(LinkMedium)`
color: #4D659D;
font-family: "MontserratAlternates_600SemiBold";
`


export const LinkBlack = styled(LinkBold)`
color: black;
padding-right: 0px;
`