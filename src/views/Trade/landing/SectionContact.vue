<template>
    <div class="main main-raised">
        <div class="section section-contacts text-center">
            <div class="container text-center ">
                <div class="md-layout text-center" >
                    <div class="md-layout-item md-size-50 md-xsmall-size-50 mx-auto text-center">
                        <form class="contact-form text-center">
                            <div class="md-layout text-center">
                                <div class="md-layout-item md-size-50">
                                    <md-field>
                                        <label>Your Name</label>
                                        <md-input v-model="name" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-50">
                                    <md-field>
                                        <label>Your Email</label>
                                        <md-input v-model="email" type="email"></md-input>
                                    </md-field>
                                </div>
                            </div>
                            <md-field maxlength="5">
                                <label>Your Message</label>
                                <md-textarea v-model="message"></md-textarea>
                            </md-field>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-33 mx-auto text-center">
                                    <br />

                                    <md-button class="md-success">Send Message</md-button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      message: null
    }
  }
}
</script>

<style scoped>

</style>
