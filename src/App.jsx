import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import "./App.css";
import Loading from "./components/Loading";

import Logo from "./components/Logo";
import PokemonList from "./components/PokemonList";
import Searcher from "./components/Searcher";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

function App() {
	const pokemons = useSelector(
		(state) => state.data.pokemonsFiltered,
		shallowEqual
	);
	const loading = useSelector((state) => state.ui.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPokemonsWithDetails());
	}, []);

	return (
		<div className="App">
			<Logo />
			<Searcher />
			{loading ? <Loading /> : <PokemonList pokemons={pokemons} />}
		</div>
	);
}

export default App;
