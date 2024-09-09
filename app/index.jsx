import { Text, View } from "react-native";
import {Link} from "expo-router";

const Index = () => {
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        }}
        >
        <Text>Help !</Text>
        <Link href={"/about"}>Go to about</Link>
        </View>
    );
};

export default Index;