/* ─────────────────────────────────────────────────────────
   C-Class 구성 페이지 자료 (model.html?m=C-Class) — C 200 AVANTGARDE · C 200 AMG Line
   - 트림 구성 · 휠 · 시트 · 트림 · 색상: MY26 C-Class Order Guideline v1 (2025-06)
   - 사양 비교 · 제원, 사진: C-Class 카탈로그(2026-02-04, 26년식) · 어프로치 북(2026-07)
   - 가격: 2026-10-27 공식 가격표
   C 200 Final Edition 은 사양 자료가 없어 트림 칩에 넣지 않고 아래 가격표(10월 조건)로만 보여 준다.
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 옵션 가격은 싣지 않는다(사양 이름만).
   사진은 images/cars/c-class/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["C-Class"] = (function(){
  var P = "images/cars/c-class/";
  return {
    name: "C-Class",
    badge: "26년식 C-Class",
    tagline: "E클래스보다 한 급 작은 정통 세단.<br>C 200 AVANTGARDE 와 AMG Line 을 한눈에.",
    asof: "MY26 C-Class 오더 가이드라인 2025년 6월 · 카탈로그 2026년 2월",
    source: "MY26 C-Class 오더 가이드라인(2025년 6월) · C-Class 카탈로그(2026년 2월, 26년식) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg"],
    bodies: { SEDAN: "세단" },
    lines: { "AVANTGARDE": P + "line-av.jpg", "AMG Line": P + "line-amg.jpg" },

    trims: [
      { id:"c200av", name:"C 200 AVANTGARDE", short:"C 200 AVANTGARDE", body:"SEDAN", line:"AVANTGARDE", price:65100000, row:"26|C 200 AV",
        engine:"m254", wheel:"r86", upholstery:"av", wood:"h04", highlights:["컴포트 서스펜션", "앞좌석 열선 · 통풍 시트", "드라이빙 어시스턴스 패키지 플러스"] },
      { id:"c200amg", name:"C 200 AMG Line", short:"C 200 AMG Line", body:"SEDAN", line:"AMG Line", price:68300000, row:"26|C 200 AMG Line",
        engine:"m254", wheel:"rsj", upholstery:"amg", wood:"h64", highlights:["어질리티 컨트롤 서스펜션", "스포츠 시트 · 나파 가죽 스티어링 휠", "AMG Line 익스테리어"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (카탈로그 Option list · Highlights · 어프로치 북) */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "4기통 가솔린 M 254 + 48V 마일드 하이브리드", "4기통 가솔린 M 254 + 48V 마일드 하이브리드"],
        ["변속기 · 구동", "9G-TRONIC · 후륜구동", "9G-TRONIC · 후륜구동"],
        ["서스펜션", "컴포트 서스펜션", "어질리티 컨트롤 서스펜션"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "AVANTGARDE", "AMG Line"],
        ["휠", "18인치 멀티 스포크", "18인치 AMG 5스포크"],
        ["스타 패턴 라디에이터 그릴 · 프론트 액슬 대형 디스크 브레이크", "-", "S"],
        ["파노라믹 슬라이딩 선루프", "S", "S"],
        ["LED 고성능 헤드램프 · 어댑티브 상향등 어시스트", "S", "S"],
        ["브랜드 프로젝션 로고 · 발광 도어 실 패널", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "컴포트 시트, 아티코 가죽", "스포츠 시트, 아티코 가죽"],
        ["스티어링 휠", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽"],
        ["기본 실내 트림", "블랙 오픈포어 알루미늄 라인 우드", "메탈 위브"],
        ["스포티 엔진 사운드", "-", "S"],
        ["앞좌석 열선 · 통풍 시트 · 메모리 패키지", "S", "S"],
        ["2존 자동 온도 조절 · 공기 청정 패키지", "S", "S"],
        ["다기능 열선 스티어링 휠 · 64색 앰비언트 라이트", "S", "S"],
        ["뒷좌석 접이식 시트", "S", "S"]
      ]},
      { g:"안전 · MBUX · 편의", rows:[
        ["드라이빙 어시스턴스 패키지 플러스 (디스트로닉 · 액티브 차선 변경 어시스트)", "S", "S"],
        ["PRE-SAFE® · PRE-SAFE® 임펄스 사이드 · 센터 에어백", "S", "S"],
        ["액티브 주차 어시스트 · 후방 카메라", "S", "S"],
        ["2세대 MBUX · 내비게이션 · 12.3인치 계기반 + 11.9인치 센트럴 디스플레이", "S", "S"],
        ["스마트폰 통합 패키지 · 앞좌석 무선 충전 · 지문 스캐너", "S", "S"],
        ["키레스 고 · 핸즈 프리 액세스 · 전동 트렁크", "S", "S"]
      ]}
    ],
    featureNote: "두 트림은 엔진 · 주행 보조 · 편의 사양이 같고, 외관 라인 · 휠 · 시트 · 서스펜션에서 갈립니다. 어드밴스드 사운드 시스템은 유료 옵션, 디지털 라이트는 선택 사양입니다. C 200 Final Edition 의 10월 조건은 아래 가격표에서 보실 수 있고, 사양 구성은 문의 주시면 안내해 드립니다.",

    engineNote: "2세대 통합 스타터-제너레이터(ISG)를 단 48V 마일드 하이브리드가 필요할 때 약 30초 동안 20kW 를 더 보탭니다(카탈로그).",
    engines: {
      m254: { name:"M 254", kind:"직렬 4기통 가솔린 + 48V 마일드 하이브리드", chips:["1,999cc", "204마력", "32.6kg·m"],
              desc:"9단 자동변속기와 후륜구동. <b>복합연비 12.0km/ℓ (3등급)</b>로 두 트림이 같습니다." }
    },

    specs: { rows: [
      ["엔진", "M 254 직렬 4기통", "M 254 직렬 4기통"],
      ["배기량", "1,999cc", "1,999cc"],
      ["최고출력", "204마력", "204마력"],
      ["최대토크", "32.6kg·m", "32.6kg·m"],
      ["0→100km/h", "7.3초", "7.3초"],
      ["최고속도", "246km/h", "246km/h"],
      ["복합연비 (등급)", "12.0km/ℓ (3등급)", "12.0km/ℓ (3등급)"],
      ["도심 · 고속 연비", "10.5 · 14.5km/ℓ", "10.5 · 14.5km/ℓ"],
      ["CO₂ 배출", "140g/km", "140g/km"],
      ["공차중량", "1,700kg", "1,700kg"],
      ["전장 · 전폭 · 전고", "4,755 · 1,820 · 1,440mm", "4,755 · 1,820 · 1,440mm"],
      ["휠베이스 · 최소회전반경", "2,865mm · 5.54m", "2,865mm · 5.54m"],
      ["타이어 (앞 · 뒤)", "225/45 R18 · 245/40 R18", "225/45 R18 · 245/40 R18"],
      ["트렁크 · 연료탱크", "455ℓ · 66ℓ", "455ℓ · 66ℓ"]
    ] },
    specNote: "26년식 카탈로그의 인증 차량 제원(C 200 공통)입니다.",

    wheels: {
      r86: { name:"18인치 멀티 스포크 경량 알로이 휠", img:P + "wheel-r86.jpg" },
      rsj: { name:"18인치 AMG 5스포크 경량 알로이 휠", img:P + "wheel-rsj.jpg" }
    },
    upholstery: {
      av: { name:"아티코 가죽", colors:[
        { name:"블랙", img:P + "seat-av-black.jpg" },
        { name:"시에나 브라운 / 블랙 (유료 옵션)", img:P + "seat-av-sienna.jpg" },
        { name:"마키아토 베이지 / 블랙 (유료 옵션)", img:P + "seat-av-macchiato.jpg" } ]},
      amg: { name:"아티코 가죽", colors:[
        { name:"블랙", img:P + "seat-amg-black.jpg" },
        { name:"네바 그레이 / 블랙 (유료 옵션)", img:P + "seat-amg-neva.jpg" },
        { name:"시에나 브라운 / 블랙 (유료 옵션)", img:P + "seat-amg-sienna.jpg" },
        { name:"가죽 파워 레드 / 블랙 (유료 옵션)", img:P + "seat-amg-red.jpg" } ]}
    },
    woods: {
      h04: { name:"블랙 오픈포어 알루미늄 라인 우드 트림", img:P + "trim-h04.jpg", note:"AMG Line 유료 옵션" },
      h64: { name:"메탈 위브 트림", img:P + "trim-h64.jpg", note:"AVANTGARDE 무료 선택" },
      h08: { name:"안트라사이트 라인스트럭처 라임 우드 트림", img:P + "trim-h08.jpg", note:"AVANTGARDE 무료 선택 · AMG Line 유료 옵션" }
    },
    extraCfg: [
      { title:"휠 선택", sub:"AVANTGARDE 는 18인치 3가지 무료 선택, AMG Line 은 19인치 유료 옵션", items:[
        { name:"18인치 멀티 스포크 경량 알로이 휠", img:P + "wheel-r86.jpg", note:"AVANTGARDE 기본" },
        { name:"18인치 5스포크 경량 알로이 휠", img:P + "wheel-r32.jpg", note:"AVANTGARDE 무료 선택" },
        { name:"18인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-r87.jpg", note:"AVANTGARDE 무료 선택" },
        { name:"18인치 AMG 5스포크 경량 알로이 휠", img:P + "wheel-rsj.jpg", note:"AMG Line 기본" },
        { name:"19인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rvc.jpg", note:"AMG Line 유료 옵션" },
        { name:"19인치 AMG 멀티 스포크 경량 알로이 휠 (블랙)", img:P + "wheel-rvd.jpg", note:"AMG Line 유료 옵션" } ]},
      { title:"센터 콘솔", sub:"두 트림 공통", items:[
        { name:"하이 글로스 블랙 센터 콘솔", img:P + "trim-console-757.jpg", base:true },
        { name:"메탈 스트럭처 피니시 센터 콘솔", img:P + "trim-console-795.jpg", note:"유료 옵션" } ]},
      { title:"루프 라이너", sub:"블랙 · 크리스탈 그레이", items:[
        { name:"블랙", base:true }, { name:"크리스탈 그레이", note:"선택 사양" } ]}
    ],
    /* 외장 12가지 — 카탈로그 사진은 AMG Line */
    colors: [
      { name:"블랙", img:P + "color-040u.jpg" },
      { name:"폴라 화이트", img:P + "color-149u.jpg" },
      { name:"옵시디안 블랙", img:P + "color-197u.jpg" },
      { name:"하이 테크 실버", img:P + "color-922u.jpg" },
      { name:"그라파이트 그레이", img:P + "color-831u.jpg" },
      { name:"소달라이트 블루", img:P + "color-842u.jpg" },
      { name:"스펙트럴 블루", img:P + "color-970u.jpg" },
      { name:"셀레나이트 그레이", img:P + "color-992u.jpg" },
      { name:"MANUFAKTUR 그라파이트 그레이 마그노", img:P + "color-818u.jpg", mfk:true },
      { name:"MANUFAKTUR 오팔라이트 화이트 브라이트", img:P + "color-885u.jpg", mfk:true },
      { name:"MANUFAKTUR 알파인 그레이", img:P + "color-956u.jpg", mfk:true },
      { name:"MANUFAKTUR 파타고니아 레드 브라이트", img:P + "color-993u.jpg", mfk:true }
    ]
  };
})();
