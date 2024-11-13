"use client"

import { useActionState } from "react"
import { findDistance } from "./actions"

export default function Home() {
  const [distance, action] = useActionState(findDistance, 0)

  return (
    <>
      <form
        action={action}
        className="mx-auto mt-20 flex w-1/2 min-w-80 max-w-[36rem] flex-col gap-2"
      >
        <textarea
          name="input"
          required
          className="bg-background border-primary h-80 rounded border p-2"
        />

        <button className="bg-primary text-background rounded p-2">Go</button>
      </form>

      <p className="mt-2 text-center text-3xl">{distance.toFixed(2)}</p>
    </>
  )
}
