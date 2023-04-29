import styled from "styled-components";
import Question from "./components/Question";
import { dummy } from "./questionDummy";

function App() {
  return (
   <RootWarap>
      {dummy.map((item) => (
        <Question key={item.idx} title={item.title} questionList={item.questionList} />
      
       ) )
      
      }
   </RootWarap>
  );
}

export default App;

const RootWarap = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;

  left: 50%;
  transform: translate(-50%, 0);

  background: #fff;

  padding: 20px;
`;
