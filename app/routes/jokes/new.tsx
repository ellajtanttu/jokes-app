import { Form } from "@remix-run/react"

export default function JokesNewRoute() {
  return (
    <div>
      <h2>Write your own joke:</h2>
      <Form method="post">
        <label>
          <p>Name:</p>
          <input
            type="text"
            name="name">
          </input>
        </label>
        <label>
          <p>Content:</p>
          <input
            type="text"
            name="content">
          </input>
        </label>
        <button type="submit" name="action" value="create">
          <p>Add Joke</p>
        </button>
      </Form >
    </div >
  )
}