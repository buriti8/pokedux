import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";

import { setFavorite } from "../slices/dataSlice";

import "./PokemonList.css";

import StarButton from "./StarButton";

const PokemonCard = ({ pokemon }) => {
	const dispatch = useDispatch();

	const description = pokemon.types.map((type) => type.type.name).join(", ");

	const handleOnFavorite = () => {
		dispatch(setFavorite({ pokemonId: pokemon.id }));
	};

	return (
		<Card
			title={pokemon.name}
			//cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
			cover={
				<img
					src={pokemon?.sprites?.other?.dream_world?.front_default}
					alt={pokemon.name}
					height={300}
					style={{ padding: 10 }}
				/>
			}
			extra={
				<StarButton
					isFavorite={pokemon.favorite}
					onClick={handleOnFavorite}
				/>
			}
		>
			<Meta description={description} />
		</Card>
	);
};

export default PokemonCard;
