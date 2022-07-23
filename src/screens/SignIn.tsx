import { VStack, Heading, Icon, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";

import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

import Logo from "../assets/logo_primary.svg";
import { useState } from "react";

export default function SignIn() {
	const { colors } = useTheme();
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");

	return (
		<VStack flex={1} alignItems={"center"} bg={"gray.600"} px={8} pt={24}>
			<Logo />
			<Heading color={"gray.100"} fontSize={"xl"} mt={20} mb={6}>
				Acesse sua conta
			</Heading>

			<Input
				placeholder="E-Mail"
				mb={4}
				InputLeftElement={
					<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />
				}
				_focus={{
					borderWidth: 1,
					borderColor: "green.500",
					bg: "gray.700",
				}}
				onChangeText={setUser}
			/>
			<Input
				placeholder="Senha"
				InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />}
				mb={8}
				_focus={{
					borderWidth: 1,
					borderColor: "green.500",
					bg: "gray.700",
				}}
				secureTextEntry
				onChangeText={setPassword}
			/>
			<Button title="Entrar" w={"full"} />
		</VStack>
	);
}
