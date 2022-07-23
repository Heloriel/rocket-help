import { NativeBaseProvider, StatusBar } from "native-base";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";

import { ROCKETSEAT } from "./src/styles/theme";

import Loading from "./src/components/Layout/Loading";

import SignIn from "./src/screens/SignIn";
import Home from "./src/screens/Home";
import Register from "./src/screens/Register";
import Details from "./src/screens/Details";

export default function App() {
	const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

	return (
		<NativeBaseProvider theme={ROCKETSEAT}>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			{fontsLoaded ? <Details /> : <Loading />}
		</NativeBaseProvider>
	);
}
