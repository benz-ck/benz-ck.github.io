/* ─────────────────────────────────────────────────────────
   GLB 구성 페이지 자료 (model.html?m=GLB) — GLB 200 d · GLB 250 4MATIC · AMG GLB 35 4MATIC
   - 트림 구성 · 휠 · 시트 · 트림 · 색상: MY26 GLB Order Guideline v3 (2026-03)
   - 사양 비교 · 제원, 사진: GLB 카탈로그(2025-09-17) · AMG GLB 카탈로그(2025-09-17)
   - 가격: 2026-10-27 공식 가격표
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 옵션 가격은 싣지 않는다(사양 이름만).
   사진은 images/cars/glb/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["GLB"] = (function(){
  var P = "images/cars/glb/";
  var NOPROMO = PRICE_MONTH + "월 프로모션 공문에 따로 나오지 않는 트림이라 조건은 문의 주세요.";
  return {
    name: "GLB",
    badge: "26년식 GLB · Mercedes-AMG GLB",
    tagline: "실내가 넉넉한 박스형 컴팩트 SUV.<br>디젤 GLB 200 d · 가솔린 GLB 250 4MATIC · AMG GLB 35 를 한눈에.",
    asof: "MY26 GLB 오더 가이드라인 2026년 3월 · 카탈로그 2025년 9월",
    source: "MY26 GLB 오더 가이드라인(2026년 3월) · GLB · AMG GLB 카탈로그(2025년 9월) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg"],
    bodies: { SUV: "컴팩트 SUV" },
    extraRows: /^AMG GLB/,
    lines: { "Progressive": P + "line-prog.jpg", "AMG Line": P + "line-amg.jpg", "Mercedes-AMG": P + "line-35.jpg" },

    trims: [
      { id:"glb200d", name:"GLB 200 d", short:"GLB 200 d", body:"SUV", line:"Progressive", price:64300000, row:"", dealNote:NOPROMO,
        engine:"om654", wheel:"01r", upholstery:"prog", wood:"56h", highlights:["디젤 복합연비 13.7km/ℓ (3등급)", "가장 낮은 가격의 GLB", "18인치 휠 4가지 무료 선택"] },
      { id:"glb250", name:"GLB 250 4MATIC", short:"GLB 250 4M", body:"SUV", line:"AMG Line", price:72000000, row:"26|GLB 250 4M",
        engine:"m260", wheel:"rtf", upholstery:"amgline", wood:"56h", highlights:["4MATIC 사륜구동", "AMG Line 익스테리어 · 인테리어", "48V 마일드 하이브리드"] },
      { id:"glb35", name:"Mercedes-AMG GLB 35 4MATIC", short:"AMG GLB 35", body:"SUV", line:"Mercedes-AMG", price:79500000, row:"26|AMG GLB 35 4M",
        engine:"m260amg", wheel:"rth", upholstery:"amg35", wood:"h62", highlights:["306마력 · 0→100km/h 5.5초", "AMG 라이드 컨트롤 서스펜션", "AMG 퍼포먼스 스티어링 휠"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (카탈로그 Option list · Highlights) */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "4기통 디젤 OM 654", "4기통 가솔린 M 260 + 48V 마일드 하이브리드", "AMG 4기통 M 260"],
        ["변속기", "8G-DCT", "8G-DCT", "AMG SPEEDSHIFT DCT 8G"],
        ["구동", "전륜구동", "4MATIC 사륜구동", "4MATIC 사륜구동"],
        ["서스펜션", "컴포트 서스펜션", "컴포트 서스펜션", "AMG 라이드 컨트롤 서스펜션"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "Progressive", "AMG Line", "Mercedes-AMG"],
        ["휠", "18인치 5트윈 스포크", "19인치 AMG 5트윈 스포크", "19인치 AMG 5트윈 스포크"],
        ["파노라믹 선루프", "S", "S", "S"],
        ["LED 고성능 헤드램프 · 어댑티브 상향등 어시스트", "S", "S", "S"],
        ["전동 트렁크 · 핸즈 프리 액세스 · 키레스 고 패키지", "S", "S", "S"],
        ["온열 윈드스크린 워셔 시스템", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "아티코 가죽", "아티코 가죽 · 마이크로컷 마이크로파이버", "아티코 가죽 · 마이크로컷 마이크로파이버"],
        ["스티어링 휠", "다기능 스포츠, 가죽", "다기능 스포츠, 나파 가죽", "AMG 퍼포먼스, 나파 가죽"],
        ["기본 실내 트림", "스타 패턴 · 백 발광 트림", "스타 패턴 · 백 발광 트림", "카본 스트럭처 트림"],
        ["앞좌석 열선 시트 · 메모리 패키지", "S", "S", "S"],
        ["2존 자동 온도 조절 · 공기 청정 패키지", "S", "S", "S"],
        ["다기능 열선 스티어링 휠 · 64색 앰비언트 라이트", "S", "S", "S"],
        ["뒷좌석 접이식 시트", "S", "S", "S"]
      ]},
      { g:"안전 · MBUX · 편의", rows:[
        ["드라이빙 어시스턴스 패키지 (디스트로닉 · 액티브 차선 이탈 방지 · 액티브 사각지대 어시스트)", "S", "S", "S"],
        ["PARKTRONIC · 후방 카메라 · 에어백 7개", "S", "S", "S"],
        ["2세대 MBUX · 내비게이션 · 10.25인치 계기반 + 10.25인치 미디어 디스플레이", "S", "S", "S"],
        ["무선 스마트폰 통합 패키지 · 원격 시동 · 원격 공조", "S", "S", "S"]
      ]}
    ],
    featureNote: "26년식 카탈로그 · 오더 가이드라인 기준입니다. 지금은 부메스터® · 어드밴스드 사운드와 360° 카메라를 고를 수 없습니다.",

    engineNote: "GLB 250 4MATIC 은 48V 마일드 하이브리드로 최대 10kW 의 에너지를 회생합니다(카탈로그). 세 트림 모두 8단 듀얼 클러치 변속기입니다.",
    engines: {
      om654: { name:"OM 654", kind:"직렬 4기통 디젤", chips:["1,950cc", "150마력", "32.6kg·m"],
               desc:"GLB 에서 가장 연비가 좋은 엔진. <b>복합연비 13.7km/ℓ (3등급)</b>, 전륜구동입니다." },
      m260: { name:"M 260", kind:"직렬 4기통 가솔린 + 48V 마일드 하이브리드", chips:["1,991cc", "224마력", "35.7kg·m"],
              desc:"4MATIC 사륜구동과 짝을 이룬 가솔린. <b>0→100km/h 7.0초</b>로 짐을 싣고도 여유롭습니다." },
      m260amg: { name:"M 260 (AMG)", kind:"AMG 직렬 4기통 터보", chips:["306마력", "40.8kg·m", "0→100 5.5초"],
              desc:"AMG GLB 35 의 엔진. AMG SPEEDSHIFT DCT 8G 와 <b>AMG 라이드 컨트롤 서스펜션</b>이 기본입니다." }
    },

    specs: { rows: [
      ["엔진", "OM 654 직렬 4기통 디젤", "M 260 직렬 4기통", "M 260 직렬 4기통 (AMG)"],
      ["배기량", "1,950cc", "1,991cc", "1,991cc"],
      ["최고출력", "150마력", "224마력", "306마력"],
      ["최대토크", "32.6kg·m", "35.7kg·m", "40.8kg·m"],
      ["0→100km/h", "9.2초", "7.0초", "5.5초"],
      ["최고속도", "204km/h", "236km/h", "250km/h"],
      ["복합연비 (등급)", "13.7km/ℓ (3등급)", "10.5km/ℓ (4등급)", "9.2km/ℓ (5등급)"],
      ["도심 · 고속 연비", "12.5 · 15.4km/ℓ", "9.5 · 12.0km/ℓ", "8.4 · 10.5km/ℓ"],
      ["CO₂ 배출", "139g/km", "163g/km", "186g/km"],
      ["공차중량", "1,745kg", "1,775kg", "1,810kg"],
      ["전장 · 전폭 · 전고", "4,640 · 1,835 · 1,700mm", "4,650 · 1,845 · 1,690mm", "4,650 · 1,845 · 1,665mm"],
      ["휠베이스 · 최소회전반경", "2,830mm · 5.85m", "2,830mm · 5.85m", "2,830mm · 6.25m"],
      ["타이어", "235/55 R18", "235/50 R19", "235/50 R19"],
      ["트렁크", "570~1,805ℓ", "565~1,800ℓ", "570~1,805ℓ"],
      ["연료탱크", "52ℓ", "60ℓ", "60ℓ"]
    ] },
    specNote: "GLB · AMG GLB 카탈로그(2025년 9월)의 인증 차량 제원입니다.",

    wheels: {
      "01r": { name:"18인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-01r.jpg" },
      rtf: { name:"19인치 AMG 5트윈 스포크 경량 알로이 휠", img:P + "wheel-rtf.jpg" },
      rth: { name:"19인치 AMG 5트윈 스포크 경량 알로이 휠 (AMG)", img:P + "wheel-rth.jpg" }
    },
    upholstery: {
      prog: { name:"아티코 가죽", colors:[
        { name:"블랙", img:P + "seat-prog-black.jpg" },
        { name:"마키아토 베이지 / 블랙 (유료 옵션)", img:P + "seat-prog-beige.jpg" } ]},
      amgline: { name:"아티코 가죽 · 마이크로컷 마이크로파이버", colors:[
        { name:"블랙", img:P + "seat-amg-black.jpg" },
        { name:"세이지 그레이 / 블랙", img:P + "seat-amg-sage.jpg" },
        { name:"바히아 브라운 / 블랙 (유료 옵션)", img:P + "seat-amg-bahia.jpg" } ]},
      amg35: { name:"아티코 가죽 · 마이크로컷 마이크로파이버", colors:[
        { name:"블랙", img:P + "seat-35-black.jpg" },
        { name:"세이지 그레이 / 블랙", img:P + "seat-35-sage.jpg" },
        { name:"바히아 브라운 / 블랙 (유료 옵션)", img:P + "seat-35-bahia.jpg" },
        { name:"가죽 투톤 레드 페퍼 / 블랙 (유료 옵션)", img:P + "seat-35-red.jpg" } ]}
    },
    woods: {
      "56h": { name:"스타 패턴 트림 · 백 발광 트림", img:P + "trim-56h.jpg", note:"AMG GLB 35 유료 옵션" },
      h62: { name:"카본 스트럭처 트림", img:P + "trim-h62.jpg", note:"GLB 200 d · 250 무료 선택" },
      "55h": { name:"스타 패턴 트림 엘리먼트", img:P + "trim-55h.jpg", note:"GLB 200 d 무료 선택" }
    },
    extraCfg: [
      { title:"휠 선택", sub:"GLB 200 d 는 18인치 4가지 중 무료로 고르실 수 있습니다", items:[
        { name:"18인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-01r.jpg", note:"GLB 200 d 기본" },
        { name:"18인치 5스포크 경량 알로이 휠", img:P + "wheel-52r.jpg", note:"GLB 200 d 무료 선택" },
        { name:"18인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-r38.jpg", note:"GLB 200 d 무료 선택" },
        { name:"18인치 5트윈 스포크 경량 알로이 휠 (그레이)", img:P + "wheel-r74.jpg", note:"GLB 200 d 무료 선택" } ]},
      { title:"루프 라이너", sub:"블랙 · 베이지 · 크리스탈 그레이", items:[
        { name:"블랙", base:true }, { name:"베이지", note:"GLB 200 d 선택 사양" }, { name:"크리스탈 그레이", note:"선택 사양" } ]}
    ],
    /* 26년식 외장 7가지 — 사진은 GLB(AMG Line) / AMG GLB 35 */
    colors: (function(){
      function c(name, code, mfk){ var o = { name:name, img:P + "color-" + code + ".jpg", lineImg:{ "Mercedes-AMG": P + "amg-" + code + ".jpg" } }; if (mfk) o.mfk = true; return o; }
      return [
        c("폴라 화이트", "149u"), c("나이트 블랙", "696u"), c("코스모스 블랙", "191u"), c("마운틴 그레이", "787u"),
        c("하이 테크 실버", "922u"), c("스펙트럴 블루", "970u"), c("MANUFAKTUR 파타고니아 레드", "993u", true)
      ];
    })()
  };
})();
