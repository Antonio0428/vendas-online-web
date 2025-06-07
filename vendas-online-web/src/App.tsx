import { useState } from 'react';
import './App.css';
import { BemVindo } from './components/BemVindo';
import styled from 'styled-components';
import { Button} from 'antd';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BemVindo />
      <StyledLink tornBlue={count >= 4} className="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </StyledLink>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}
interface MudarCor4{
  tornBlue?: boolean;
}
const StyledLink = styled.div<MudarCor4>`
  color:  ${props => props.tornBlue ? "blue" : "pink"};
  font-weight: bold;
`;

export default App;
