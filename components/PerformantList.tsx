import React, { useMemo, useState } from 'react';

type JSONObject = { [key: string]: JSONValue } | JSONValue[]
type JSONValue = string | number | boolean | JSONObject

export const PerformantList = <T extends JSONObject, U = number | string>({
  items,
  renderItem
}: {
  items: {
    uid: U,
    value: T
  }[],
  renderItem: (item: T, index: number) => JSX.Element
}): JSX.Element => {
  // selected is stored as sorted JSON array of uids
  const [selectedList, setSelectedList] = useState("[]")
  const selectedSet = useMemo(() => new Set<U>(JSON.parse(selectedList)), [selectedList])
  const toggleUID = (uid: U) => {
    if (selectedSet.has(uid)) {
      selectedSet.delete(uid)
    } else {
      selectedSet.add(uid)
    }
    setSelectedList(JSON.stringify([...selectedSet.values()].sort()))
  }

  return <div>
    Selected: {selectedList}
    <hr />
    {
      items.map((item, index) => (
        <div key={item.uid + ""}>
          {renderItem(item.value, index)}
        </div>
      ))
    }
  </div>
}
