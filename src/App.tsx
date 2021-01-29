import React from "react";
import { Platformic } from "@platformic/web";
import { auth0Service } from "@platformic/auth0";
import { gitService } from "@platformic/git";

function App() {
  return (
    <Platformic
      providers={{
        auth: auth0Service({
          domain: "",
          clientId: "",
          redirectUri: "",
        }),
        storage: gitService({
          repo: "",
          create: true,
        }),
      }}
    />
  );
}

export default App;
