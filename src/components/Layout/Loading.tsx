import { Center, Spinner } from "native-base";
export default function Loading() {
	return (
		<Center flex={1} bg={"gray.600"}>
			<Spinner size={"lg"} />
		</Center>
	);
}
