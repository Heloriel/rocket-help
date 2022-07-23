import { VStack } from "native-base";

import { Header } from "../components/Layout/Header";
import { Input } from "../components/Input/Input";
import { Button } from "../components/Button/Button";

export default function Register() {
	return (
		<VStack flex={1} p={6} bg={"gray.600"}>
			<Header title="Nova Solicitação" />
			<Input
				placeholder="Número do Patrimônio"
				_focus={{
					borderWidth: 1,
					borderColor: "green.500",
					bg: "gray.700",
				}}
			/>
			<Input
				placeholder="Descrição do Problema"
				mt={5}
				flex={1}
				textAlignVertical={"top"}
				multiline
				_focus={{
					borderWidth: 1,
					borderColor: "green.500",
					bg: "gray.700",
				}}
			/>
			<Button title="Cadastrar" mt={5} />
		</VStack>
	);
}
