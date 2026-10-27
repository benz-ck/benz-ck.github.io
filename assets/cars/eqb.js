/* ─────────────────────────────────────────────────────────
   EQB 구성 페이지 자료 (model.html?m=EQB)
   - 사양 · 휠 · 시트 · 트림 · 색상: EQB 카탈로그(2026-04-24, 26년식) — 트림별 기본 · 선택 표기 그대로
     EQB 는 딜러 오더 가이드라인 · 제품정보가 없어 카탈로그만으로 만들었다.
   - 제원: 카탈로그에 제원 쪽이 없어 어프로치 북(2026-07, 26년식) 값
   - 가격: 2026-10-27 공식 가격표(26년식)
   사진은 images/cars/eqb/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["EQB"] = (function(){
  var P = "images/cars/eqb/";
  return {
    name: "EQB",
    badge: "26년식 The new EQB",
    tagline: "실내가 넉넉한 박스형 전기 SUV.<br>EQB 300 4MATIC Progressive · AMG Line 두 가지.",
    asof: "EQB 카탈로그 2026년 4월(26년식)",
    source: "EQB 카탈로그(2026년 4월, 26년식) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg"],
    bodies: { SUV: "전기 SUV" },
    lines: { "Progressive": P + "line-pg.jpg", "AMG Line": P + "line-amg.jpg" },

    trims: [
      { id:"eqb300p", name:"EQB 300 4MATIC Progressive", short:"EQB 300 4M Progressive", body:"SUV", line:"Progressive", price:78800000, row:"26|EQB 300 4M Progressive",
        engine:"eqb300", wheel:"r39", upholstery:"artico", wood:"h55", highlights:["4MATIC 사륜구동", "파노라믹 선루프", "360° 카메라 주차 패키지"] },
      { id:"eqb300amg", name:"EQB 300 4MATIC AMG Line", short:"EQB 300 4M AMG Line", body:"SUV", line:"AMG Line", price:84300000, row:"26|EQB 300 4M AMG Line",
        engine:"eqb300", wheel:"rvy", upholstery:"artico_mc", wood:"h56", highlights:["헤드업 디스플레이", "부메스터® 서라운드 사운드", "19인치 AMG 10 스포크 휠"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (카탈로그 Highlights · Equipments 의 기본사양 표기) */
    features: [
      { g:"파워트레인 · 주행", rows:[
        ["구동", "4MATIC 사륜구동", "4MATIC 사륜구동"],
        ["스티어링 휠 시프트 패들", "S", "S"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "Progressive", "AMG Line"],
        ["휠", "19인치 5 스포크 경량 알로이", "19인치 AMG 10 스포크 경량 알로이"],
        ["AMG 전용 프런트 에이프런 (크롬 마감)", "-", "S"],
        ["LED 고성능 헤드램프 · 스타 패턴 블랙 라디에이터 그릴", "S", "S"],
        ["파노라믹 선루프 · 알루미늄 루프레일", "S", "S"],
        ["키레스 고 패키지 · 전동 트렁크", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "아티코 가죽", "아티코 가죽 / 마이크로컷 마이크로파이버"],
        ["스티어링 휠", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽"],
        ["AMG 플로어 매트", "-", "S"],
        ["다기능 열선 스티어링 휠 · 앞좌석 열선 시트", "S", "S"],
        ["운전석 · 동반석 메모리 기능", "S", "S"],
        ["앰비언트 라이트 · 스타 패턴 트림", "S", "S"]
      ]},
      { g:"MBUX · 안전", rows:[
        ["헤드업 디스플레이", "-", "S"],
        ["사운드 시스템", "어드밴스드 사운드", "부메스터® 서라운드 (12스피커 · 710W)"],
        ["MBUX · 무선 스마트폰 통합 · 앞좌석 무선 충전", "S", "S"],
        ["공기 청정 패키지", "S", "S"],
        ["드라이빙 어시스턴스 패키지", "S", "S"],
        ["360° 카메라가 포함된 주차 패키지", "S", "S"],
        ["PRE-SAFE® 시스템 · 온열 윈드스크린 워셔", "S", "S"]
      ]}
    ],
    featureNote: "26년식 카탈로그(2026년 4월) 기준입니다. 두 트림의 모터 · 배터리는 같고, 외장 디자인 · 휠 · 시트 · 사운드 · 헤드업 디스플레이가 다릅니다.",

    engineNote: "EQB 300 4MATIC 은 앞뒤 바퀴를 모두 굴리는 4MATIC 사륜구동 전기차입니다. 배터리 용량 65.9kWh(어프로치 북).",
    engines: {
      eqb300: { name:"EQB 300 4MATIC", kind:"전기 모터 · 4MATIC 사륜구동", chips:["228마력", "40kg·m", "0→100 8.0초"],
                desc:"트렁크 495~1,710ℓ로 <b>짐이 많은 가족 여행</b>에 맞는 전기 SUV. 눈길 · 빗길에도 4MATIC 으로 안정적입니다." }
    },

    specs: { rows: [
      ["최고출력", "228마력", "228마력"],
      ["최대토크", "40kg·m", "40kg·m"],
      ["배터리", "65.9kWh", "65.9kWh"],
      ["1회 충전 주행거리 (복합)", "302km", "319km"],
      ["복합 전비", "4.1km/kWh", "4.2km/kWh"],
      ["0→100km/h", "8.0초", "8.0초"],
      ["최고속도", "160km/h", "160km/h"],
      ["구동", "4MATIC 사륜구동", "4MATIC 사륜구동"],
      ["공차중량", "2,135kg", "2,140kg"],
      ["전장 · 전폭 · 전고", "4,685 · 1,835 · 1,690mm", "4,685 · 1,835 · 1,690mm"],
      ["트렁크", "495~1,710ℓ", "495~1,710ℓ"]
    ] },
    specNote: "EQB 카탈로그에는 제원 쪽이 없어 어프로치 북(2026년 7월, 26년식) 값을 적었습니다. 주행거리 · 전비는 트림 순서대로 적힌 값이며, 기온 · 도로 · 운전 습관에 따라 달라집니다. 국내 인증 도심 · 고속 전비는 문의 주시면 확인해 드립니다.",

    wheels: {
      r39: { name:"19인치 5 스포크 경량 알로이 휠", img:P + "wheel-r39.jpg" },
      rvy: { name:"19인치 AMG 10 스포크 경량 알로이 휠", img:P + "wheel-rvy.jpg" }
    },
    upholstery: {
      artico: { name:"아티코 가죽", colors:[
        { name:"마키아토 베이지 / 블랙", img:P + "seat-105a.jpg" },
        { name:"블랙 / 블랙", img:P + "seat-101a.jpg" },
        { name:"세이지 그레이 / 블랙", img:P + "seat-158a.jpg" } ]},
      artico_mc: { name:"아티코 가죽 / 마이크로컷 마이크로파이버", colors:[
        { name:"블랙", img:P + "seat-651a.jpg" },
        { name:"세이지 그레이 / 블랙 (아티코 가죽, 유료 옵션)", img:P + "seat-158a.jpg" } ]}
    },
    woods: {
      h55: { name:"스타 패턴 트림", img:P + "trim-55h.jpg" },
      h56: { name:"스타 패턴 트림 (AMG Line)", img:P + "trim-56h.jpg", note:"Progressive 유료 옵션" }
    },
    extraCfg: [
      { title:"휠", sub:"카탈로그 휠 3가지", items:[
        { name:"19인치 5 스포크 경량 알로이 휠", img:P + "wheel-r39.jpg", note:"Progressive 기본" },
        { name:"18인치 멀티 스포크 경량 알로이 휠", img:P + "wheel-04r.jpg", note:"Progressive 선택 사양" },
        { name:"19인치 AMG 10 스포크 경량 알로이 휠", img:P + "wheel-rvy.jpg", note:"AMG Line 기본" } ]}
    ],
    /* 카탈로그 「Colours」 7가지 */
    colors: [
      { name:"코스모스 블랙", img:P + "color-191u.jpg" },
      { name:"나이트 블랙", img:P + "color-696u.jpg" },
      { name:"폴라 화이트", img:P + "color-149u.jpg" },
      { name:"마운틴 그레이", img:P + "color-787u.jpg" },
      { name:"하이 테크 실버", img:P + "color-922u.jpg" },
      { name:"스펙트럴 블루", img:P + "color-970u.jpg" },
      { name:"MANUFAKTUR 파타고니아 레드", img:P + "color-993u.jpg", mfk:true }
    ]
  };
})();
