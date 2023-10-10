import { useState } from "react";
import { FlatList, View } from "react-native";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { ListEmpty } from "@components/ListEmpty";
import { ButtonIcon } from "@components/ButtonIcon";
import { PlayerCard } from "@components/PlayerCard";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";

export function Players() {
  const [team, setTeam] = useState("time A");
  const [players, setPlayers] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da Pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <HeaderList>
        <FlatList
          horizontal
          data={["time A", "time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
        />
        <NumbersOfPlayers> {players.length} </NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
      />

      <Button title="Remover turma" type="SECUNDARY" />
    </Container>
  );
}
