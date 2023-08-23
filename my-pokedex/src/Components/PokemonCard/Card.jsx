import { CardContainer, DetailsPokemon, PokemonId, PokemonName, TypeOfPokemon } from "./styles";

function Card() {
    return(
        <CardContainer>
            <DetailsPokemon>
                <PokemonId>#ID</PokemonId>
                <PokemonName>Name</PokemonName>

                <TypeOfPokemon>
                    <PokemonType>
                        <TextPokemonType>Type</TextPokemonType>
                    </PokemonType>
                </TypeOfPokemon>
                <DetailsPokemonButton>Detalhes</DetailsPokemonButton>
            </DetailsPokemon>

            <AvatarPokemon>
                <imagePokemon/>
                <CapturarButton>Capturar/Remover</CapturarButton>
            </AvatarPokemon>
        </CardContainer>
    );
}
