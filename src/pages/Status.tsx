import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corporis aperiam possimus cumque repellendus magnam, ratione, officia maiores in beatae provident numquam quod temporibus distinctio harum laboriosam impedit enim blanditiis?" />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/jeanluca554.png" alt="Jean Luca" />
          <textarea name="" id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type='submit'>Answer</button>
      </form>


      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}


    </main>
  )
}