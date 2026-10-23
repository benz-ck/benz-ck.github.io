/* ─────────────────────────────────────────────────────────
   CLA 구성 페이지 자료 (model.html?m=CLA) — 27년식 The all-new CLA 가솔린 2트림 + 전기 5트림
   - 트림 구성 · 사양 비교: MY27 CLA 제품정보 v3 · MY27 electric CLA 제품정보 v3 (2026-09, Specification · Product Line-up)
   - 연비 · 크기 · 중량, 사진 · 휠 · 시트 · 트림 · 색상: CLA 카탈로그(2026-10-07) · electric CLA 카탈로그(2026-09-14)
   - 가격: 2026-10-20 공식 가격표
   전기 CLA 의 국내 인증 제원(출력 · 1회 충전 주행거리 · 전비)과 가솔린 CLA 의 출력은 공식 자료에 아직 없어 표에 싣지 않는다.
   26년식 이전 세대 CLA 250 4MATIC · AMG CLA 45 S 는 트림 칩 없이 아래 가격표(10월 조건)로만 보여 준다(extraRows).
   제품정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 배터리 공급사 · 재고 안내는 싣지 않는다(사양 이름만).
   사진은 images/cars/cla/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["CLA"] = (function(){
  var P = "images/cars/cla/";
  return {
    name: "CLA",
    badge: "27년식 The all-new CLA · electric CLA",
    tagline: "완전히 새로워진 CLA, 가솔린과 전기 중에서.<br>CLA 220 두 트림과 전기 CLA 다섯 트림을 한눈에.",
    asof: "MY27 CLA · electric CLA 제품정보 2026년 9월 · 카탈로그 2026년 9~10월",
    source: "MY27 CLA · electric CLA 제품정보(2026년 9월) · CLA 카탈로그(2026년 10월) · electric CLA 카탈로그(2026년 9월) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg"],
    bodies: { GAS: "가솔린", EV: "전기" },
    diffByBody: true,
    extraRows: /^AMG CLA/,
    lines: { "PROGRESSIVE|GAS": P + "line-prog.jpg", "AMG Line|GAS": P + "line-amg.jpg",
             "PROGRESSIVE|EV": P + "line-ev.jpg", "AMG Line|EV": P + "line-ev-amg.jpg" },

    /* 가솔린 2 · 전기 5 — 「달라지는 사양」은 같은 파워트레인의 바로 아래 트림과 비교 */
    trims: [
      { id:"cla220", name:"CLA 220", short:"CLA 220", body:"GAS", line:"PROGRESSIVE", price:59900000, row:"27|CLA 220",
        engine:"g15", wheel:"r31", upholstery:"prog", wood:"59h", highlights:["복합연비 16.2km/ℓ (1등급)", "헤드업 디스플레이", "MB.DRIVE 어시스트"] },
      { id:"cla220amg", name:"CLA 220 AMG Line", short:"CLA 220 AMG Line", body:"GAS", line:"AMG Line", price:62900000, row:"27|CLA 220 AMG Line",
        engine:"g15", wheel:"rqr", upholstery:"amg", wood:"h43", highlights:["AMG Line 익스테리어", "스포츠 시트 · 나파 가죽 스티어링 휠", "패턴 애니메이션 프로젝션 라이트"] },
      { id:"e200es", name:"CLA 200 electric Essential", short:"CLA 200 electric Essential", body:"EV", line:"PROGRESSIVE", price:52900000, row:"27|CLA 200 electric Essential",
        engine:"ev58", wheel:"r22", upholstery:"prog", wood:"59h", highlights:["CLA 가운데 가장 낮은 가격", "58kWh 배터리 · 800V", "전면 트렁크"] },
      { id:"e200ad", name:"CLA 200 electric Advanced", short:"CLA 200 electric Advanced", body:"EV", line:"PROGRESSIVE", price:55800000, row:"27|CLA 200 electric Advanced",
        engine:"ev58", wheel:"r32", upholstery:"prog", wood:"59h", highlights:["헤드업 디스플레이", "MB.DRIVE 어시스트", "스마트폰 연동"] },
      { id:"e200amg", name:"CLA 200 electric AMG Line", short:"CLA 200 electric AMG Line", body:"EV", line:"AMG Line", price:58900000, row:"27|CLA 200 electric AMG Line",
        engine:"ev58", wheel:"rqj", upholstery:"amg", wood:"h43", highlights:["AMG Line 익스테리어", "스포츠 시트", "패턴 애니메이션 프로젝션 라이트"] },
      { id:"e250", name:"CLA 250+ electric", short:"CLA 250+ electric", body:"EV", line:"PROGRESSIVE", price:63700000, row:"27|CLA 250+ electric",
        engine:"ev85", wheel:"r87", upholstery:"prog", wood:"59h", highlights:["85kWh 배터리 · 최대 320kW 급속 충전", "MBUX 슈퍼스크린", "전동 트렁크 · 핸즈 프리 액세스"] },
      { id:"e250amg", name:"CLA 250+ electric AMG Line", short:"CLA 250+ electric AMG Line", body:"EV", line:"AMG Line", price:67700000, row:"27|CLA 250+ electric AMG Line",
        engine:"ev85", wheel:"rqk", upholstery:"amg", wood:"h43", highlights:["85kWh 배터리 · MBUX 슈퍼스크린", "AMG Line 익스테리어", "2존 자동 온도 조절"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (제품정보 Specification · 트림별 하이라이트) */
    features: [
      { g:"파워트레인", rows:[
        ["파워트레인", "4기통 가솔린", "4기통 가솔린", "전기 · 58kWh 배터리", "전기 · 58kWh 배터리", "전기 · 58kWh 배터리", "전기 · 85kWh 배터리", "전기 · 85kWh 배터리"],
        ["800V 충전 시스템", "-", "-", "S", "S", "S", "S", "S"],
        ["전면 트렁크", "-", "-", "S", "S", "S", "S", "S"],
        ["컴포트 서스펜션", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "PROGRESSIVE", "AMG Line", "PROGRESSIVE", "PROGRESSIVE", "AMG Line", "PROGRESSIVE", "AMG Line"],
        ["휠", "18인치 5스포크", "18인치 AMG 5스포크", "17인치 경량 휠", "18인치 5스포크", "18인치 AMG 5스포크", "18인치 5스포크", "18인치 AMG 5스포크"],
        ["앞모습", "일루미네이티드 그릴", "일루미네이티드 그릴", "일루미네이티드 패널", "일루미네이티드 패널", "일루미네이티드 패널", "일루미네이티드 패널", "일루미네이티드 패널"],
        ["메르세데스-벤츠 패턴 애니메이션 프로젝션 라이트", "-", "S", "-", "-", "S", "-", "S"],
        ["전동 트렁크 · 핸즈 프리 액세스", "-", "-", "-", "-", "-", "S", "S"],
        ["파노라믹 루프", "S", "S", "S", "S", "S", "S", "S"],
        ["LED 고성능 헤드램프 · 어댑티브 상향등 어시스트", "S", "S", "S", "S", "S", "S", "S"],
        ["플러시 도어 핸들 · 키레스 고", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "컴포트 시트", "스포츠 시트", "컴포트 시트", "컴포트 시트", "스포츠 시트", "컴포트 시트", "스포츠 시트"],
        ["스티어링 휠", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 가죽", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽"],
        ["실내 트림", "앤트러사이트 아노다이즈드 룩", "카본-그레인 알루미늄", "앤트러사이트 아노다이즈드 룩", "앤트러사이트 아노다이즈드 룩", "카본-그레인 알루미늄", "앤트러사이트 아노다이즈드 룩", "카본-그레인 알루미늄"],
        ["스포티 엔진 사운드 · AMG 플로어 매트", "-", "S", "-", "-", "S", "-", "S"],
        ["자동 온도 조절", "S", "S", "S", "S", "S", "2존", "2존"],
        ["MBUX 슈퍼스크린 (동승석 디스플레이)", "-", "-", "-", "-", "-", "S", "S"],
        ["앞좌석 열선 시트 · 메모리 패키지 · 열선 스티어링 휠", "S", "S", "S", "S", "S", "S", "S"],
        ["앰비언트 라이트 · 셀피/비디오 카메라 · 앞좌석 무선 충전", "S", "S", "S", "S", "S", "S", "S"]
      ]},
      { g:"안전 · MBUX", rows:[
        ["MB.DRIVE 어시스트", "S", "S", "스탠다드", "S", "S", "S", "S"],
        ["차선 변경 어시스트 · 스티어링 어시스트", "S", "S", "-", "S", "S", "S", "S"],
        ["헤드업 디스플레이", "S", "S", "-", "S", "S", "S", "S"],
        ["스마트폰 연동", "S", "S", "-", "S", "S", "S", "S"],
        ["차선 이탈 방지 · 브레이크 어시스트 · 사각지대 어시스트", "S", "S", "S", "S", "S", "S", "S"],
        ["후방 카메라가 포함된 주차 패키지 · PARKTRONIC", "S", "S", "S", "S", "S", "S", "S"],
        ["4세대 MBUX (MB.OS) · 내비게이션 · MBUX 버추얼 어시스턴트", "S", "S", "S", "S", "S", "S", "S"],
        ["무릎 에어백 · 센터 에어백", "S", "S", "S", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "27년식 제품정보 기준입니다. 전기 CLA Essential 은 기본형 MB.DRIVE 를 쓰고 헤드업 디스플레이 · 스마트폰 연동이 빠집니다. 이전 세대(26년식) CLA 250 4MATIC AMG Line · AMG CLA 45 S 재고 조건은 아래 가격표에서 보실 수 있습니다.",

    engineNote: "가솔린 CLA 220 은 전륜구동 8단 자동, 전기 CLA 는 800V 전기 아키텍처로 급속 충전 시간을 줄였습니다. 전기 CLA 250+ 는 최대 320kW 로 10→80% 를 약 22분에 충전합니다(카탈로그).",
    engines: {
      g15: { name:"CLA 220", kind:"직렬 4기통 가솔린 1.5ℓ", chips:["1,499cc", "16.2km/ℓ", "1등급"],
             desc:"<b>복합연비 16.2km/ℓ (1등급)</b> · 도심 14.7 / 고속 18.4km/ℓ. 충전 걱정 없이 연비를 챙기실 분께 맞습니다." },
      ev58: { name:"CLA 200 electric", kind:"전기 · 58kWh LFP 배터리 · 800V", chips:["58kWh", "800V", "전면 트렁크"],
              desc:"전기 CLA 의 기본 배터리. <b>5,290만원부터</b> 시작하고, 전기차 보조금 대상이면 실구매가가 더 내려갑니다." },
      ev85: { name:"CLA 250+ electric", kind:"전기 · 85kWh NMC 배터리 · 800V", chips:["85kWh", "최대 320kW", "10→80% 약 22분"],
              desc:"큰 배터리로 <b>더 긴 주행거리</b>를 원하시는 분께. MBUX 슈퍼스크린 · 2존 공조 · 전동 트렁크가 기본입니다." }
    },

    specs: { rows: [
      ["파워트레인", "가솔린 1.5ℓ 4기통", "가솔린 1.5ℓ 4기통", "전기", "전기", "전기", "전기", "전기"],
      ["배터리", "—", "—", "58kWh (LFP)", "58kWh (LFP)", "58kWh (LFP)", "85kWh (NMC)", "85kWh (NMC)"],
      ["충전 시스템", "—", "—", "800V", "800V", "800V", "800V · 최대 320kW", "800V · 최대 320kW"],
      ["배기량 · 변속기", "1,499cc · 8단", "1,499cc · 8단", "—", "—", "—", "—", "—"],
      ["복합연비 (등급)", "16.2km/ℓ (1등급)", "16.2km/ℓ (1등급)", "—", "—", "—", "—", "—"],
      ["도심 · 고속 연비", "14.7 · 18.4km/ℓ", "14.7 · 18.4km/ℓ", "—", "—", "—", "—", "—"],
      ["CO₂ 배출", "101g/km", "101g/km", "—", "—", "—", "—", "—"],
      ["공차중량", "1,645kg", "1,645kg", "—", "—", "—", "—", "—"],
      ["전장 · 전폭 · 전고", "4,720 · 1,835 · 1,470mm", "4,720 · 1,835 · 1,470mm", "—", "—", "—", "—", "—"]
    ] },
    specNote: "가솔린은 CLA 카탈로그의 인증 차량(CLA 220) 제원입니다. 가솔린 출력과 전기 CLA 의 국내 인증 제원(출력 · 1회 충전 주행거리 · 전비 · 크기)은 아직 공식 자료가 나오지 않아 비워 두었고, 나오는 대로 채워 넣겠습니다.",

    wheels: {
      r31: { name:"18인치 5스포크 경량 알로이 휠", img:P + "wheel-r31.jpg" },
      rqr: { name:"18인치 AMG 5스포크 경량 알로이 휠", img:P + "wheel-rqr.jpg" },
      r22: { name:"17인치 경량 휠", img:P + "wheel-r22.jpg" },
      r32: { name:"18인치 5스포크 경량 알로이 휠", img:P + "wheel-r32.jpg" },
      rqj: { name:"18인치 AMG 5스포크 경량 알로이 휠", img:P + "wheel-rqj.jpg" },
      r87: { name:"18인치 5스포크 경량 알로이 휠", img:P + "wheel-r87.jpg" },
      rqk: { name:"18인치 AMG 5스포크 경량 알로이 휠", img:P + "wheel-rqk.jpg" }
    },
    upholstery: {
      prog: { name:"아티코 가죽", colors:[
        { name:"블랙", img:P + "seat-black.jpg" },
        { name:"마키아토 베이지 / 블랙", img:P + "seat-beige.jpg" },
        { name:"가죽 브라운 / 블랙", img:P + "seat-brown.jpg" } ]},
      amg: { name:"아티코 가죽 · 마이크로컷 마이크로파이버 (AMG Line 스포츠 시트)", colors:[
        { name:"투톤 블랙 / 클린 화이트", img:P + "seat-amg.jpg" } ]}
    },
    woods: {
      "59h": { name:"앤트러사이트 아노다이즈드 룩 트림", img:P + "trim-59h.jpg" },
      h43: { name:"카본-그레인 알루미늄 트림", img:P + "trim-h43.jpg" }
    },
    extraCfg: [
      { title:"CLA 220 휠", sub:"CLA 220 은 18인치 5스포크 두 디자인 중 하나가 들어갑니다", items:[
        { name:"18인치 5스포크 경량 알로이 휠", img:P + "wheel-r31.jpg", note:"CLA 220" },
        { name:"18인치 5스포크 경량 알로이 휠 (에어로)", img:P + "wheel-r67.jpg", note:"CLA 220" } ]}
    ],
    /* 외장 6가지 — 가솔린 / 전기 카탈로그 사진 */
    colors: (function(){
      function c(name, code, mfk){ var o = { name:name, img:P + "color-" + code + ".jpg", lineImg:{ "EV": P + "ev-" + code + ".jpg" } }; if (mfk) o.mfk = true; return o; }
      return [ c("폴라 화이트", "149u"), c("아쿠아 민트", "341u"), c("제트 블랙", "696u"), c("시어 블루", "809u"), c("하이테크 실버", "922u"),
               c("MANUFAKTUR 파타고니아 레드", "993u", true) ];
    })()
  };
})();
