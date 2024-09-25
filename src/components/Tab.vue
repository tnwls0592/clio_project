<template>
<div class="wrap">
  <div class="inner">
    <h1>카테고리</h1>
    <div class="tab" data-aos="fade-up"
    data-aos-duration="1500">
      <dl>
        <div class="button">
        <button v-for="(tab, index) in tabList" :key="index"
        @click.prevent="currentTab = index" :class="{'active' : currentTab === index}">
        {{ tab.name }}</button>
        </div>
        <dd v-if="currentTab === 0">
          <ul>
            <li><a href="javscript:void(0)"><img class="first" src="@/assets/img/tab1-1.gif" alt="1-1">
              <p><span class="gray">구달</span><br>
              [총 155ml] 청귤 비타C 잡티케어 세럼 더블기<br>
              <span class="bold">37,240</span><span class="gray"><del>49,000</del></span><span class="red">24%</span><br>
              <small>4.7 (46)</small>
              </p>    
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab2-1.gif" alt="2-1">
              <p><span class="gray">페리페라</span><br>
                [NEW 컬러] 잉크 더 벨벳<br>
              <span class="bold">8,000</span><span class="gray"><del>10,000</del></span><span class="red">20%</span><br>
              <small>4.7 (29)</small>
              </p>    
            </a></li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab3-1.gif" alt="3-1"></a>
              <p><span class="gray">힐링버드</span><br>
                울트라 프로틴 헤어오일 리치 150ml<br>
              <span class="bold">16,800</span><span class="gray"><del>28,000</del></span><span class="red">40%</span><br>
              <small>4.9 (208)</small>
              </p>  
            </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab4-1.gif" alt="4-1">
              <p><span class="gray">클리오</span><br>
                하이드로 메이크업 스폰지 (대)<br>
              <span class="bold">6,300</span><span class="gray"><del>9,000</del></span><span class="red">30%</span><br>
              <small>4.9 (126)</small>
              </p>  
            </a>
          </li>
          </ul>
        </dd>
        <dd v-if="currentTab === 1">
          <ul>
            <li><a href="javscript:void(0)"><img class="first" src="@/assets/img/tab1-1.gif" alt="1-1">
              <p><span class="gray">구달</span><br>
              [총 155ml] 청귤 비타C 잡티케어 세럼 더블기<br>
              <span class="bold">37,240</span><span class="gray"><del>49,000</del></span><span class="red">24%</span><br>
              <small>4.7 (46)</small>
              </p>    
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab1-2.gif" alt="1-2">
              <p><span class="gray">구달</span><br>
              청귤 비타C 잡티케어 세럼 한정기획(세럼30ml+크림40ml)<br>
              <span class="bold">19,900</span><span class="gray"><del>30,000</del></span><span class="red">34%</span><br>
              <small>4.0 (301)</small>
              </p>
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab1-3.gif" alt="1-3">
              <p><span class="gray">더마토리</span><br>
              히알샷 베리어 크림비5 1+1 기획 [70ml+70ml]<br>
              <span class="bold">27,000</span><span class="gray"><del>30,000</del></span><span class="red">10%</span><br>
              <small>4.2 (8)</small>
              </p>
            </a>
            </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab1-4.gif" alt="1-4">
              <p><span class="gray">구달</span><br>
              [NEW] 어성초 히알루론 수딩 토너<br>
              <span class="bold">16,500</span><span class="gray"><del>22,000</del></span><span class="red">25%</span><br>
              <small>5.0 (16)</small>
              </p>
              </a>
            </li>
          </ul>
        </dd>
        <dd v-if="currentTab === 2">
          <ul>
            <li><a href="javscript:void(0)"><img class="first" src="@/assets/img/tab2-1.gif" alt="2-1">
              <p><span class="gray">페리페라</span><br>
                [NEW 컬러] 잉크 더 벨벳<br>
              <span class="bold">8,000</span><span class="gray"><del>10,000</del></span><span class="red">20%</span><br>
              <small>4.7 (29)</small>
              </p>    
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab2-2.gif" alt="2-2">
              <p><span class="gray">페리페라</span><br>
                [1+1/NEW 컬러] 잉크 더 벨벳<br>
              <span class="bold">15,000</span><span class="gray"><del>20,000</del></span><span class="red">25%</span><br>
              <small>5.0 (2)</small>
              </p>    
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab2-3.gif" alt="2-3">
              <p><span class="gray">페리페라</span><br>
                [1+1/로즈닝 컬렉션] 잉크 더 에어리 벨벳<br>
              <span class="bold">15,000</span><span class="gray"><del>20,000</del></span><span class="red">25%</span><br>
              <small>5.0 (2)</small>
              </p>  
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab2-4.gif" alt="2-4">
              <p><span class="gray">클리오</span><br>
                [후로페샤날 청과] 쉬폰 블러 틴트<br>
              <span class="bold">12,300</span><span class="gray"><del>18,000</del></span><span class="red">32%</span><br>
              <small>5.0 (2)</small>
              </p>  
            </a>
          </li>
          </ul>
        </dd>
        <dd v-if="currentTab === 3">
          <ul>
            <li><a href="javscript:void(0)"><img class="first" src="@/assets/img/tab3-1.gif" alt="3-1">
              <p><span class="gray">힐링버드</span><br>
                울트라 프로틴 헤어오일 리치 150ml<br>
              <span class="bold">16,800</span><span class="gray"><del>28,000</del></span><span class="red">40%</span><br>
              <small>4.9 (208)</small>
              </p>  
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab3-2.gif" alt="3-2">
              <p><span class="gray">힐링버드</span><br>
                울트라 프로틴 인텐시브 앰플팩 샴푸 750ml<br>
              <span class="bold">11,900</span><span class="gray"><del>22,000</del></span><span class="red">46%</span><br>
              <small>4.9 (118)</small>
              </p>  
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab3-3.gif" alt="3-3">
              <p><span class="gray">힐링버드</span><br>
                비포 샴푸 퍼스트 헤어팩 기획세트<br>
              <span class="bold">29,800</span><br>
              <small>4.6 (236)</small>
              </p>  
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab3-4.gif" alt="3-4">
              <p><span class="gray">힐링버드</span><br>
                [NEW] 리바이브 노워시 트리트먼트 딥모이스처 기획<br>
              <span class="bold">18,900</span><span class="gray"><del>27,000</del></span><span class="red">30%</span><br>
              <small>4.9 (166)</small>
              </p>  
            </a>
          </li>
          </ul>
        </dd>
        <dd v-if="currentTab === 4">
          <ul>
            <li><a href="javscript:void(0)"><img class="first" src="@/assets/img/tab4-1.gif" alt="4-1">
              <p><span class="gray">클리오</span><br>
                하이드로 메이크업 스폰지 (대)<br>
              <span class="bold">6,300</span><span class="gray"><del>9,000</del></span><span class="red">30%</span><br>
              <small>4.9 (126)</small>
              </p>  
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab4-2.gif" alt="4-2">
              <p><span class="gray">클리오</span><br>
                킬커버 스킨픽서 쿠션퍼프<br>
              <span class="bold">2,000</span><br>
              <small>4.2 (166)</small>
              </p>  
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab4-3.gif" alt="4-3">
              <p><span class="gray">심플레인</span><br>
                심플레인 래쉬 컬러<br>
              <span class="bold">8,400</span><span class="gray"><del>12,000</del></span><span class="red">30%</span><br>
              <small>4.5 (34)</small>
              </p>  
            </a>
          </li>
            <li><a href="javscript:void(0)"><img src="@/assets/img/tab4-4.gif" alt="4-4">
              <p><span class="gray">클리오</span><br>
                [1+1] 하이드로 메이크업 스펀지 오리지널<br>
              <span class="bold">9,000</span><span class="gray"><del>18,000</del></span><span class="red">50%</span><br>
              <small>4.9 (53)</small>
              </p>  
            </a>
          </li>
          </ul>
        </dd>
      </dl>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
      currentTab: 0,
      tabList: [
        {name:"전체"},
        {name:"스킨케어"},
        {name:"메이크업"},
        {name:"헤어/바디/펫"},
        {name:"미용소품"}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  padding: 10px 0;
  }
