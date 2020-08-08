<template>
  <div class="home">
    <div class="home-body">
      <div class="home-header"
           style="background-image: url(https://wowsp-wows-sg.wgcdn.co/dcont/gskins_installed/097/images/097.jpg)">
        <div class="home-header-title">
          战舰新闻
        </div>
      </div>
      <div class="home-content">
        <el-card v-for="news in newsData" shadow="hover" :body-style="{ padding: '0px',height:'100%'}">
          <div class="news-body">
            <div class="news-header" :style="'background-image: url('+news.cover+')'">
              <div class="news-header-category">{{ news.category }}</div>
              <div class="news-header-date">{{ news.date }}</div>
            </div>
            <div class="news-content">
              <div class="news-content-title">{{ news.title }}</div>
              <br>
              <div class="news-content-description">{{ news.description }}</div>
            </div>
            <div class="news-content-link">
              <el-link type="primary" :href="'https://worldofwarships.asia'+news.link" target="_blank">查看更多<i
                  class="el-icon-view el-icon--right"></i>
              </el-link>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      newsData: [],
    }
  },
  mounted() {
    this.getNewsData(1)
  },
  methods: {
    getNewsData(page) {
      this.$http.get(
          'https://wows.128512.xyz/zh-sg/news/?page=' + page, {
            headers: {
              'X-Requested-With': 'XMLHttpRequest',
            }
          })
          .then(response => {
            let html = response.data
            html = html.replace(/[\s][\s]+/g, '').replace(/\n/g, '')
            let regexAll = /<article[\s\S]*?<\/article>/g
            let regex = /url\('(https:.+)'\).+news__category">(.+)<\/h4>.+"news__title">(.+)<\/h3>.+time-time-stamp='(.+)'time-human-time.+"news__description">(.+)<\/div><\/vue-clamping-text-wrapper>.+to="(.+)"><\/router-link>/
            let elements = html.match(regexAll)
            elements.forEach((value, index) => {
              let news = regex.exec(value)
              this.newsData.push({
                title: news[3],
                cover: news[1],
                timeStamp: news[4],
                date: moment.unix(news[4]).format('YYYY-MM-DD'),
                category: news[2],
                description: news[5],
                link: news[6],
              })
            })
            this.newsData.sort((a, b) => {
              return b.timeStamp - a.timeStamp
            })
            console.log(this.newsData)
          })
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;

  .home-body {
    width: 1600px;

    .home-header {
      width: 100%;
      height: 400px;
      background-size: cover;
      background-repeat: no-repeat;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;

      .home-header-title {
        font-size: 48px;
        font-weight: bolder;
        margin-left: 48px;
        margin-bottom: 48px;
      }
    }

    .home-content {
      display: grid;
      justify-items: center;
      grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
      grid-gap: 16px;

      .el-card {
        width: 376px;

        .news-body {
          height: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          .news-header {
            height: 232px;
            background-size: cover;
            background-repeat: no-repeat;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            color: #eee;
            font-size: 18px;
            font-weight: bold;

            :nth-child(1) {
              align-self: flex-start;
            }

            :nth-child(2) {
              align-self: flex-end;
            }

            .news-header-category {
              background: #f00;
              padding: 4px;
            }

            .news-header-date {
              background: #00000066;
              padding: 4px;
            }
          }

          .news-content {
            padding: 8px;
            display: flex;
            flex-direction: column;

            .news-content-title {
              font-size: 20px;
              font-weight: bold;
            }

            .news-content-description {
              font-size: 18px;
              color: #666;
            }
          }

          .news-content-link {
            margin: 8px;
            align-self: flex-end;
            justify-self: flex-end;
          }
        }
      }
    }
  }
}
</style>
