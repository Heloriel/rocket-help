import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { ROCKETSEAT } from "./src/styles/theme";

import Loading from "./src/components/Layout/Loading";

import { Routes } from "./src/routes";

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<NativeBaseProvider theme={ROCKETSEAT}>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			{fontsLoaded ? <Routes /> : <Loading />}
		</NativeBaseProvider>
	);
}