.tab {
  width: 100%;
  height: 550px;
  dl {
    display: flex;
    width: 100%;
    position: relative;
    .button {
      position: absolute;
      top: 20px;
      left: 0;
      button {
        border: 2px solid #ccc;
        font-weight: bold;
        color: #aaa;
        width: 100px;
        height: 40px;
        border-radius: 25px;
        background: #fff;
        margin-right: 15px;
        box-sizing: border-box;
        &.active {
          border: 2px solid #ff597b;
          color: #ff597b;
          font-weight: bold;
          box-sizing: border-box;
        }
      }
    }
    dd {
      width: 100%;
      height: 500px;
      position: absolute;
      left: 0;
      top: 90px;
      ul {
        display: flex;
        justify-content: space-between;
      }
    }
    dd.hidden {
      display: none;
    }
  }
  p {
    line-height: 1.3rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 150px;
    width: 250px;
    .gray {
      color: gray;
      padding-right: 5px;
    }
    .red {
      color: #e53030;
      font-size: 0.9rem;
      font-weight: bold;
    }
    .bold {
      font-weight: bold;
      font-size: 1rem;
      padding-right: 5px;
    }
    small {

    }
    small::before {
      content: '⭐  ';
      color: #eaca12;
      font-size: 0.6rem;
    }
  }  
}
  .first {
    width: 350px;
    height: 350px;
  }
  img {
    width: 280px;
    height: 280px;
  }
  img:hover {
    opacity: 0.8;
  }
 
 @media(max-width:767px) {
  .wrap {
    overflow: hidden;
    .tab {
    padding-left: 30px;
    padding-right: 30px;
    height: 550px;
    dl {
      .button {
        display: flex;
        button {
          width: 75px;
          font-size: 0.7rem;
        }
      }
      dd {
        overflow-x: scroll;
        height: 350px;
        &::-webkit-scrollbar {
          height: 7.5px;
        }
        &::-webkit-scrollbar-track {
          background-color: #eee;
          border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 5px;
        }
        &::-webkit-scrollbar-thumb:hover {
          background-color: #ff597b;
        }
        ul:not(:first-child) {
          display: flex;
          justify-content: space-between;
          li {
            width: 200px;
            margin-left: 30px;
            a {
              p {
                line-height: 1.3rem;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                height: 150px;
                width: 200px;
              }
            }
          }
        }
    }
  }
}
  .first {
    width: 200px;
    height: 220px;
    margin-right: 30px;
  }
  img {
    width: 200px;
    height: 220px;
    margin-right: 30px;
  }
  p {
    height: 100px;
    width: 200px;

  }
}
}
</style>