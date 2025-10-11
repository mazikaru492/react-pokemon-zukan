// src/components/PokemonTypeLabel.tsx
import React from 'react';
import { pokemonTypesMap } from '../pokemonTypesMap';

type PokemonTypeLabelProps = {
    type: string;
};

const PokemonTypeLabel: React.FC<PokemonTypeLabelProps> = ({ type }) => {
    const typeInfo = pokemonTypesMap.find((t) => t.jaType === type);
    const backgroundColor = typeInfo ? typeInfo.color : '#A8A878';

    return (
        <span
            className="px-3 py-1 text-white rounded-md text-sm font-semibold text-center"
            style={{ backgroundColor }}
        >
            {type}
        </span>
    );
};

export default PokemonTypeLabel;

