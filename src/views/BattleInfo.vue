<template>
  <div class="battleinfo">
    <div class="battleinfo-table">
      <el-table
          :data="tableDataL"
          style="width: 100%"
          :cell-style="tableCellStyle"
          :header-cell-style="tableHeaderCellStyleL">
        <el-table-column label="我的团队">
          <el-table-column
              prop="displayName"
              label="玩家昵称"
              width="200"
              :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
              prop="ship.name"
              label="使用船只"
              width="200"
              :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div style="display:flex;align-items: center;justify-content:left;overflow: hidden;">
                <el-image style="width: 24px; height: 24px;flex-shrink:0;" :src="scope.row.shipIconURL"></el-image>
                <span style="margin-left: 4px" v-if="scope.row.ship.is_premium">{{
                    tierStrings[scope.row.ship.tier]
                  }} {{ scope.row.ship.name }}</span>
                <span style="margin-left: 4px" v-if="!scope.row.ship.is_premium">{{
                    tierStrings[scope.row.ship.tier]
                  }} {{ scope.row.ship.name }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              prop="matches"
              label="匹配次数"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="winrate"
              label="胜率"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="avgdmg"
              label="场均伤害"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="ship_matches"
              label="船只次数"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="ship_winrate"
              label="船只胜率"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="ship_avgdmg"
              label="船只场均"
              width="80">
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
    <div class="battleinfo-table">
      <el-table
          :data="tableDataR"
          style="width: 100%"
          :cell-style="tableCellStyle"
          :header-cell-style="tableHeaderCellStyleR">
        <el-table-column label="敌军">
          <el-table-column
              prop="displayName"
              label="玩家昵称"
              width="200"
              :show-overflow-tooltip="true"
          >
          </el-table-column>
          <el-table-column
              label="使用船只"
              width="200"
              :show-overflow-tooltip="true">
            <template slot-scope="scope">
              <div style="display:flex;align-items: center;justify-content:left;overflow: hidden;">
                <el-image style="width: 24px; height: 24px;flex-shrink:0;" :src="scope.row.shipIconURL"></el-image>
                <span style="margin-left: 4px" v-if="scope.row.ship.is_premium">{{
                    tierStrings[scope.row.ship.tier]
                  }} {{ scope.row.ship.name }}</span>
                <span style="margin-left: 4px" v-if="!scope.row.ship.is_premium">{{
                    tierStrings[scope.row.ship.tier]
                  }} {{ scope.row.ship.name }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              prop="matches"
              label="匹配次数"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="winrate"
              label="胜率"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="avgdmg"
              label="场均伤害"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="ship_matches"
              label="船只次数"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="ship_winrate"
              label="船只胜率"
              width="80">
          </el-table-column>
          <el-table-column
              align="center"
              prop="ship_avgdmg"
              label="船只场均"
              width="80">
          </el-table-column>
        </el-table-column>
      </el-table>
    </div>
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

      tierStrings: {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
      },
      encyclopedia: JSON.parse(localStorage.getItem('encyclopedia')),
    }
  },
  mounted() {
    this.getBattleData()
  },
  methods: {
    tableCellStyle({row, column, rowIndex, columnIndex}) {
      if (row.private) {
        return {
          'background': "#333",
          'color': "#DDD",
          'font-weight': 'bold',
        }
      }
      if (columnIndex == 0 && row.relation === 0) {
        return {
          'background': "#555",
          'color': "#FC8",
          'font-weight': 'bold',
        }
      }
      if (columnIndex == 0) {
        return {
          'background': "#555",
          'color': "#DDD",
          'font-weight': 'bold',
        }
      }
      if (columnIndex == 1) {
        if (row.ship.is_premium) {
          return {
            'background': "#555",
            'color': "#FC8",
            'font-weight': 'bold',
          }
        } else {
          return {
            'background': "#555",
            'color': "#DDD",
            'font-weight': 'bold',
          }
        }
      }
      return {
        'background': "#555555FF",
        'color': "#DDD",
      }
    },
    tableHeaderCellStyleL({row, rowIndex, columnIndex}) {
      if (rowIndex === 0 && columnIndex === 0)
        return {
          'background': "#67C23A",
          'color': "#FFFFFF",
          'font-size': "24px",
        }
      if (rowIndex === 1) {
        return {
          'background': "rgb(225, 243, 216)",
          'color': "#333333",
        }
      }
      return ''
    },
    tableHeaderCellStyleR({row, rowIndex, columnIndex}) {
      if (rowIndex === 0 && columnIndex === 0)
        return {
          'background': "#F56C6C",
          'color': "#FFFFFF",
          'font-size': "24px",
        }
      if (rowIndex === 1) {
        return {
          'background': "rgb(253, 226, 226)",
          'color': "#666666",
        }
      }
      return ''
    },
    // tableSummaryL(params) {
    //   console.log(params)
    //   return ['哈哈']
    // },
    getBattleData() {
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
      clearTimeout(this.timeout)
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
      let regex = /^:.+:$/
      players.forEach((player, index) => {
        if (!regex.test(player.name)) {
          this.playersMap.set(player.name, {
            name: player.name,
            clan: '',
            displayName: '',
            accountID: 0,
            shipID: player.shipId,
            relation: player.relation,
            ship: {},
            shipIconURL: '',
            typeRank: 0,
            tierRank: 0,
            nationRank: 0,
            matches: '',
            winrate: '',
            avgdmg: '',
            ship_matches: '',
            ship_winrate: '',
            ship_avgdmg: '',
            private: false,
          })
        } else {
          this.playersMap.set(player.name, {
            name: player.name,
            clan: '',
            displayName: '',
            accountID: 0,
            shipID: player.shipId,
            relation: player.relation,
            ship: {},
            shipIconURL: '',
            typeRank: 0,
            tierRank: 0,
            nationRank: 0,
            matches: '电脑',
            winrate: '电脑',
            avgdmg: '电脑',
            ship_matches: '电脑',
            ship_winrate: '电脑',
            ship_avgdmg: '电脑',
            private: true,
          })
        }
      })
      this.getPlayersData()
      this.getShipsData()
    },
    /*获取玩家数据*/
    getPlayersData() {
      let accountIDsString = ''
      let playersNameString = ''

      let regex = /^:.+:$/
      this.playersMap.forEach((player, index) => {
        if (!regex.test(player.name)) {
          playersNameString = playersNameString + player.name + ','
        }
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
        //获取军团信息
        this.playersMap.forEach((player, index) => {
          if (!regex.test(player.name)) {
            accountIDsString = accountIDsString + player.accountID + ','
          }
        })
        this.playersMap.forEach((player, index) => {
          if (!regex.test(player.name)) {
            this.$http.post('https://api.worldofwarships.asia/wows/clans/accountinfo/', this.$qs.stringify({
              application_id: this.$env.VUE_APP_APPLICATION_ID,
              account_id: player.accountID,
              extra: 'clan',
              fields: 'clan.tag',
            })).then(response => {
              if (response.data.data[player.accountID]) {
                let clan = response.data.data[player.accountID].clan
                if (clan) {
                  player.clan = clan.tag
                }
              }
            })
          }
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
              if (player.matches === 0) {
                player.winrate = '0%'
                player.avgdmg = 0
              } else {
                player.winrate = this.$util.calculatedPercentString(playerData.statistics.pvp.wins, playerData.statistics.pvp.battles, 2)
                player.avgdmg = parseInt(((playerData.statistics.pvp.damage_dealt / playerData.statistics.pvp.battles) / 100)) * 100
              }
              player.private = false
            } else {
              player.matches = '无数据'
              player.winrate = '无数据'
              player.avgdmg = '无数据'
              player.private = true
            }
          }
          this.formatData()
        })
        this.playersMap.forEach((player, index) => {
          if (!regex.test(player.name)) {
            this.$http.post('https://api.worldofwarships.asia/wows/ships/stats/', this.$qs.stringify({
              application_id: this.$env.VUE_APP_APPLICATION_ID,
              account_id: player.accountID,
              ship_id: player.shipID,
            })).then(response => {
              let playerData = response.data.data[player.accountID]
              if (playerData) {
                player.ship_matches = playerData[0].pvp.battles
                if (player.ship_matches === 0) {
                  player.ship_winrate = '0%'
                  player.ship_avgdmg = 0
                } else {
                  player.ship_winrate = this.$util.calculatedPercentString(playerData[0].pvp.wins, playerData[0].pvp.battles, 2)
                  player.ship_avgdmg = parseInt(((playerData[0].pvp.damage_dealt / playerData[0].pvp.battles) / 100)) * 100
                }
                player.private = false
              } else {
                player.ship_matches = '无数据'
                player.ship_winrate = '无数据'
                player.ship_avgdmg = '无数据'
                player.private = true
              }
              this.formatData()
            })
          }
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
        language: 'zh-cn',
      })).then(response => {
        let ships = response.data.data
        //获取中文翻译数据
        let zh_CN = JSON.parse(localStorage.getItem('zh_CN'))
        for (let shipID in ships) {
          if (zh_CN && zh_CN[ships[shipID].ship_id_str]) {
            //船名中文化
            ships[shipID].name = zh_CN[ships[shipID].ship_id_str]
          }
          this.shipsMap.set(parseInt(shipID), ships[shipID])
        }
        this.formatData()
      })
    },
    /*后续处理数据*/
    formatData() {
      this.tableDataL = []
      this.tableDataR = []

      let tempTabelData = [], tempTableDataL = [], tempTableDataR = []

      this.playersMap.forEach((player, index) => {
        let ship = this.shipsMap.get(player.shipID)
        if (player.clan) {
          player.displayName = '[' + player.clan + ']' + player.name
        } else {
          player.displayName = player.name
        }
        if (ship) {
          player.ship = ship
          if (ship.nation === 'usa') {
            player.rank = 0
          } else if (ship.nation === 'uk') {
            player.rank = 1
          } else if (ship.nation === 'france') {
            player.rank = 2
          } else if (ship.nation === 'germany') {
            player.rank = 3
          } else if (ship.nation === 'italy') {
            player.rank = 4
          } else if (ship.nation === 'japan') {
            player.rank = 5
          } else if (ship.nation === 'ussr') {
            player.rank = 6
          } else if (ship.nation === 'pan_asia') {
            player.rank = 7
          } else if (ship.nation === 'europe') {
            player.rank = 8
          } else if (ship.nation === 'pan_america') {
            player.rank = 9
          }
          if (ship.type === 'AirCarrier') {
            player.typeRank = 0
          } else if (ship.type === 'Battleship') {
            player.typeRank = 1
          } else if (ship.type === 'Cruiser') {
            player.typeRank = 2
          } else if (ship.type === 'Destroyer') {
            player.typeRank = 3
          }
          player.tierRank = player.ship.tier
        }
        if (ship.is_premium) {
          player.shipIconURL = this.encyclopedia.ship_type_images[ship.type].image_premium
        } else {
          player.shipIconURL = this.encyclopedia.ship_type_images[ship.type].image_elite
        }
        tempTabelData.push(player)
      })
      tempTabelData.forEach((player, index) => {
        if (player.relation !== 2) {
          tempTableDataL.push(player)
        } else {
          tempTableDataR.push(player)
        }
      })
      this.tableDataL = this.formartRank(tempTableDataL)
      this.tableDataR = this.formartRank(tempTableDataR)
    },
    /*对玩家按照类型，等级，国别进行排序*/
    formartRank(players) {
      let tempPlayers = players
      tempPlayers.sort((a, b) => {
        return a.typeRank - b.typeRank || b.tierRank - a.tierRank || a.nationRank - b.nationRank
      })
      return tempPlayers
    },
  }
}
</script>

<style lang="scss" scoped>
.battleinfo {
  display: flex;
  justify-content: center;
  //align-items: center;

  .battleinfo-table {
    margin: 8px;
  }
}
</style>
