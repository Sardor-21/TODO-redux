import React from 'react'
import Todos from './Containers/Todos/Todos';
import Container from "./Containers/Container/Container";
import { Provider } from 'react-redux';
import store from './Redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container>
          <Todos />
        </Container>
      </Provider>
    </div>
  );
}

export default App;
