    import React from 'react';
    import { Image, View } from 'react-native';

    const AssetComponent = ({ source }) => {
        return (
            <View>
                <Image source={source} style={{ width: 100, height: 100 }} />
            </View>
        )
    }

    export default AssetComponent;