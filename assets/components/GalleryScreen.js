// INSTALL npm i @shopify/flash-list

import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    ActivityIndicator,
} from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";

const API_ENDPOINT = "https://randomuser.me/api/?results=30";

const GalleryScreen = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetchData(API_ENDPOINT);
    }, []);

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);

            console.log(json.results);

            setIsLoading(false);
        } catch (error) {
            setError();
            console.log(error);
        }
    };

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={"large"} color="#5500dc" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>
                    Error in Fetching data ... Please check your internet connection
                </Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, marginHorizontal: 20 }}>
            <MasonryFlashList
                data={data}
                keyExtractor={(item) => item.login.username}
                numColumns={3}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Image
                            source={{ uri: item.picture.thumbnail }}
                            style={styles.image}
                        />
                    </View>
                )}
                estimatedItemSize={200}
            />
        </SafeAreaView>
    )
}

export default GalleryScreen

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
        marginTop: 10,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
});