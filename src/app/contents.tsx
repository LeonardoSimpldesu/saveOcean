import { FlatList, Image, ImageBackground, Text, View } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { Link } from "expo-router";
import { useState, useEffect } from "react";
import { api } from "../api/api.js";

interface IContents {
  userId: number,
  contents: {
    title: string,
    saved: boolean,
    blocked: boolean,
    certified: boolean,
    points: number,
    image: string
    algasProgress: number
  }[]
}

export default function Contents() {
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

  const image150 = {
    uri: "https://images.unsplash.com/photo-1559825481-12a05cc00344?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
  const image1 = require(`@/assets/image1.jpg`)
  const image2 = require(`@/assets/image2.jpg`)
  const image3 = require(`@/assets/image3.jpg`)
  function returnImage(image: string) {
    switch (image) {
      case 'image1':
        return image1
      case 'image2':
        return image2
      case 'image3':
        return image3
      default:
        return image150
    }
  }

  return (
    <View className="flex-1 w-full pt-10 bg-background">
      <View className="flex-row justify-between items-center px-6 mb-4">
        <Link href="/">
          <Feather name="arrow-left" size={40} color={colors.primary} />
        </Link>
        <Text className='text-xl font-bold'>Seu Oceano</Text>
        <View className="flex-row items-center gap-4">
          <FontAwesome5 name="coins" size={20} color={colors.primary} />
          <Text className="font-bold text-lg">350</Text>
        </View>
      </View>
      <FlatList
        data={contents?.contents}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const porcentagem = item.algasProgress * 20
          return (
            <View className="w-full flex-row mb-6 px-5">
              <View className="p-4 gap-2 bg-primary/50 justify-center items-center mx-2 rounded-lg">
                <ImageBackground
                  source={returnImage(item.image)}
                  resizeMode="cover"
                  className="h-28 w-24 justify-end items-end mx-2"
                >
                  {item.blocked ? <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome5 name="lock" size={20} color={'#fff'} />
                  </View> : ''}
                </ImageBackground>
                <View className="w-24 h-3 rounded-full bg-gray-500 overflow-hidden">
                  <View className="h-3 bg-blue-500" style={{ width: `${porcentagem}%` }}></View>
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
                      <Text className="text-white font-bold ml-2"> {item.points} </Text>
                    </View>
                    {item.algasProgress === 3 ? <View className="flex-row">
                      <Image
                        source={require("@/assets/seaweed.png")}
                        className="size-4"
                      />
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
                    </View> : <View className="flex-row">

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
                      <Image
                        source={require("@/assets/seaweed-black.png")}
                        className="size-4"
                      />
                      <Image
                        source={require("@/assets/seaweed-black.png")}
                        className="size-4"
                      />
                    </View>}

                  </View>
                  {item.certified ? (
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
