<template>
  <div>
    <!-- 地图 -->
    <div id="map" style="width:100%;height:200px;"></div>
  </div>
</template>

<script>
  export default {
    mounted(){
      var map = new BMap.Map("map");    // 创建Map实例
          map.centerAndZoom(new BMap.Point(116.4,39.9), 11);  // 初始化地图,设置中心点坐标和地图级别
          //添加地图类型控件
          map.addControl(new BMap.MapTypeControl({
              mapTypes:[
                  BMAP_NORMAL_MAP,
                  BMAP_HYBRID_MAP
              ]}));
          map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
          map.enableScrollWheelZoom(true);
    }
  }
</script>

<style>
  #map{
    margin-bottom: 50px;
    padding-bottom: 50px;
  }
</style>
