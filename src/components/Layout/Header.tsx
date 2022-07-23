import { Heading, HStack, IconButton, StyledProps, useTheme } from "native-base";
import { useNavigation } from "@react-navigation/native";

import { CaretLeft } from "phosphor-react-native";

type Props = StyledProps & {
	title: string;
};

export function Header({ title, ...rest }: Props) {
	const { colors } = useTheme();
	const navigation = useNavigation();

	return (
		<HStack w="full" justifyContent={"space-between"} alignItems={"center"} bg={"gray.600"} pb={6} pt={12} {...rest}>
			<IconButton
				icon={<CaretLeft color={colors.gray[200]} size={24} />}
				ml={4}
				onPress={() => navigation.goBack()}
				_pressed={{
					bg: "gray.600",
				}}
			/>
			<Heading color={"gray.100"} textAlign={"center"} fontSize="lg" flex={1} ml={-10}>
				{title}
			</Heading>
		</HStack>
	);
}
