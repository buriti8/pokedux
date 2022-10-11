import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
	return (
		<div className="PokemonList">
			{pokemons?.map((pokemon) => {
				return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
			})}
		</div>
	);
};

export default PokemonList;
