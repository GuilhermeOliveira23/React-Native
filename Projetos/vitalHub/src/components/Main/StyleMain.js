import styled from "styled-components"

export const TextBar = styled.Text`
    color: #607EC5;
    font-size: 12px;
    font-family: Quicksand_500Medium;
`

// export const TextBarNormal = styled.Text`
//     color: #595663;
//     font-family: Quicksand_500Medium;
//     margin-bottom: 2px;
// `

export const BarContent = styled.SafeAreaView`
    flex-direction: row;
    margin-top: 22px;
    margin-left: 270px;
    gap: 5px;
    width: 40px;
    height: 60px;
`

// export const ContentIcon = styled.View.attrs({

// focus: true

// })`
// align-items: center;
// justify-content:center;
// flex-direction: row;

// gap: 5px;
// border-radius: 18px;
// padding: 9px 12px;
// background-color: ${props => {props.tabBarActiveBackground}}
// `