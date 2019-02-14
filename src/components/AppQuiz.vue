<template>
    <div class="container align-center" style="content-align:center;">
        <div class="row" style="text-align:center;">
            <h1>App Quiz</h1>
        </div>
        <hr>
        <br>
        <div class="allign-content-center">
            <transition name="flip" mode="out-in">
                <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
            </transition>
        </div>
    </div>
</template>

<script>
import Answer from './AppQuiz/Answer.vue'
import Question from './AppQuiz/Question.vue'

export default {
  data () {
    return {
      mode: 'app-question'
    }
  },
  methods: {
    answered (isCorrect) {
      console.log('------------------------------------')
      console.log(isCorrect)
      console.log('------------------------------------')
      if (isCorrect) {
        this.mode = 'app-answer'
      } else {
        this.mode = 'app-question'
        alert('wrong, try again!')
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
}
</script>

<style>
    .flip-enter {
        /*transform: rotateY(0deg);*/
    }

    .flip-enter-active {
        animation: flip-in  0.5s ease-out forwards;
    }

    .flip-leave {
        /*transform: rotateY(0deg);*/
    }

    .flip-leave-active {
        animation: flip-out 0.5s ease-out forwards;
    }

    @keyframes flip-out {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

    @keyframes flip-in {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }
</style>
