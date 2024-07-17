import { View, Text, type TextProps, StyleSheet } from "react-native";

export type LabelProps = TextProps & {
    type?: 'default' | 'dark';
    removable?: 'yes' | 'no';
};

export function Label({
    style,
    type = 'default',
    removable = 'no',
    children,
    ...rest
}: LabelProps) {
    return(
        <View
        style={[
            type === 'default' ? styles.default : undefined,
            type === 'dark' ? styles.dark : undefined,
        ]}
        {...rest}
        >
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    default: {
        alignItems: 'baseline',
        borderRadius: 10,
        backgroundColor: '#F3F3F3', 
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 2,
        margin: 10,
    },
    dark: {
        alignItems: 'baseline',
        borderRadius: 10,
        backgroundColor: '#797979', 
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 2,
    },
    text: {
        margin: 10,
        width: 'auto'
    }
})