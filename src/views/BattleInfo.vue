<template>
  <div class="battleinfo">
    <el-row>
      <el-col :span="12">
        <el-table
            :data="tableDataL"
            border
            style="width: 100%">
          <el-table-column
              prop="name"
              label="玩家昵称"
              width="200"
          >
          </el-table-column>
          <el-table-column
              prop="ship"
              label="使用船只"
              width="120">
          </el-table-column>
          <el-table-column
              prop="matches"
              label="匹配次数"
              width="80">
          </el-table-column>
          <el-table-column
              prop="winrate"
              label="胜率"
              width="80">
          </el-table-column>
          <el-table-column
              prop="avgdmg"
              label="场均伤害"
              width="80">
          </el-table-column>
          <el-table-column
              prop="ship_matches"
              label="船只次数"
              width="80">
          </el-table-column>
          <el-table-column
              prop="ship_winrate"
              label="船只胜率"
              width="80">
          </el-table-column>
          <el-table-column
              prop="ship_avgdmg"
              label="船只场均"
              width="80">
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12">
        <el-table
            :data="tableDataR"
            border
            style="width: 100%">
          <el-table-column
              prop="name"
              label="玩家昵称"
              width="200"
          >
          </el-table-column>
          <el-table-column
              prop="ship"
              label="使用船只"
              width="120">
          </el-table-column>
          <el-table-column
              prop="matches"
              label="匹配次数"
              width="80">
          </el-table-column>
          <el-table-column
              prop="winrate"
              label="胜率"
              width="80">
          </el-table-column>
          <el-table-column
              prop="avgdmg"
              label="场均伤害"
              width="80">
          </el-table-column>
          <el-table-column
              prop="ship_matches"
              label="船只次数"
              width="80">
          </el-table-column>
          <el-table-column
              prop="ship_winrate"
              label="船只胜率"
              width="80">
          </el-table-column>
          <el-table-column
              prop="ship_avgdmg"
              label="船只场均"
              width="80">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "BattleInfo",
  data() {
    return {
      battleData: {},
      lastBattleData: {},
      timeout: null,
      lastStatus: true,
      tableDataL: [],
      tableDataR: [],
      shipsMap: new Map(),
      playersMap: new Map(),
    }
  },
  mounted() {
    this.getBattleData()
  },
  methods: {
    getBattleData() {
      clearTimeout(this.timeout)
      this.$http.get('http://127.0.0.1:65000/tempArenaInfo.json')
          .then(response => {
            this.success(response)
          }).catch(error => {
        if (error.response) {
          if (error.response.status === 404) {
            this.errorBattle()
          }
        } else if (error.request) {
          this.errorServer()
        }
      })
    },
    success(response) {
      this.battleData = response.data
      if (this.battleData.dateTime !== this.lastBattleData.dateTime) {
        this.lastBattleData = this.battleData
        this.$notify.success({
          title: '已连接到对局',
          message: '对局数据获取中，请稍作等待',
          position: 'bottom-right',
          duration: 5000,
        });
        this.createPlayersMap()
      }
      if (!this.lastStatus) {
        this.$notify.success({
          title: '已连接到对局',
          message: '对局数据获取中，请稍作等待',
          position: 'bottom-right',
          duration: 5000,
        });
      }
      this.formatData()
      this.lastStatus = true
      this.setTimeout(1000)
    },
    errorServer() {
      this.$notify.error({
        title: '无法连接到游戏服务',
        dangerouslyUseHTMLString: true,
        message: '请确保数据服务已安装<br>如未安装可以<a href="/YojigenWowsInfoServerSetup.exe"><strong>点击这里下载</strong></a><br>如已安装可以<a href="YojigenWowsInfoServer://open"><strong>点击这里启动</strong></a>',
        position: 'bottom-right',
        duration: 10000,
      });
      this.lastStatus = false
      this.setTimeout(10000)
    },
    errorBattle() {
      this.$notify.warning({
        title: '无法找到对局',
        message: '若已开始对局，请您等待片刻',
        position: 'bottom-right',
        duration: 5000,
      });
      this.lastStatus = false
      this.setTimeout(5000)
    },
    setTimeout(time) {
      this.timeout = setTimeout(() => {
        if (this.$route.name === 'BattleInfo') {
          this.getBattleData()
        } else {
          clearTimeout(this.timeout)
        }
      }, time)
    },
    /*创建玩家数据表*/
    createPlayersMap() {
      this.playersMap = new Map()
      let players = this.battleData.vehicles
      players.forEach((player, index) => {
        this.playersMap.set(player.name, {
          name: player.name,
          accountID: 0,
          shipID: player.shipId,
          relation: player.relation,
          ship: '',
          matches: '',
          winrate: '',
          avgdmg: '',
          ship_matches: '',
          ship_winrate: '',
          ship_avgdmg: '',
          private: false,
        })
      })
      this.getPlayersData()
      this.getShipsData()
    },
    /*获取玩家数据*/
    getPlayersData() {
      let accountIDsString = ''
      let playersNameString = ''

      this.playersMap.forEach((player, index) => {
        playersNameString = playersNameString + player.name + ','
      })
      playersNameString = playersNameString.substr(0, playersNameString.length - 1)
      this.$http.post('https://api.worldofwarships.asia/wows/account/list/', this.$qs.stringify({
        application_id: this.$env.VUE_APP_APPLICATION_ID,
        search: playersNameString,
        type: 'exact',
      })).then(response => {
        let data = response.data.data
        data.forEach((value, index) => {
          let player = this.playersMap.get(value.nickname)
          player.accountID = value.account_id
        })
        this.playersMap.forEach((player, index) => {
          accountIDsString = accountIDsString + player.accountID + ','
        })
        accountIDsString = accountIDsString.substr(0, accountIDsString.length - 1)
        this.$http.post('https://api.worldofwarships.asia/wows/account/info/', this.$qs.stringify({
          application_id: this.$env.VUE_APP_APPLICATION_ID,
          account_id: accountIDsString,
        })).then(response => {
          let data = response.data.data
          for (let accountID in data) {
            let playerData = data[accountID]
            let player = this.playersMap.get(playerData.nickname)
            if (playerData.statistics) {
              player.matches = playerData.statistics.pvp.battles
              player.winrate = this.$util.calculatedPercentString(playerData.statistics.pvp.wins, playerData.statistics.pvp.battles, 2)
              player.avgdmg = parseInt(((playerData.statistics.pvp.damage_dealt / playerData.statistics.pvp.battles) / 100)) * 100
              player.private = false
            } else {
              player.matches = '无数据'
              player.winrate = '无数据'
              player.avgdmg = '无数据'
              player.private = true
            }
          }
        })
        this.playersMap.forEach((player, index) => {
          this.$http.post('https://api.worldofwarships.asia/wows/ships/stats/', this.$qs.stringify({
            application_id: this.$env.VUE_APP_APPLICATION_ID,
            account_id: player.accountID,
            ship_id: player.shipID,
          })).then(response => {
            let playerData = response.data.data[player.accountID]
            if (playerData) {
              player.ship_matches = playerData[0].pvp.battles
              player.ship_winrate = this.$util.calculatedPercentString(playerData[0].pvp.wins, playerData[0].pvp.battles, 2)
              player.ship_avgdmg = parseInt(((playerData[0].pvp.damage_dealt / playerData[0].pvp.battles) / 100)) * 100
              player.private = false
            } else {
              player.ship_matches = '无数据'
              player.ship_winrate = '无数据'
              player.ship_avgdmg = '无数据'
              player.private = true
            }
          })
        })
      })
    },
    /*获取船只数据*/
    getShipsData() {
      let shipsIDString = ''
      this.playersMap.forEach((player, index) => {
        shipsIDString = shipsIDString + player.shipID + ','
      })
      shipsIDString = shipsIDString.substr(0, shipsIDString.length - 1)
      this.$http.post('https://api.worldofwarships.asia/wows/encyclopedia/ships/', this.$qs.stringify({
        application_id: this.$env.VUE_APP_APPLICATION_ID,
        ship_id: shipsIDString,
        fields: 'name',
        language: 'zh-cn',
      })).then(response => {
        let ships = response.data.data
        for (let shipID in ships) {
          this.shipsMap.set(parseInt(shipID), ships[shipID])
        }
      })
    },
    /*后续处理数据*/
    formatData() {
      this.tableDataL = []
      this.tableDataR = []
      this.playersMap.forEach((player, index) => {
        if (this.shipsMap.size !== 0) {
          player.ship = this.shipsMap.get(player.shipID).name
        }
        if (player.relation !== 2) {
          this.tableDataL.push(player)
        } else {
          this.tableDataR.push(player)
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
</style>
