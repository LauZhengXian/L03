import {Image, Text, View} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";
import React from "react";


const Movie = ({title, year , icon_name, icon_color ,poster}) => {
    return (
        <View>
            <Text></Text>
            <Image  source={poster}
                    style={{width:400,height:500}}/>
            <Text>
                Movie:
                <FontAwesome6 name={icon_name} size={40} color={icon_color}/>
                {title} {year}
            </Text>
        </View>
    );
};

export default Movie;