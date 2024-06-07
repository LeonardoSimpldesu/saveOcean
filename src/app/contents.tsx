import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { api } from "../api/api.js";

interface IContents { 
    userId : number, 
    contents: {
        title: string, 
        saved: boolean,
        blocked: boolean,
        certified: string, 
        points: number
    }[]
}

export default function Contents() {
  const [certified, setCertified] = useState(true);
  const [contents, setContents] = useState<IContents>();

  async function getHomeData() {
    const { data } = await api.get("/Content/allContents");
    if (data) {
      setContents(data);
    }
  }

  useEffect(() => {
    getHomeData();
  }, []);

  console.log(contents?.contents[0].title);

  const image = {
    uri: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  return (
    <View className="flex-1 w-full pt-10 bg-background">
      <Text className="bg-blue-300 self-center">{contents?.contents?.length == 0 ? "undefined filhão": contents?.contents?.length}</Text>
      <View className="flex-row justify-between px-6 mb-4">
        <Link href="/">
          <Feather name="arrow-left" size={40} />
        </Link>
        <View className="flex-row items-center gap-4">
          <FontAwesome5 name="coins" size={20} color={colors.primary} />
          <Text className="font-bold text-lg">350</Text>
        </View>
      </View>
      <FlatList
        // data={["Primeira aula", "Segunda Aula"]}
        data={contents?.contents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <View className="w-full flex-row mb-6 px-5">
              <View className="p-4 gap-2 bg-primary/50 justify-center items-center mx-2 rounded-lg">
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  className="h-28 w-24 p-6 justify-end items-end mx-2 bg-black opacity-80"
                >
                  <FontAwesome5 name="lock" size={20} color={colors.primary} />
                </ImageBackground>
                <View className="w-24 h-3 rounded-full bg-gray-500 overflow-hidden">
                  <View className="w-[20%] h-3 bg-blue-500"></View>
                </View>
              </View>
              <View className="flex-1 justify-center">
                <Text className="font-bold text-lg w-[20ch]">{item.title}</Text>
                <View className="flex-row justify-between">
                  <View className="gap-4">
                    <View className="flex-row items-center bg-primary/80 rounded-full px-3 py-1 self-start">
                      <View>
                        <FontAwesome5 name="coins" color={colors.secondary} />
                      </View>
                      <Text className="text-white font-bold ml-2"> 500 </Text>
                    </View>
                    <View className="flex-row">
                      <Image
                        source={require("@/assets/seaweed.png")}
                        className="size-4"
                      />
                      <Image
                        source={require("@/assets/seaweed.png")}
                        className="size-4"
                      />
                      <Image
                        source={require("@/assets/seaweed-black.png")}
                        className="size-4"
                      />
                      <Image
                        source={require("@/assets/seaweed-black.png")}
                        className="size-4"
                      />
                      <Image
                        source={require("@/assets/seaweed-black.png")}
                        className="size-4"
                      />
                    </View>
                  </View>
                  {certified ? (
                    <View className="size-12 bg-primary/80 justify-center items-center rounded-full justify-self-end self-end">
                      <FontAwesome5 name="medal" color={"#fff"} size={18} />
                    </View>
                  ) : (
                    <View className="size-12 bg-gray-500 justify-center items-center rounded-full justify-self-end self-end">
                      <FontAwesome5 name="medal" color={"#fff"} size={18} />
                    </View>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
