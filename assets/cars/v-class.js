/* ─────────────────────────────────────────────────────────
   V-Class 구성 페이지 자료 (model.html?m=V-Class)
   - 사양: MY27 V-Class 제품 정보 v1 (2026-10, Specification · 하이라이트 · Product Line-up)
   - 사진 · 휠 · 시트 · 트림 · 루프 라이너 · 색상: V-Class 카탈로그(2026-10-21, 27년식)
   - 가격: 2026-10-27 공식 가격표
   카탈로그에 출력 · 연비 같은 제원 쪽이 없어 제원 표는 엔진 · 구동 등만 싣는다.
   제품정보는 딜러용 CONFIDENTIAL 이라 NST 코드는 싣지 않는다. 사진은 images/cars/v-class/ (새 파일명으로 교체).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["V-Class"] = (function(){
  var P = "images/cars/v-class/";
  return {
    name: "V-Class",
    badge: "27년식 The new V-Class",
    tagline: "뒷좌석이 주인공인 프리미엄 MPV.<br>V 300 d 4MATIC EXCLUSIVE 단일 트림.",
    asof: "MY27 V-Class 제품 정보 2026년 10월 · 카탈로그 2026년 10월",
    source: "MY27 V-Class 제품 정보(2026년 10월) · V-Class 카탈로그(2026년 10월, 27년식) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg"],
    bodies: { MPV: "MPV" },
    lines: { "EXCLUSIVE": P + "line.jpg" },

    trims: [
      { id:"v300d", name:"V 300 d 4MATIC EXCLUSIVE", short:"V 300 d 4M EXCLUSIVE", body:"MPV", line:"EXCLUSIVE", price:124000000, row:"27|V 300 d 4M Exclusive",
        engine:"om654", wheel:"r19", upholstery:"nappa", wood:"f3t",
        highlights:["1열 뒷좌석 럭셔리 시트 · 마사지", "좌우 전동 슬라이딩 도어", "에어매틱 서스펜션"] }
    ],

    /* 단일 트림 — 렌더러가 「기본 사양」 목록으로 보여 준다 */
    features: [
      { g:"뒷좌석", rows:[
        ["1열 뒷좌석 럭셔리 시트 (나파 가죽)", "S"],
        ["1열 뒷좌석 열선 · 통풍 시트", "S"],
        ["개별 조절 마사지 기능", "S"],
        ["전동식 종아리 받침대 · 발 받침대", "S"],
        ["1열 뒷좌석 메모리 패키지", "S"],
        ["1열 뒷좌석 무선 충전", "S"],
        ["2열 3인승 이지 엔트리 컴포트 벤치", "S"],
        ["시트 등받이 테이블 · 조명", "S"],
        ["퀵락 시트 레일 시스템", "S"]
      ]},
      { g:"파워트레인 · 주행", rows:[
        ["엔진", "4기통 디젤 (OM 654)"],
        ["변속기", "9G-TRONIC"],
        ["구동", "4MATIC 상시 사륜"],
        ["서스펜션", "에어매틱"]
      ]},
      { g:"익스테리어 · 편의", rows:[
        ["좌우 전동 슬라이딩 도어", "S"],
        ["전동 테일게이트 · 개폐식 테일게이트 윈도우", "S"],
        ["LED 라이트밴드 라디에이터 그릴", "S"],
        ["MULTIBEAM LED · 상향등 어시스트", "S"],
        ["브랜드 로고 프로젝션", "S"],
        ["열선 웻 와이퍼", "S"],
        ["19인치 경량 알로이 휠", "S"],
        ["파노라믹 슬라이딩 루프", "유료 선택"]
      ]},
      { g:"앞좌석 · 인포테인먼트", rows:[
        ["운전석 · 동승석 열선 · 통풍 시트", "S"],
        ["앞좌석 메모리 패키지", "S"],
        ["열선 다기능 스티어링 휠", "S"],
        ["서모트로닉 자동 온도 조절", "S"],
        ["와이드 스크린 콕핏 · 내비게이션", "S"],
        ["부메스터® 서라운드 사운드 (15스피커)", "S"],
        ["스마트폰 통합 패키지", "S"],
        ["디지털 룸미러", "S"],
        ["앰비언트 라이트", "S"]
      ]},
      { g:"안전", rows:[
        ["액티브 디스턴스 어시스트 디스트로닉", "S"],
        ["브레이크 어시스트 · 차선 이탈 방지 · 사각지대 어시스트", "S"],
        ["PRE-SAFE® · 주의 어시스트 · 경사로 밀림 방지", "S"],
        ["360° 카메라 주차 어시스트 · 파크트로닉", "S"],
        ["트레일러 어시스트", "S"]
      ]}
    ],

    engineNote: "4기통 디젤 엔진에 9단 자동변속기와 4MATIC 상시 사륜구동, 에어매틱 서스펜션이 기본입니다.",
    engines: {
      om654: { name:"OM 654", kind:"직렬 4기통 디젤", chips:["1,950cc", "9G-TRONIC", "4MATIC"],
               desc:"넉넉한 토크와 <b>좋은 연비</b>로, 사람과 짐을 가득 싣고 장거리를 가도 여유롭습니다(카탈로그)." }
    },
    specs: { rows: [
      ["엔진", "OM 654 직렬 4기통 디젤"],
      ["배기량", "1,950cc"],
      ["변속기 · 구동", "9G-TRONIC · 4MATIC 상시 사륜"],
      ["서스펜션", "에어매틱"],
      ["휠", "19인치 경량 알로이"],
      ["좌석", "앞 2 · 뒷좌석 1열 럭셔리 시트 2 · 2열 벤치 3"],
      ["파노라믹 슬라이딩 루프", "1,900 × 1,120mm (유료 선택)"]
    ] },
    specNote: "출력 · 연비 같은 국내 인증 제원은 카탈로그에 없어 공식 자료가 나오는 대로 채워 넣겠습니다. 좌석을 떼어 내는 구조변경은 튜닝 승인 대상이라 출고 전에 미리 말씀해 주세요.",

    wheels: {
      r19: { name:"19인치 모노블록 경량 알로이 휠", img:P + "wheel-r19.jpg" }
    },
    upholstery: {
      nappa: { name:"나파 가죽", colors:[
        { name:"블랙", img:P + "seat-black.jpg" },
        { name:"실크 베이지", img:P + "seat-beige.jpg" } ]}
    },
    woods: {
      f3t: { name:"오픈포어 우드룩 트림", img:P + "trim-f3t.jpg" },
      fb2: { name:"익스클루시브 트림", img:P + "trim-fb2.jpg", note:"무료 선택" }
    },
    extraCfg: [
      { title:"휠", sub:"19인치 두 가지 중 선택", items:[
        { name:"19인치 모노블록 경량 알로이 휠", img:P + "wheel-r19.jpg", base:true },
        { name:"19인치 10스포크 경량 알로이 휠", img:P + "wheel-r1q.jpg", note:"선택 사양" } ]},
      { title:"루프 라이너", sub:"블랙 · 포슬린", items:[
        { name:"블랙" }, { name:"블랙 (MICROCUT)" }, { name:"포슬린" }, { name:"포슬린 (MICROCUT)" } ]}
    ],
    /* 카탈로그 「Colours」 5가지 (모두 메탈릭) */
    colors: [
      { name:"옵시디안 블랙 (메탈릭)", img:P + "color-197.jpg" },
      { name:"그라파이트 그레이 (메탈릭)", img:P + "color-831.jpg" },
      { name:"칼라하리 골드 (메탈릭)", img:P + "color-802.jpg" },
      { name:"락 크리스탈 화이트 (메탈릭)", img:P + "color-134.jpg" },
      { name:"하이 테크 실버 (메탈릭)", img:P + "color-922.jpg" }
    ]
  };
})();
