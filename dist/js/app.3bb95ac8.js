(function(){"use strict";var t={3369:function(t,e,a){var o=a(5130),i=(a(4114),a(782)),r=(0,i.y$)({state:{favorites:JSON.parse(localStorage.getItem("favorites"))||[],showLimitModal:!1,limitModalType:""},mutations:{ADD_FAVORITE(t,e){t.favorites.length<5?(t.favorites.push(e),localStorage.setItem("favorites",JSON.stringify(t.favorites))):(t.limitModalType="favorites",t.showLimitModal=!0)},REMOVE_FAVORITE(t,e){t.favorites=t.favorites.filter((t=>t.cityName!==e)),localStorage.setItem("favorites",JSON.stringify(t.favorites))},SET_FAVORITES(t,e){t.favorites=e,localStorage.setItem("favorites",JSON.stringify(e))},CLOSE_LIMIT_MODAL(t){t.showLimitModal=!1,t.limitModalType=""},SHOW_LIMIT_MODAL(t,e){t.limitModalType=e,t.showLimitModal=!0}},actions:{addFavorite({commit:t},e){t("ADD_FAVORITE",e)},removeFavorite({commit:t},e){t("REMOVE_FAVORITE",e)},setFavorites({commit:t},e){t("SET_FAVORITES",e)},closeLimitModal({commit:t}){t("CLOSE_LIMIT_MODAL")},showLimitModal({commit:t},e){t("SHOW_LIMIT_MODAL",e)}},getters:{favorites:t=>t.favorites,showLimitModal:t=>t.showLimitModal,limitModalType:t=>t.limitModalType}}),n=a(6768),s=a.p+"img/logo.db3a4734.png";const l={id:"app"},c=(0,n.Lk)("div",{class:"logo"},[(0,n.Lk)("img",{src:s,alt:"logo"})],-1);function d(t,e,a,o,i,r){const s=(0,n.g2)("router-link"),d=(0,n.g2)("router-view");return(0,n.uX)(),(0,n.CE)("div",l,[(0,n.Lk)("header",null,[(0,n.bF)(s,{to:"/"},{default:(0,n.k6)((()=>[c])),_:1}),(0,n.Lk)("nav",null,[(0,n.bF)(s,{to:"/"},{default:(0,n.k6)((()=>[(0,n.eW)("Главная")])),_:1}),(0,n.bF)(s,{to:"/favorites"},{default:(0,n.k6)((()=>[(0,n.eW)("Избранное")])),_:1})])]),(0,n.Lk)("main",null,[(0,n.bF)(d)])])}var u={name:"App"},h=a(1241);const m=(0,h.A)(u,[["render",d]]);var p=m,v=a(1387);const f=t=>((0,n.Qi)("data-v-6f6ab7e0"),t=t(),(0,n.jt)(),t),w=f((()=>(0,n.Lk)("h1",null,"Главная",-1))),y={key:0,class:"plus-icon"},g={key:0,class:"input-container"},C=["onClick"];function k(t,e,a,o,i,r){const s=(0,n.g2)("LoaderElem"),l=(0,n.g2)("CityAutocomplete"),c=(0,n.g2)("WeatherCard"),d=(0,n.g2)("TemperatureChart"),u=(0,n.g2)("ConfirmationModal"),h=(0,n.g2)("LimitExceededModal");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(s,{show:i.loading},null,8,["show"]),w,(0,n.Lk)("div",{class:"input-toggle",onClick:e[0]||(e[0]=(...t)=>r.toggleInput&&r.toggleInput(...t))},[i.showInput?(0,n.Q3)("",!0):((0,n.uX)(),(0,n.CE)("span",y,"+"))]),i.showInput?((0,n.uX)(),(0,n.CE)("div",g,[(0,n.bF)(l,{onSelectCity:r.onCitySelected},null,8,["onSelectCity"])])):(0,n.Q3)("",!0),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(i.weatherList,((t,e)=>((0,n.uX)(),(0,n.CE)("div",{key:e,class:"weather-chart-container"},[(0,n.bF)(c,{cityName:t.cityName,weatherData:t.weatherData,isFavorite:r.isFavorite(t.cityName),onToggleFavorite:e=>r.toggleFavorite(t)},null,8,["cityName","weatherData","isFavorite","onToggleFavorite"]),(0,n.bF)(d,{temperatureData:t.temperatureData},null,8,["temperatureData"]),(0,n.Lk)("button",{class:"delete-button",onClick:t=>r.confirmDelete(e)}," Удалить ",8,C)])))),128)),i.showModal?((0,n.uX)(),(0,n.Wv)(u,{key:1,title:"Подтверждение удаления",message:"Вы уверены, что хотите удалить этот город?",onConfirm:r.deleteBlock,onCancel:r.cancelDelete},null,8,["onConfirm","onCancel"])):(0,n.Q3)("",!0),t.showLimitModal?((0,n.uX)(),(0,n.Wv)(h,{key:2,title:"Лимит городов",message:"Вы достигли максимального количества городов.",onClose:r.closeLimitModal},null,8,["onClose"])):(0,n.Q3)("",!0)])}var L=a(4232);const F={class:"city-input"},I={key:0,class:"autocomplete-list"},M=["onClick"];function b(t,e,a,i,r,s){return(0,n.uX)(),(0,n.CE)("div",F,[(0,n.bo)((0,n.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>r.query=t),onInput:e[1]||(e[1]=(...t)=>s.onInput&&s.onInput(...t)),placeholder:"Введите город"},null,544),[[o.Jo,r.query]]),(0,n.bF)(o.eB,{name:"fade"},{default:(0,n.k6)((()=>[r.cities.length?((0,n.uX)(),(0,n.CE)("ul",I,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(r.cities,(t=>((0,n.uX)(),(0,n.CE)("li",{key:t.lat,onClick:e=>s.selectCity(t),class:"autocomplete-item"},(0,L.v_)(t.name)+", "+(0,L.v_)(t.country),9,M)))),128))])):(0,n.Q3)("",!0)])),_:1})])}var E={data(){return{query:"",cities:[]}},methods:{async onInput(){if(this.query.length>2)try{const t=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${this.query}&limit=5&appid=d4afeb7f2df1e4c2958dda920a7232b6`),e=await t.json();this.cities=e.map((t=>({name:t.name,country:t.country,lat:t.lat,lon:t.lon})))}catch(t){console.error("Ошибка при получении списка городов:",t)}else this.cities=[]},selectCity(t){this.query=`${t.name}, ${t.country}`,this.cities=[],this.$emit("selectCity",t)}}};const _=(0,h.A)(E,[["render",b],["__scopeId","data-v-022bc59a"]]);var D=_;const $={class:"weather-card"},O={class:"weather-info"},A={key:0},X={class:"temp"},T={key:1},x={key:2},N={key:3},S={key:0,class:"icon"},j={key:1,class:"icon"};function Q(t,e,a,o,i,r){return(0,n.uX)(),(0,n.CE)("div",$,[(0,n.Lk)("h2",null,(0,L.v_)(a.cityName),1),(0,n.Lk)("div",O,[a.weatherData?.main?.temp?((0,n.uX)(),(0,n.CE)("p",A,[(0,n.eW)(" Температура: "),(0,n.Lk)("span",X,(0,L.v_)(a.weatherData.main.temp)+"°C",1)])):(0,n.Q3)("",!0),a.weatherData?.weather[0]?.description?((0,n.uX)(),(0,n.CE)("p",T," Описание: "+(0,L.v_)(a.weatherData.weather[0].description),1)):(0,n.Q3)("",!0),a.weatherData?.main?.humidity?((0,n.uX)(),(0,n.CE)("p",x," Влажность: "+(0,L.v_)(a.weatherData.main.humidity)+"% ",1)):(0,n.Q3)("",!0),a.weatherData?.wind?.speed?((0,n.uX)(),(0,n.CE)("p",N," Ветер: "+(0,L.v_)(a.weatherData.wind.speed)+" м/с ",1)):(0,n.Q3)("",!0)]),(0,n.Lk)("div",{class:"favorite-icon",onClick:e[0]||(e[0]=(...t)=>r.toggleFavorite&&r.toggleFavorite(...t))},[a.isFavorite?((0,n.uX)(),(0,n.CE)("span",S,"❤️")):((0,n.uX)(),(0,n.CE)("span",j,"🤍"))])])}var R={props:{cityName:{type:String,required:!0},weatherData:{type:Object,required:!0},isFavorite:{type:Boolean,default:!1}},methods:{toggleFavorite(){this.$emit("toggleFavorite")}}};const W=(0,h.A)(R,[["render",Q],["__scopeId","data-v-21ae0f4a"]]);var q=W;const V={class:"chart-container"},B={ref:"temperatureChart"};function J(t,e,a,o,i,r){const s=(0,n.g2)("LoaderElem");return(0,n.uX)(),(0,n.CE)("div",V,[(0,n.bF)(s,{show:i.loading},null,8,["show"]),(0,n.Lk)("canvas",B,null,512)])}var H=a(3456);const K=t=>((0,n.Qi)("data-v-1548c03c"),t=t(),(0,n.jt)(),t),P={key:0,class:"loader-overlay"},U=K((()=>(0,n.Lk)("div",{class:"loader-spinner"},null,-1))),Z=[U];function z(t,e,a,o,i,r){return a.show?((0,n.uX)(),(0,n.CE)("div",P,Z)):(0,n.Q3)("",!0)}var G={props:{show:{type:Boolean,default:!0}}};const Y=(0,h.A)(G,[["render",z],["__scopeId","data-v-1548c03c"]]);var tt=Y,et={props:{temperatureData:{type:Array,required:!0}},components:{LoaderElem:tt},data(){return{chart:null,loading:!0}},mounted(){this.renderChart()},watch:{temperatureData(){this.renderChart()}},methods:{renderChart(){this.chart&&this.chart.destroy();const t=this.$refs.temperatureChart.getContext("2d");this.chart=new H.Ay(t,{type:"line",data:{labels:this.temperatureData.map((t=>t.hour)),datasets:[{label:"Температура по часам",data:this.temperatureData.map((t=>t.temp)),fill:!1,borderColor:"rgba(75, 192, 192, 1)",tension:.1}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{title:{display:!0,text:"Час"}},y:{title:{display:!0,text:"Температура (°C)"},beginAtZero:!0}}}}),this.loading=!1}}};const at=(0,h.A)(et,[["render",J],["__scopeId","data-v-2abe2308"]]);var ot=at;const it={class:"modal-overlay"},rt={class:"modal"},nt={class:"modal-buttons"};function st(t,e,a,o,i,r){return(0,n.uX)(),(0,n.CE)("div",it,[(0,n.Lk)("div",rt,[(0,n.Lk)("h3",null,"Вы уверены, что хотите удалить "+(0,L.v_)(a.cityName)+"?",1),(0,n.Lk)("div",nt,[(0,n.Lk)("button",{onClick:e[0]||(e[0]=e=>t.$emit("confirm"))},"Удалить"),(0,n.Lk)("button",{onClick:e[1]||(e[1]=e=>t.$emit("cancel"))},"Отмена")])])])}var lt={props:{cityName:{type:String,required:!0}}};const ct=(0,h.A)(lt,[["render",st],["__scopeId","data-v-71681463"]]);var dt=ct;function ut(t,e,a,i,r,s){return(0,n.uX)(),(0,n.CE)("div",{class:"modal-overlay",onClick:e[2]||(e[2]=(...t)=>s.closeModal&&s.closeModal(...t))},[(0,n.Lk)("div",{class:"modal-content",onClick:e[1]||(e[1]=(0,o.D$)((()=>{}),["stop"]))},[(0,n.Lk)("h3",null,(0,L.v_)(a.title),1),(0,n.Lk)("p",null,(0,L.v_)(a.message),1),(0,n.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>s.close&&s.close(...t))},"Закрыть")])])}var ht={props:{title:String,message:String},methods:{closeModal(){this.$emit("close")},close(){this.$emit("close")}}};const mt=(0,h.A)(ht,[["render",ut],["__scopeId","data-v-5bf21d64"]]);var pt=mt;const vt="d4afeb7f2df1e4c2958dda920a7232b6",ft="https://api.openweathermap.org/geo/1.0/direct",wt="https://api.openweathermap.org/data/2.5/weather",yt="246183c090dd15",gt=`https://ipinfo.io/json?token=${yt}`;async function Ct(){try{const t=await fetch(gt);if(!t.ok)throw new Error(`Ошибка сети: ${t.statusText}`);const e=await t.json();return{city:e.city,lat:e.loc.split(",")[0],lon:e.loc.split(",")[1]}}catch(t){throw console.error(`Ошибка при получении данных о местоположении: ${t.message}`),t}}async function kt(t){if(!t)throw new Error("Название города не задано.");try{const e=await fetch(`${ft}?q=${encodeURIComponent(t)}&limit=1&appid=${vt}`),a=await e.json();if(!Array.isArray(a)||0===a.length)throw new Error(`Город "${t}" не найден.`);const{lat:o,lon:i}=a[0];return{lat:o,lon:i}}catch(e){throw console.error(`Ошибка при получении координат: ${e.message}`),e}}async function Lt(t,e){try{const a=`${wt}?lat=${t}&lon=${e}&units=metric&lang=ru&appid=${vt}`,o=await fetch(a);if(!o.ok)throw new Error(`Ошибка сети: ${o.statusText}`);const i=await o.json();return i}catch(a){throw console.error(`Ошибка при получении данных о погоде: ${a.message}`),a}}async function Ft(t){try{if(!t)throw new Error("Название города не задано.");const{lat:e,lon:a}=await kt(t);return await Lt(e,a)}catch(e){throw console.error(`Ошибка при получении данных о погоде: ${e.message}`),e}}async function It(){try{const t=await Ct();return await Lt(t.lat,t.lon)}catch(t){throw console.error(`Ошибка при получении данных о погоде по IP: ${t.message}`),t}}async function Mt(t,e){const a=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${t}&lon=${e}&units=metric&lang=ru&appid=d4afeb7f2df1e4c2958dda920a7232b6`),o=await a.json();return o.list.slice(0,24).map((t=>({hour:t.dt_txt.slice(11,16),temp:t.main.temp})))}var bt={components:{CityAutocomplete:D,WeatherCard:q,TemperatureChart:ot,ConfirmationModal:dt,LimitExceededModal:pt,LoaderElem:tt},data(){return{showInput:!1,weatherList:[],showModal:!1,deleteIndex:null,loading:!1}},computed:{...(0,i.L8)(["favorites","showLimitModal"])},methods:{...(0,i.i0)(["addFavorite","removeFavorite","closeLimitModal","showLimitModal"]),async fetchWeather(){this.loading=!0;try{const e=await It(),a=await Mt(e.coord.lat,e.coord.lon);this.weatherList.push({cityName:"Ваше местоположение",weatherData:e,temperatureData:a});const o=this.$store.getters.favorites;for(const i of o)if(i.name)try{const t=await Ft(i.name),e=await Mt(t.coord.lat,t.coord.lon);this.weatherList.push({cityName:i.name,weatherData:t,temperatureData:e})}catch(t){console.error(`Ошибка при получении данных о погоде для города "${i.name}": ${t.message}`)}}catch(t){console.error("Ошибка при загрузке погоды:",t)}finally{this.loading=!1}},async onCitySelected(t){if(t&&t.name)if(this.weatherList.length>=5)this.showLimitModal();else{this.loading=!0;try{const e=await Ft(t.name),a=await Mt(t.lat,t.lon);this.weatherList.push({cityName:t.name,weatherData:e,temperatureData:a}),this.showInput=!1}catch(e){console.error("Ошибка при получении данных о погоде:",e)}finally{this.loading=!1}}else console.error("Название города не указано или некорректно")},toggleInput(){this.showInput=!this.showInput},confirmDelete(t){this.deleteIndex=t,this.showModal=!0},deleteBlock(){null!==this.deleteIndex&&(this.weatherList.splice(this.deleteIndex,1),this.deleteIndex=null,this.showModal=!1)},cancelDelete(){this.deleteIndex=null,this.showModal=!1},toggleFavorite(t){this.isFavorite(t.cityName)?this.removeFavorite(t.cityName):this.addFavorite(t)},isFavorite(t){return this.favorites.some((e=>e.cityName===t))},closeLimitModal(){this.$store.dispatch("closeLimitModal")}},async mounted(){await this.fetchWeather()}};const Et=(0,h.A)(bt,[["render",k],["__scopeId","data-v-6f6ab7e0"]]);var _t=Et;const Dt=t=>((0,n.Qi)("data-v-30923b64"),t=t(),(0,n.jt)(),t),$t=Dt((()=>(0,n.Lk)("h1",null,"Избранное",-1))),Ot={key:0},At={key:1},Xt=["onClick"];function Tt(t,e,a,o,i,r){const s=(0,n.g2)("WeatherCard"),l=(0,n.g2)("TemperatureChart"),c=(0,n.g2)("ConfirmationModal");return(0,n.uX)(),(0,n.CE)("div",null,[$t,0===t.favorites.length?((0,n.uX)(),(0,n.CE)("p",Ot,"У вас нет избранных городов.")):(0,n.Q3)("",!0),t.favorites.length>0?((0,n.uX)(),(0,n.CE)("div",At,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(t.favorites,((e,a)=>((0,n.uX)(),(0,n.CE)("div",{key:a,class:"weather-card-container"},[(0,n.bF)(s,{cityName:e.cityName,weatherData:e.weatherData,isFavorite:!0,onRemoveFavorite:a=>t.removeFavorite(e.cityName)},null,8,["cityName","weatherData","onRemoveFavorite"]),(0,n.bF)(l,{temperatureData:e.temperatureData},null,8,["temperatureData"]),(0,n.Lk)("button",{class:"delete-button",onClick:t=>r.confirmRemoveFavorite(a)}," Удалить ",8,Xt)])))),128))])):(0,n.Q3)("",!0),i.showModal?((0,n.uX)(),(0,n.Wv)(c,{key:2,onConfirm:r.removeFavoriteConfirm,onCancel:r.cancelRemoveFavorite},null,8,["onConfirm","onCancel"])):(0,n.Q3)("",!0)])}var xt={components:{WeatherCard:q,TemperatureChart:ot,ConfirmationModal:dt},data(){return{showModal:!1,removeIndex:null}},computed:{...(0,i.L8)(["favorites","showLimitModal"])},methods:{...(0,i.i0)(["removeFavorite","closeLimitModal"]),confirmRemoveFavorite(t){this.removeIndex=t,this.showModal=!0},removeFavoriteConfirm(){if(null!==this.removeIndex){const t=this.favorites[this.removeIndex].cityName;this.removeFavorite(t),this.removeIndex=null}this.showModal=!1},cancelRemoveFavorite(){this.removeIndex=null,this.showModal=!1},closeLimitModal(){this.$store.dispatch("closeLimitModal")}}};const Nt=(0,h.A)(xt,[["render",Tt],["__scopeId","data-v-30923b64"]]);var St=Nt;const jt=[{path:"/",name:"Home",component:_t},{path:"/favorites",name:"Favorites",component:St}],Qt=(0,v.aE)({history:(0,v.LA)(),routes:jt});var Rt=Qt;const Wt=(0,o.Ef)(p);Wt.use(r),Wt.use(Rt),Wt.mount("#app")}},e={};function a(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,o,i,r){if(!o){var n=1/0;for(d=0;d<t.length;d++){o=t[d][0],i=t[d][1],r=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<n&&(n=r));if(s){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[o,i,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,n=o[0],s=o[1],l=o[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(l)var d=l(a)}for(e&&e(o);c<n.length;c++)r=n[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(d)},o=self["webpackChunkweather"]=self["webpackChunkweather"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(3369)}));o=a.O(o)})();
//# sourceMappingURL=app.3bb95ac8.js.map