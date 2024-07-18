import { View, Text, type TextProps, StyleSheet } from "react-native";
import { useState } from 'react'
import { SvgXml } from 'react-native-svg'

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
    const [isHidden, setHidden] = useState(false)

    function touchHandler() {
        setHidden(true)
    }

    return(
        <View
        style={[
            type === 'default' ? styles.default : undefined,
            type === 'dark' ? styles.dark : undefined,
            isHidden === true ? styles.hidden: undefined
        ]}
        {...rest}
        >
            <Text style={styles.text}>{children}</Text>
            <View onTouchEnd={touchHandler} style={styles.img}>
                <SvgXml xml={xml} width="20" height="20"
                style={
                    removable === 'no' ? styles.hidden: undefined
                }
                />
            </View>
        </View>
    )
}

const xml = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.2643 18.3044C23.0453 19.0854 23.0453 20.3518 22.2643 21.1328L21.1329 22.2642C20.3518 23.0452 19.0855 23.0452 18.3045 22.2642L13.2133 17.173C12.4322 16.392 11.1659 16.392 10.3849 17.173L5.29369 22.2642C4.51264 23.0452 3.24631 23.0452 2.46526 22.2642L1.33389 21.1328C0.552842 20.3517 0.552843 19.0854 1.33389 18.3044L6.42506 13.2132C7.20611 12.4322 7.20611 11.1658 6.42506 10.3848L1.33389 5.29361C0.552842 4.51256 0.552844 3.24623 1.33389 2.46518L2.46526 1.33381C3.24631 0.55276 4.51264 0.552761 5.29369 1.33381L10.3849 6.42498C11.1659 7.20603 12.4322 7.20603 13.2133 6.42498L18.3045 1.33381C19.0855 0.552759 20.3518 0.552761 21.1329 1.33381L22.2643 2.46518C23.0453 3.24623 23.0453 4.51256 22.2643 5.29361L17.1731 10.3848C16.392 11.1658 16.392 12.4322 17.1731 13.2132L22.2643 18.3044Z" fill="#9D9D9D"/>
</svg>`;


const styles = StyleSheet.create({
    default: {
        // alignItems: 'baseline',
        borderRadius: 10,
        backgroundColor: '#F3F3F3', 
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 2,
        marginVertical: 10,
        flexDirection: 'row',
        padding: 10
    },
    dark: {
        // alignItems: 'baseline',
        borderRadius: 10,
        backgroundColor: '#797979', 
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 2,
        marginVertical: 10,
        flexDirection: 'row',
        padding: 10
    },
    text: {
        width: 'auto',
        fontSize: 16
    },
    hidden: {
        display: 'none'
    },
    img: {
        marginLeft: 5
    }
})