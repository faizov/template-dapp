import { useStateMessage } from '@/app/hooks/use-read-state';
import { Container } from '@/components';
import { useAccount } from '@gear-js/react-hooks';
import { Button } from '@gear-js/vara-ui';
import { useState } from 'react';

export const Home = () => {
  const [count, setCount] = useState(0);
  const { account } = useAccount();
  const handleMessage = useStateMessage();

  return (
    <Container>
      <div>
        <h2>Count: {count}</h2>
        <br />
        <Button onClick={() => setCount(count + 1)} text="Count" />
      </div>
    </Container>
  );
};
