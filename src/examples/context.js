//useContext "связывает" между собой различные строки кода в разных файлах ??? `требуется уточнение`

import React from "react";
import Main from "./main";
import Alert from "./alert/Alert";
import { AlertProvider } from "./alert/AlertContext"; 

function App() {

  return (
    <AlertProvider>
      <div className="container pt-3">
        <Alert  ></Alert>
        <Main toggle={() => {}} ></Main>
      </div>  
    </AlertProvider>
  )
}

export default App
