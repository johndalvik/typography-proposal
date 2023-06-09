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
      <Header variant="h1">I'm a title</Header>
    </section>
  );
}

export default App;
