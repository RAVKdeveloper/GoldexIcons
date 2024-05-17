import React from "react";
import { LockIcon, UnLockIcon, KeyIcon, SpinnerIcon } from "../lib/main";

function App() {
  return (
    <div style={{ background: "black", padding: 20 }}>
      <LockIcon width={20} height={20} color="red" />
      <UnLockIcon width={20} height={20} color="white" />
      <KeyIcon width={50} height={50} />
      <SpinnerIcon width={20} height={20} color="white" />
    </div>
  );
}

export default App;
