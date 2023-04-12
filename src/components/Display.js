import { useSelector } from "react-redux";


export function Display() {
    const gameIsPlaying = useSelector((state) => state.playing);
    return (
        <p className="display">{gameIsPlaying ? "jeu en cours" : "C'est la pause"}</p>
    )
}