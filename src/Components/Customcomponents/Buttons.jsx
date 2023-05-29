import { Box } from "@chakra-ui/react";

export default function Buttons(Prop){
    const{BGcolor,Color,Text,HandelClear}=Prop;
    return(
       <Box onClick={HandelClear} cursor={"pointer"} fontSize={"20px"} fontWeight={"600"} h={"50px"} w={"50px"} borderRadius={"50%"} color={Color} bg={BGcolor} justifyContent={"center"} alignItems={"center"} display={"flex"}>
         {Text}
       </Box>
    )
}