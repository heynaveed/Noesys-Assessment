import { Box, Flex, Text } from "@chakra-ui/react";
import Buttons from "./Customcomponents/Buttons";
import { useState } from "react";

export default function Calculator() {
    const [Input, setInput] = useState([]);
    const [History,setHistory]=useState([]);
    const[IsOpen,setIsOpen]=useState(false)

    // Function to Cleat the input
    function HandelClear() {
        setInput("");
    }

    //function to handel click on the keys
    function HandelClicked(prop){
       setInput(Input+prop);
    }

    // function to calculate the results
    function HandelResult(){
        const Ans=eval(Input);
        setHistory(History+Input+"="+Ans+", ");
        setInput(Input+"="+Ans)
    }

    // function to save history
    function HandelHistory(){
        setIsOpen(!IsOpen);
    }
    return (
        <Box margin={"auto"} borderRadius={"5px"} mt={"20px"} w={"22%"} bg={'RGBA(0, 0, 0, 0.16)'}>
            <Text fontSize={"22PX"} fontWeight={"600"} fontStyle={"initial"}>CALCULATOR</Text>
            <br />
          { IsOpen && <Box bg={"RGBA(0, 0, 0, 0.24)"} borderRadius={"5px"} fontSize={"20px"} fontWeight={"600"} height={"50px"} m={"auto"} textAlign={"right"} overflow={"auto"}>
                {History}
            </Box>}
            <Box bg={"RGBA(0, 0, 0, 0.24)"} borderRadius={"5px"} fontSize={"20px"} fontWeight={"600"} height={"50px"}padding={"10px"} m={"auto"} textAlign={"right"}>
                {Input}
            </Box>
            <br />
            <Flex justifyContent={"space-around"}>
                <div onClick={HandelClear}><Buttons BGcolor="RGBA(0, 0, 0, 0.24)" Color="black" Text="C" /></div>
                <div onClick={HandelHistory}><Buttons BGcolor="RGBA(0, 0, 0, 0.24)" Color="black" Text="H" /></div>
                <div onClick={()=>HandelClicked("%")}> <Buttons BGcolor="RGBA(0, 0, 0, 0.24)" Color="black" Text="%" /></div>
                <div onClick={()=>HandelClicked("/")}> <Buttons BGcolor="#ECC94B" Color="white" Text="÷" /></div>
            </Flex>
            <br />
            <Flex justifyContent={"space-around"}>
                <div onClick={()=>HandelClicked(9)}>  <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="9" /></div>
                <div onClick={()=>HandelClicked(8)}>  <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="8" /></div>
                <div onClick={()=>HandelClicked(7)}> <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="7" /></div>
                <div onClick={()=>HandelClicked("*")}> <Buttons BGcolor="#ECC94B" Color="white" Text="x" /></div>
            </Flex>
            <br />
            <Flex justifyContent={"space-around"}>
                <div onClick={()=>HandelClicked(6)}> <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="6" /></div>
                <div onClick={()=>HandelClicked(5)}> <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="5" /></div>
                <div onClick={()=>HandelClicked(4)}> <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="4" /></div>
                <div onClick={()=>HandelClicked("-")}> <Buttons BGcolor="#ECC94B" Color="white" Text="-" /></div>
            </Flex>
            <br />
            <Flex justifyContent={"space-around"}>
                <div onClick={()=>HandelClicked(3)}> <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="3" /></div>
                <div onClick={()=>HandelClicked(2)}>  <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="2" /></div>
                <div onClick={()=>HandelClicked(1)}>  <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="1" /></div>
                <div onClick={()=>HandelClicked("+")}>  <Buttons BGcolor="#ECC94B" Color="white" Text="+" /></div>
            </Flex>
            <br />
            <Flex justifyContent={"space-around"}>
                   <div onClick={()=>HandelClicked(0)}><Box cursor={"pointer"} fontSize={"20px"} fontWeight={"600"} h={"50px"} w={"120px"} borderRadius={"25px"} bgColor={"RGBA(0, 0, 0, 0.64)"} justifyContent={"center"} alignItems={"center"} display={"flex"} color={"white"}>0</Box></div>
                    <div onClick={()=>HandelClicked(".")}> <Buttons BGcolor="RGBA(0, 0, 0, 0.64)" Color="white" Text="." /></div>
                    <div onClick={HandelResult}><Buttons BGcolor="#ECC94B" Color="white" Text="=" /></div>
            </Flex>
            <br />
        </Box>
    )
}