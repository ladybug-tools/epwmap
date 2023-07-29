import React from "react"

import { EpwMap as EpwMapComponent } from "pollination-react-io"

export const App: React.VFC = () => {
  return (
    <EpwMapComponent 
      showLegend={true}
      onCopy={undefined}
      enableCopyToClipboard={true}
    />
  )
}

export default App