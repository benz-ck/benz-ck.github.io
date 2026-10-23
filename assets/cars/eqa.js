/* ─────────────────────────────────────────────────────────
   EQA 구성 페이지 자료 (model.html?m=EQA)
   - 사양 · 휠 · 시트 · 트림 · 색상 · 제원(출력 · 배터리 · 전비 · 주행거리 · 중량 · 크기): EQA 카탈로그(2026-09-02, 27년식)
     EQA 는 딜러 오더 가이드라인 · 제품정보가 없어 카탈로그만으로 만들었다.
   - 토크 · 0→100 · 최고속도 · 트렁크 · 배터리 kWh: 어프로치 북(2026-07, 26년식)
   - 가격: 2026-10-20 공식 가격표(27년식, 26년식 재고는 alt)
   시트 · 트림을 어느 트림이 기본으로 받는지는 같은 플랫폼 EQB 카탈로그 표기를 따랐다.
   사진은 images/cars/eqa/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["EQA"] = (function(){
  var P = "images/cars/eqa/";
  return {
    name: "EQA",
    badge: "27년식 The new EQA",
    tagline: "가장 작은 벤츠 전기 SUV.<br>EQA 250 Progressive · AMG Line 두 가지.",
    asof: "EQA 카탈로그 2026년 9월(27년식)",
    source: "EQA 카탈로그(2026년 9월, 27년식) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg"],
    bodies: { SUV: "콤팩트 전기 SUV" },
    lines: { "Progressive": P + "line-pg.jpg", "AMG Line": P + "line-amg.jpg" },

    trims: [
      { id:"eqa250p", name:"EQA 250 Progressive", short:"EQA 250 Progressive", body:"SUV", line:"Progressive", price:70800000, row:"27|EQA 250 Progressive", alt:["26|EQA 250 Progressive"],
        engine:"eqa250", wheel:"r39", upholstery:"artico", wood:"h55", highlights:["1회 충전 367km", "파노라믹 선루프", "360° 카메라 주차 패키지"] },
      { id:"eqa250amg", name:"EQA 250 AMG Line", short:"EQA 250 AMG Line", body:"SUV", line:"AMG Line", price:76700000, row:"27|EQA 250 AMG Line", alt:["26|EQA 250 AMG Line"],
        engine:"eqa250", wheel:"rqq", upholstery:"artico_mc", wood:"h56", highlights:["헤드업 디스플레이", "부메스터® 서라운드 사운드", "AMG 전용 프런트 에이프런"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (카탈로그 Exterior · Interior Highlights) */
    features: [
      { g:"파워트레인 · 주행", rows:[
        ["모터", "전기 모터 140kW", "전기 모터 140kW"],
        ["구동", "전륜구동", "전륜구동"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "Progressive", "AMG Line"],
        ["휠", "19인치 5 스포크 경량 알로이", "18인치 AMG 5 스포크 경량 알로이"],
        ["AMG 전용 프런트 에이프런 (크롬 트림 · 에어 커튼)", "-", "S"],
        ["LED 고성능 헤드램프 · 스타 패턴 라디에이터 그릴", "S", "S"],
        ["파노라믹 선루프 · 알루미늄 루프레일", "S", "S"],
        ["키레스 고 패키지 · 전동 트렁크", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "아티코 가죽", "아티코 가죽 / 마이크로컷 마이크로파이버"],
        ["스티어링 휠", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽"],
        ["AMG 플로어 매트", "-", "S"],
        ["다기능 열선 스티어링 휠 · 앞좌석 열선 시트", "S", "S"],
        ["운전석 · 동반석 메모리 패키지", "S", "S"],
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
    featureNote: "27년식 카탈로그(2026년 9월) 기준입니다. 두 트림의 모터 · 배터리는 같고, 외장 디자인 · 휠 · 시트 · 사운드 · 헤드업 디스플레이가 다릅니다.",

    engineNote: "EQA 250 은 앞바퀴를 굴리는 전기 모터 하나에 배터리 용량 65.9kWh 입니다. 두 트림의 출력 · 주행거리는 같습니다.",
    engines: {
      eqa250: { name:"EQA 250", kind:"전기 모터 · 전륜구동", chips:["140kW (190마력)", "1회 충전 367km", "복합 5.0km/kWh"],
                desc:"도심 전비 <b>5.4km/kWh</b>로 시내 주행이 많은 분께 특히 효율적입니다. 1회 충전 주행거리 367km (상온 복합, 27년식 카탈로그)." }
    },

    specs: { rows: [
      ["모터 최고출력", "140kW (190마력)", "140kW (190마력)"],
      ["최대토크", "39kg·m", "39kg·m"],
      ["배터리", "65.9kWh (187.2Ah)", "65.9kWh (187.2Ah)"],
      ["1회 충전 주행거리 (복합)", "367km", "367km"],
      ["복합 전비", "5.0km/kWh", "5.0km/kWh"],
      ["도심 · 고속 전비", "5.4 · 4.6km/kWh", "5.4 · 4.6km/kWh"],
      ["0→100km/h", "8.6초", "8.6초"],
      ["최고속도", "160km/h", "160km/h"],
      ["구동", "전륜구동", "전륜구동"],
      ["공차중량", "1,985kg", "1,985kg"],
      ["전장 · 전폭 · 전고", "4,465 · 1,835 · 1,620mm", "4,465 · 1,835 · 1,620mm"],
      ["트렁크", "340~1,320ℓ", "340~1,320ℓ"]
    ] },
    specNote: "출력 · 배터리(Ah) · 전비 · 주행거리 · 중량 · 크기는 27년식 카탈로그의 인증 차량 제원(두 트림 공통), 토크 · 0→100km/h · 최고속도 · 트렁크 · 배터리 kWh 는 어프로치 북(26년식) 기준입니다. 전비 · 주행거리는 기온 · 도로 · 운전 습관에 따라 달라집니다.",

    wheels: {
      r39: { name:"19인치 5 스포크 경량 알로이 휠", img:P + "wheel-r39.jpg" },
      rqq: { name:"18인치 AMG 5 스포크 경량 알로이 휠", img:P + "wheel-rqq.jpg" }
    },
    upholstery: {
      artico: { name:"아티코 가죽", colors:[
        { name:"마키아토 베이지 / 블랙", img:P + "seat-105a.jpg" },
        { name:"블랙 / 블랙", img:P + "seat-101a.jpg" },
        { name:"세이지 그레이 / 블랙", img:P + "seat-158a.jpg" } ]},
      artico_mc: { name:"아티코 가죽 / 마이크로컷 마이크로파이버", colors:[
        { name:"블랙", img:P + "seat-651a.jpg" } ]}
    },
    woods: {
      h55: { name:"스타 패턴 트림", img:P + "trim-55h.jpg" },
      h56: { name:"스타 패턴 트림 (AMG Line)", img:P + "trim-56h.jpg" }
    },
    extraCfg: [
      { title:"휠", sub:"카탈로그 휠 3가지", items:[
        { name:"19인치 5 스포크 경량 알로이 휠", img:P + "wheel-r39.jpg", note:"Progressive 기본" },
        { name:"18인치 AMG 5 스포크 경량 알로이 휠", img:P + "wheel-rqq.jpg", note:"AMG Line 기본" },
        { name:"18인치 멀티 스포크 경량 알로이 휠", img:P + "wheel-04r.jpg", note:"선택 사양" } ]},
      { title:"루프 라이너", sub:"3가지", items:[
        { name:"블랙", img:P + "liner-51u.jpg", note:"루프 라이너" },
        { name:"베이지", img:P + "liner-55u.jpg", note:"루프 라이너" },
        { name:"크리스탈 그레이", img:P + "liner-58u.jpg", note:"루프 라이너" } ]}
    ],
    /* 카탈로그 「Colours」 5가지 */
    colors: [
      { name:"코스모스 블랙", img:P + "color-191u.jpg" },
      { name:"폴라 화이트", img:P + "color-149u.jpg" },
      { name:"나이트 블랙", img:P + "color-696u.jpg" },
      { name:"하이 테크 실버", img:P + "color-922u.jpg" },
      { name:"마운틴 그레이", img:P + "color-787u.jpg" }
    ]
  };
})();
