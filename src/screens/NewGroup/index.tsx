import { useState } from "react";
import { Highlight } from "@components/Highlight";
import { Container, Content, Icon } from "./style";
import { useNavigation } from "@react-navigation/native";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  function handleCreateGroup() {
    navigation.navigate("players", { group });
  }
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Noma da Turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  );
}
