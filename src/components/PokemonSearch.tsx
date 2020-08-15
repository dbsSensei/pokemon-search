import React, { Component } from "react";

export class PokemonSearch extends Component<{
  name: string;
  numberOfPokemons: number;
}> {
  render() {
    const { name, numberOfPokemons } = this.props;
    return (
      <div>
        <p>
          User {name} has {numberOfPokemons} Pokemons
        </p>
      </div>
    );
  }
}

export default PokemonSearch;
