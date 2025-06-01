"use client"

import type { NextPage } from "next"
import { useForm } from "react-hook-form"
import { useChat } from "@ai-sdk/react"

const StoryPage: NextPage = () => {
  const methods = useForm({
    defaultValues: {
      language: "es",
      level: "A1",
      length: 100,
      about: "",
    },
  })

  const { messages, append } = useChat()

  const onSubmit = (data: {
    language: string
    level: string
    length: number
  }) => {
    append({
      role: "user",
      content: `Generate a story in ${data.language} at ${data.level} level with about ${data.length} words`,
    })
  }
  return (
    <div className="flex flex-col gap-4">
      <form
        className="flex flex-col gap-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex gap-2">
          <label htmlFor="language">Language: </label>
          <select
            id="language"
            className="border p-1 rounded"
            {...methods.register("language")}
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <div className="flex gap-2">
          <label htmlFor="level">Level: </label>
          <input
            type="text"
            id="level"
            placeholder="A1, B2..."
            className="border p-1 rounded"
            {...methods.register("level")}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="length">Length: </label>
          <input
            type="number"
            id="length"
            className="border p-1 rounded"
            {...methods.register("length")}
          />
        </div>
        <div className="flex gap-2">
          <label htmlFor="about">About: </label>
          <textarea
            id="about"
            rows={3}
            className="border p-1 rounded"
            placeholder="Long long time ago, there was a mouse whose name was duckie..."
            {...methods.register("about")}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
        >
          Generate
        </button>
      </form>
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <div key={message.id}>{message.content}</div>
        ))}
      </div>
    </div>
  )
}

export default StoryPage
