<template>
  <div class="shipcard">
    <div class="shipcard-header">
      <div class="shipcard-header-premium" v-if="data.is_premium">
        <div class="shipcard-header-title">
          <img style="width: 27px; height: 27px;flex-shrink:0;" :src="this.$wows.getShipIcon(data)"/>
          <div style="margin-left: 4px">{{
              tierStrings[data.tier]
            }} {{ $wows.getText(data.ship_id_str) }}
          </div>
        </div>
        <div class="shipcard-header-type">
          <div>{{
              tierStrings[data.tier]
            }}级 {{ getShipTypeString(data) }}
          </div>
        </div>
      </div>
      <div class="shipcard-header-normal" v-if="!data.is_premium">
        <div class="shipcard-header-title">
          <img style="width: 27px; height: 27px;flex-shrink:0;" :src="this.$wows.getShipIcon(data)"/>
          <div style="margin-left: 4px">{{
              tierStrings[data.tier]
            }} {{ $wows.getText(data.ship_id_str) }}
          </div>
        </div>
        <div class="shipcard-header-type">
          <div>{{
              tierStrings[data.tier]
            }}级 {{ getShipTypeString(data) }}
          </div>
        </div>
      </div>
    </div>
    <div class="shipcard-content">
      {{ $wows.getText(data.ship_id_str + '_DESCR') }}
    </div>
    <div class="shipcard-footer">
      <div class="shipcard-props" v-if="data.default_profile">
        <div class="shipcard-props-item" v-if="data.default_profile.armour.total > 0">
          <div style="z-index: 1000;position: absolute;height: 100%;width: 100%">
            <div class="shipcard-props-item-text">
              <div>存活性</div>
              <div>{{ data.default_profile.armour.total }}</div>
            </div>
          </div>
          <div class="shipcard-props-item-block" :style="{width:data.default_profile.armour.total+'%' }"></div>
        </div>
        <div class="shipcard-props-item" v-if="data.default_profile.weaponry.artillery > 0">
          <div style="z-index: 1000;position: absolute;height: 100%;width: 100%">
            <div class="shipcard-props-item-text">
              <div>火炮</div>
              <div>{{ data.default_profile.weaponry.artillery }}</div>
            </div>
          </div>
          <div class="shipcard-props-item-block" :style="{width:data.default_profile.weaponry.artillery+'%' }"></div>
        </div>
        <div class="shipcard-props-item" v-if="data.default_profile.weaponry.torpedoes > 0">
          <div style="z-index: 1000;position: absolute;height: 100%;width: 100%">
            <div class="shipcard-props-item-text">
              <div>鱼雷</div>
              <div>{{ data.default_profile.weaponry.torpedoes }}</div>
            </div>
          </div>
          <div class="shipcard-props-item-block" :style="{width:data.default_profile.weaponry.torpedoes+'%' }"></div>
        </div>
        <div class="shipcard-props-item" v-if="data.default_profile.weaponry.anti_aircraft > 0">
          <div style="z-index: 1000;position: absolute;height: 100%;width: 100%">
            <div class="shipcard-props-item-text">
              <div>对空防御</div>
              <div>{{ data.default_profile.weaponry.anti_aircraft }}</div>
            </div>
          </div>
          <div class="shipcard-props-item-block"
               :style="{width:data.default_profile.weaponry.anti_aircraft+'%' }"></div>
        </div>
        <div class="shipcard-props-item" v-if="data.default_profile.mobility.total > 0">
          <div style="z-index: 1000;position: absolute;height: 100%;width: 100%">
            <div class="shipcard-props-item-text">
              <div>机动性</div>
              <div>{{ data.default_profile.mobility.total }}</div>
            </div>
          </div>
          <div class="shipcard-props-item-block" :style="{width:data.default_profile.mobility.total+'%' }"></div>
        </div>
        <div class="shipcard-props-item" v-if="data.default_profile.concealment.total > 0">
          <div style="z-index: 1000;position: absolute;height: 100%;width: 100%">
            <div class="shipcard-props-item-text">
              <div>隐蔽性</div>
              <div>{{ data.default_profile.concealment.total }}</div>
            </div>
          </div>
          <div class="shipcard-props-item-block" :style="{width:data.default_profile.concealment.total+'%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShipCard",
  props: {
    shipData: {},
    shipID: 0,
  },
  data() {
    return {
      data: {},
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
  watch: {
    shipData: {
      handler(newValue, oldVallue) {
        if (newValue) {
          this.data = newValue
        } else {
          if (this.shipID !== 0) {
            this.getShipData()
          }
        }
      },
      immediate: true,
    }
  },
  methods: {
    getShipData() {
      this.$http.post(this.$wows.getAPIHost() + '/wows/encyclopedia/ships/', this.$qs.stringify({
        application_id: this.$env.VUE_APP_APPLICATION_ID,
        ship_id: this.shipID,
        language: 'zh-tw',
      })).then(response => {
        if (response.data.data[this.shipID]) {
          this.data = response.data.data[this.shipID]
        }
      })
    },
    getShipIcon(ship) {
      if (ship.type) {
        if (ship.is_premium && ship.is_premium === true) {
          return this.encyclopedia.ship_type_images[ship.type].image_premium
        } else {
          return this.encyclopedia.ship_type_images[ship.type].image_elite
        }
      }
    },
    getShipTypeString(ship) {
      if (ship.type === 'AirCarrier') {
        return '航空母舰'
      } else if (ship.type === 'Battleship') {
        return '战列舰'
      } else if (ship.type === 'Cruiser') {
        return '巡洋舰'
      } else if (ship.type === 'Destroyer') {
        return '驱逐舰'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.shipcard {
  background: #22373c;
  width: 400px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  .shipcard-header {
    padding: 8px;

    .shipcard-header-normal {
      color: #eee;

      .shipcard-header-title {
        display: flex;
        align-items: center;
        justify-content: left;
        overflow: hidden;
        font-weight: bolder;
        font-size: 25px;
      }

      .shipcard-header-type {
        font-size: 18px;
      }
    }

    .shipcard-header-premium {
      color: #FC8;

      .shipcard-header-title {
        display: flex;
        align-items: center;
        justify-content: left;
        overflow: hidden;
        font-weight: bolder;
        font-size: 25px;
      }

      .shipcard-header-type {
        font-size: 18px;
      }
    }
  }

  .shipcard-content {
    padding: 8px;
    color: #eee;
    font-size: 14px;
  }

  .shipcard-footer {
    .shipcard-props {
      background: #283d43;
    }

    .shipcard-props-item {
      margin-top: 2px;
      position: relative;
      height: 40px;

      .shipcard-props-item-text {
        display: flex;
        align-items: center;
        padding: 8px;
        justify-content: space-between;
        font-size: 18px;
        font-weight: bold;
        color: #eee;
      }

      .shipcard-props-item-block {
        background: #357466;
        position: absolute;
        width: 20px;
        height: 100%;
        top: 0;
      }
    }
  }
}
</style>
