import { Image, Text, View, StyleSheet} from "react-native";
import { Label } from "@/components/Label";

export default function ProfileScreen() {
    return(
        <View style={styles.page}>
            <Label
            type="default"
            removable="no"
            >Hello</Label>
            <Label
            type="dark"
            removable="yes"
            >ByeBye</Label>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        height: '100%',
        alignItems: 'baseline',
        top: 50
    }
})