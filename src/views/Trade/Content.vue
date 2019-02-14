<template>
    <div id="nav-tabs">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3 class="text-center md-display-3">Trade Platform</h3>
        <v-divider class="mx-5"  ></v-divider>
        <br />
        <br />
        <div class="md-layout md-alignment-top-center">
            <div class="md-layout-item  md-size-75 md-small-size-100">
                <nav-tabs-card no-label >
                    <template slot="content">
                        <md-tabs md-sync-route class="md-danger " md-alignment="centered" >

                            <md-tab id="tab-home" md-label="Stocks" md-icon="assessment" >
                                <stocks></stocks>
                            </md-tab>

                            <md-tab id="tab-pages" md-label="Portfolio" md-icon="work">
                                <portfolio></portfolio>
                            </md-tab>

                            <md-tab id="tab-posts" md-label="Settings" md-icon="build">
                                <p>I think that’s a responsibility that I have, to push
                                    possibilities, to show people, this is the level that things
                                    could be at. So when you get something that has the name Kanye
                                    West on it, it’s supposed to be pushing the furthest
                                    possibilities. I will be the leader of a company that ends up
                                    being worth billions of dollars, because I got the answers. I
                                    understand culture. I am the nucleus.</p>
                            </md-tab>
                        </md-tabs>
                    </template>
                </nav-tabs-card>
            </div>
        </div>
    </div>
</template>
<script>
import NavTabsCard from '../../components/cards/NavTabsCard'
import Stocks from './Stocks/Stocks'
import Portfolio from './Portfolio/Portfolio'
export default {
  components: {
    NavTabsCard,
    Stocks,
    Portfolio
  }
}
</script>
