import { Text } from './typography/Text/Text';
import { Header } from './typography/Header/Header';

function App() {
  return (
    <section>
      <Text>Hello</Text>
      <Text fontWeight="bold">bold</Text>
      <Text size="400" fontWeight="bold">
        Bigger bold
      </Text>
      <Header variant="h1">I'm a h1 title</Header>
      <Header variant="h2">I'm a h2 title</Header>
      <Header variant="h3">I'm a h3 title</Header>
      <Header variant="h4">I'm a h4 title</Header>
    </section>
  );
}

export default App;
