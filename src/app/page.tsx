import CorrectDoor from "./components/CorrectDoor";
import DoorsQuantity from "./components/DoorsQuantity";
import GameTitle from "./components/GameTitle";
import StartGame from "./components/StartGame";

export default function Home() {
	return (
		<div className="bg-stone-800 h-screen flex justify-center items-center">
			<section className="w-80 h-80 grid grid-cols-2 grid-rows-2 gap-2">
				<GameTitle />
				<DoorsQuantity />
				<CorrectDoor />
				<StartGame />
			</section>
		</div>
	);
}
