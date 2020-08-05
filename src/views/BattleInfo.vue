<template>
  <div class="battleinfo">
    <el-row>
      <el-col :span="12">
        <el-table
            :data="tableDataL.players"
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
            :data="tableDataR.players"
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
      tableDataL: {
        players: [],
      },
      tableDataR: {
        players: [],
      },
      playersData: new Map(),
      shipsData: new Map(),
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
    getShipData() {
      let players = this.battleData.vehicles
      let shipsIDString = ''
      players.forEach((value, index) => {
        shipsIDString = shipsIDString + value.shipId
        if (index < players.length - 1) {
          shipsIDString = shipsIDString + ','
        }
      })
      this.$http.post('https://api.worldofwarships.asia/wows/encyclopedia/ships/', this.$qs.stringify({
        application_id: this.$env.VUE_APP_APPLICATION_ID,
        ship_id: shipsIDString,
        fields: 'name',
        language: 'zh-cn',
      })).then(response => {
        let ships = response.data.data
        for (let shipID in ships) {
          this.shipsData.set(parseInt(shipID), ships[shipID])
        }
      })
    },
    getPlayerData() {
      let accountIDsString = ''
      let playersNameString = ''

      let players = this.battleData.vehicles
      this.playersData = new Map()
      players.forEach((value, index) => {
        this.playersData.set(value.name, {
          name: value.name,
          account_id: 0,
          shipId: value.shipId,
          relation: value.relation,
          ship: '',
          matches: '',
          winrate: '',
          avgdmg: '',
          ship_matches: '',
          ship_winrate: '',
          ship_avgdmg: '',
          private: false,
        })
        playersNameString = playersNameString + value.name
        if (index < players.length - 1) {
          playersNameString = playersNameString + ','
        }
      })
      this.$http.post('https://api.worldofwarships.asia/wows/account/list/', this.$qs.stringify({
        application_id: this.$env.VUE_APP_APPLICATION_ID,
        search: playersNameString,
        type: 'exact',
      })).then(response => {
        let data = response.data.data
        data.forEach((value, index) => {
          accountIDsString = accountIDsString + value.account_id
          let player = this.playersData.get(value.nickname)
          player.account_id = value.account_id
          this.$http.post('https://api.worldofwarships.asia/wows/ships/stats/', this.$qs.stringify({
            application_id: this.$env.VUE_APP_APPLICATION_ID,
            account_id: player.account_id,
            ship_id: player.shipId,
          })).then(response => {
            let playerData = response.data.data[value.account_id]
            let player = this.playersData.get(value.nickname)
            if (playerData) {
              player.ship_matches = playerData[0].pvp.battles
              player.ship_winrate = ((playerData[0].pvp.wins / playerData[0].pvp.battles) * 100).toFixed(2) + "%"
              player.ship_avgdmg = parseInt(((playerData[0].pvp.damage_dealt / playerData[0].pvp.battles) / 100)) * 100
            }
          })
          this.playersData.set(value.nickname, player)
          if (index < data.length - 1) {
            accountIDsString = accountIDsString + ','
          }
        })
        this.$http.post('https://api.worldofwarships.asia/wows/account/info/', this.$qs.stringify({
          application_id: this.$env.VUE_APP_APPLICATION_ID,
          account_id: accountIDsString,
        })).then(response => {
          let data = response.data.data
          for (let account_id in data) {
            let playerData = data[account_id]
            let player = this.playersData.get(playerData.nickname)
            if (playerData.statistics) {
              player.matches = playerData.statistics.pvp.battles
              player.winrate = ((playerData.statistics.pvp.wins / playerData.statistics.pvp.battles) * 100).toFixed(2) + "%"
              player.avgdmg = parseInt(((playerData.statistics.pvp.damage_dealt / playerData.statistics.pvp.battles) / 100)) * 100
            }
          }
        })
      })
    },
    createData() {
      this.tableDataL['players'] = []
      this.tableDataR['players'] = []
      this.playersData.forEach((value, index) => {
        if (this.shipsData.get(value.shipId)) {
          value.ship = this.shipsData.get(value.shipId).name
        }
        if (value.relation !== 2) {
          this.tableDataL.players.push(value)
        } else {
          this.tableDataR.players.push(value)
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
        this.getPlayerData()
        this.getShipData()
      }
      if (!this.lastStatus) {
        this.$notify.success({
          title: '已连接到对局',
          message: '对局数据获取中，请稍作等待',
          position: 'bottom-right',
          duration: 5000,
        });
      }
      this.createData()
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
