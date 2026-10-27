/* ─────────────────────────────────────────────────────────
   A-Class 구성 페이지 자료 (model.html?m=A-Class) — 해치백 · 세단 · AMG A 35 · AMG A 45 S
   - 트림 구성 · 휠 · 시트 · 트림 · 색상: MY26 A-Class Order Guideline v3 (2026-01) · A-Class Sedan Order Guideline v2 (2025-06)
   - 사양 비교 · 제원, 사진: A-Class 카탈로그(2025-08-11) · A-Class Sedan 카탈로그(2025-07-29)
     · AMG A-Class 카탈로그(2025-01-24, 25년식) · AMG A-Class Sedan 카탈로그(2025-06-05)
   - 가격: 2026-10-27 공식 가격표
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 옵션 가격은 싣지 않는다(사양 이름만).
   사진은 images/cars/a-class/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["A-Class"] = (function(){
  var P = "images/cars/a-class/";
  var NOPROMO = PRICE_MONTH + "월 프로모션 공문에 따로 나오지 않는 트림이라 조건은 문의 주세요.";
  return {
    name: "A-Class",
    badge: "26년식 A-Class 해치백 · 세단 · Mercedes-AMG",
    tagline: "벤츠를 가장 가볍게 시작하는 컴팩트.<br>A 220 해치백 · 세단과 AMG A 35 · A 45 S 를 한눈에.",
    asof: "MY26 A-Class 오더 가이드라인 2026년 1월 · 카탈로그 2025년",
    source: "MY26 A-Class · A-Class Sedan 오더 가이드라인(2026년 1월 · 2025년 6월) · A-Class · A-Class Sedan 카탈로그(2025년 8월 · 7월) · AMG A-Class · AMG A-Class Sedan 카탈로그(2025년 1월 · 6월) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg"],
    bodies: { HATCH: "해치백", SEDAN: "세단" },
    diffByBody: true,
    extraRows: /^AMG A 45/,
    lines: { "PROGRESSIVE|HATCH": P + "line-hatch.jpg", "PROGRESSIVE|SEDAN": P + "line-sedan.jpg",
             "Mercedes-AMG|SEDAN": P + "line-35.jpg", "Mercedes-AMG|HATCH": P + "line-45.jpg" },

    /* 「달라지는 사양」은 같은 차체의 바로 아래 트림과 비교 — A 35 는 A 220 세단, A 45 S 는 A 220 해치백 대비 */
    trims: [
      { id:"a220", name:"A 220 해치백", short:"A 220 해치백", body:"HATCH", line:"PROGRESSIVE", price:48700000, row:"26|A 220 Hatch",
        engine:"m260", wheel:"r62", upholstery:"artico", wood:"52h", highlights:["벤츠에서 가장 낮은 가격", "복합연비 12.2km/ℓ (3등급)", "무선 스마트폰 통합 패키지"] },
      { id:"a220s", name:"A 220 세단", short:"A 220 세단", body:"SEDAN", line:"PROGRESSIVE", price:50500000, row:"26|A 220 Sedan",
        engine:"m260", wheel:"r31", upholstery:"artico", wood:"52h", highlights:["트렁크가 따로 있는 4도어 세단", "18인치 휠", "핸즈 프리 액세스"] },
      { id:"a35", name:"Mercedes-AMG A 35 4MATIC 세단", short:"AMG A 35 세단", body:"SEDAN", line:"Mercedes-AMG", price:68600000, row:"", dealNote:NOPROMO,
        engine:"m260amg", wheel:"rqq", upholstery:"amg35", wood:"amg", highlights:["306마력 · 0→100km/h 4.8초", "AMG 4MATIC 사륜구동", "파노라믹 선루프"] },
      { id:"a45", name:"Mercedes-AMG A 45 S 4MATIC+", short:"AMG A 45 S", body:"HATCH", line:"Mercedes-AMG", price:82300000, row:"27|AMG A 45 S 4M+", alt:["26|AMG A 45 S 4M+"],
        engine:"m139", wheel:"rsz", upholstery:"amg45", wood:"amg", highlights:["421마력 · 0→100km/h 3.9초", "AMG 라이드 컨트롤 서스펜션", "부메스터® 서라운드 사운드"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (카탈로그 Option list · 오더 가이드라인) */
    features: [
      { g:"파워트레인", rows:[
        ["엔진", "4기통 가솔린 M 260", "4기통 가솔린 M 260", "AMG 4기통 M 260", "AMG 4기통 M 139"],
        ["변속기", "8G-DCT", "8G-DCT", "AMG SPEEDSHIFT DCT 8G", "AMG SPEEDSHIFT DCT 8G"],
        ["구동", "전륜구동", "전륜구동", "4MATIC 사륜구동", "4MATIC+ 사륜구동"],
        ["서스펜션", "컴포트 서스펜션", "컴포트 서스펜션", "AMG 서스펜션", "AMG 라이드 컨트롤 서스펜션"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "PROGRESSIVE", "PROGRESSIVE", "Mercedes-AMG", "Mercedes-AMG"],
        ["휠", "17인치 5트윈 스포크", "18인치 5트윈 스포크", "18인치 AMG 10스포크", "19인치 AMG 크로스 스포크 단조"],
        ["파노라믹 선루프", "컨비니언트 패키지 선택", "컨비니언트 패키지 선택", "S", "S"],
        ["어댑티브 상향등 어시스트", "S", "S", "S", "-"],
        ["핸즈 프리 액세스 (트렁크)", "-", "S", "S", "-"],
        ["LED 고성능 헤드램프 · 온열 윈드스크린 워셔 시스템", "S", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "아티코 가죽", "아티코 가죽", "아티코 가죽 · 마이크로컷 마이크로파이버", "아티코 가죽 · 마이크로컷 마이크로파이버 AMG"],
        ["스티어링 휠", "다기능 스포츠, 가죽", "다기능 스포츠, 가죽", "AMG 퍼포먼스, 나파 가죽", "AMG 퍼포먼스, 나파 가죽"],
        ["기본 실내 트림", "다크 카본 파이버 룩", "다크 카본 파이버 룩", "AMG 기본 트림", "AMG 기본 트림"],
        ["사운드 시스템", "기본 사운드", "기본 사운드", "기본 사운드", "부메스터® 서라운드"],
        ["앞좌석 열선 시트 · 앞좌석 메모리 패키지", "S", "S", "S", "S"],
        ["다기능 열선 스티어링 휠 · 64색 앰비언트 라이트", "S", "S", "S", "S"],
        ["뒷좌석 접이식 시트", "S", "S", "S", "S"]
      ]},
      { g:"안전 · MBUX · 편의", rows:[
        ["액티브 디스턴스 어시스트 디스트로닉", "선택 사양", "선택 사양", "선택 사양", "S"],
        ["MBUX 내비게이션", "선택 사양", "선택 사양", "S", "S"],
        ["액티브 브레이크 어시스트 · 차선 이탈 방지 · 사각지대 어시스트", "S", "S", "S", "S"],
        ["PARKTRONIC · 후방 카메라", "S", "S", "S", "S"],
        ["2세대 MBUX · 10.25인치 디지털 계기반 + 10.25인치 미디어 디스플레이", "S", "S", "S", "S"],
        ["무선 스마트폰 통합 패키지 · 원격 시동 · 원격 공조", "S", "S", "S", "S"],
        ["키레스 고", "S", "S", "S", "S"]
      ]}
    ],
    featureNote: "A 220 의 파노라믹 선루프 · 자동 온도 조절 · 공기 청정 패키지(+360° 카메라)는 컨비니언트 패키지로, 디스트로닉 · 내비게이션은 주문 시 선택하거나 출고 후 메르세데스-벤츠 스토어에서 구매하실 수 있습니다. 26년식은 스펙트럴 블루 외장 색상이 빠졌습니다.",

    engineNote: "A 220 은 48V 마일드 하이브리드가 붙은 2.0리터 4기통입니다. AMG A 35 · A 45 S 는 AMG 가 다듬은 4기통 터보 엔진에 사륜구동이 기본입니다.",
    engines: {
      m260: { name:"M 260", kind:"직렬 4기통 가솔린 + 48V 마일드 하이브리드", chips:["1,991cc", "190마력", "30.6kg·m"],
              desc:"부드러운 8단 듀얼 클러치와 짝을 이뤄 <b>복합연비 12.2~12.5km/ℓ (3등급)</b>. 출퇴근과 시내 주행에 알맞습니다." },
      m260amg: { name:"M 260 (AMG)", kind:"AMG 직렬 4기통 터보", chips:["306마력", "40.8kg·m", "0→100 4.8초"],
              desc:"AMG A 35 의 엔진. 4MATIC 사륜구동과 AMG SPEEDSHIFT DCT 8G 로 <b>일상과 스포츠 주행을 함께</b> 즐기실 수 있습니다." },
      m139: { name:"M 139", kind:"AMG 2.0리터 4기통 터보", chips:["421마력", "51.0kg·m", "0→100 3.9초"],
              desc:"트윈 스크롤 터보를 단 <b>양산 4기통 가운데 손꼽히게 강력한 엔진</b>. 최고속도 270km/h, 4MATIC+ 와 AMG 라이드 컨트롤이 기본입니다." }
    },

    specs: { rows: [
      ["엔진", "M 260 직렬 4기통", "M 260 직렬 4기통", "M 260 직렬 4기통 (AMG)", "M 139 직렬 4기통"],
      ["배기량", "1,991cc", "1,991cc", "1,991cc", "1,991cc"],
      ["최고출력", "190마력", "190마력", "306마력", "421마력"],
      ["최대토크", "30.6kg·m", "30.6kg·m", "40.8kg·m", "51.0kg·m"],
      ["0→100km/h", "7.1초", "7.2초", "4.8초", "3.9초"],
      ["최고속도", "235km/h", "241km/h", "250km/h", "270km/h"],
      ["복합연비 (등급)", "12.2km/ℓ (3등급)", "12.5km/ℓ (3등급)", "10.4km/ℓ (4등급)", "9.1km/ℓ (5등급)"],
      ["도심 · 고속 연비", "10.7 · 14.5km/ℓ", "11.1 · 14.9km/ℓ", "9.3 · 12.3km/ℓ", "8.1 · 10.8km/ℓ"],
      ["CO₂ 배출", "139g/km", "134g/km", "163g/km", "189g/km"],
      ["공차중량", "1,485kg", "1,495kg", "1,625kg", "1,655kg"],
      ["전장 · 전폭 · 전고", "4,430 · 1,795 · 1,445mm", "4,560 · 1,795 · 1,445mm", "4,570 · 1,800 · 1,415mm", "4,455 · 1,850 · 1,410mm"],
      ["휠베이스 · 최소회전반경", "2,730mm · 5.5m", "2,730mm · 5.5m", "2,730mm · 5.75m", "2,730mm · 5.75m"],
      ["타이어", "205/55 R17", "225/45 R18", "235/40 R18", "245/35 R19"],
      ["트렁크", "350~1,190ℓ", "395ℓ", "420ℓ", "370~1,210ℓ"],
      ["연료탱크", "51ℓ", "51ℓ", "51ℓ", "51ℓ"]
    ] },
    specNote: "각 카탈로그의 인증 차량 제원입니다. AMG A 45 S 는 AMG A-Class 카탈로그(25년식 기준) 값이고, 27년식 인증 제원은 아직 따로 나오지 않았습니다.",

    wheels: {
      r62: { name:"17인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-r62.jpg" },
      r31: { name:"18인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-r31.jpg" },
      rqq: { name:"18인치 AMG 10스포크 경량 알로이 휠", img:P + "wheel-rqq.jpg" },
      rsz: { name:"19인치 AMG 크로스 스포크 단조 휠", img:P + "wheel-rsz.jpg" }
    },
    upholstery: {
      artico: { name:"아티코 가죽", colors:[
        { name:"블랙", img:P + "seat-black.jpg" },
        { name:"마키아토 베이지 / 블랙 (유료 옵션)", img:P + "seat-beige.jpg" } ]},
      amg35: { name:"아티코 가죽 · 마이크로컷 마이크로파이버", colors:[
        { name:"블랙", img:P + "seat-35-black.jpg" },
        { name:"세이지 그레이 / 블랙", img:P + "seat-35-sage.jpg" },
        { name:"바히아 브라운 / 블랙 (유료 옵션)", img:P + "seat-35-bahia.jpg" },
        { name:"가죽 투톤 레드 페퍼 / 블랙 (패키지 선택 시)", img:P + "seat-35-red.jpg" } ]},
      amg45: { name:"아티코 가죽 · 마이크로컷 마이크로파이버", colors:[
        { name:"AMG 블랙", img:P + "seat-45-amgblack.jpg" },
        { name:"블랙", img:P + "seat-45-black.jpg" },
        { name:"세이지 그레이 / 블랙 (유료 옵션)", img:P + "seat-45-sage.jpg" },
        { name:"바히아 브라운 / 블랙 (유료 옵션)", img:P + "seat-45-bahia.jpg" },
        { name:"가죽 투톤 레드 페퍼 / 블랙 (패키지 선택 시)", img:P + "seat-45-red.jpg" } ]}
    },
    woods: {
      "52h": { name:"다크 카본 파이버 룩 트림", img:P + "trim-52h.jpg" },
      amg: { name:"AMG 기본 트림", img:P + "trim-amg.jpg" },
      h15: { name:"블랙 오픈포어 우드 린덴 트림", img:P + "trim-h15.jpg", note:"유료 옵션" },
      h44: { name:"라이트 그레인 알루미늄 트림", img:P + "trim-h44.jpg", note:"유료 옵션" },
      h95: { name:"AMG 디자인 알루미늄 트림, 블랙 / 실버", img:P + "trim-h95.jpg", note:"AMG 유료 옵션" }
    },
    extraCfg: [
      { title:"휠 선택", sub:"트림별 기본 휠 외에 고를 수 있는 휠", items:[
        { name:"18인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-r31.jpg", note:"A 220 해치백 유료 옵션 · 세단 기본" },
        { name:"17인치 5트윈 스포크 경량 알로이 휠", img:P + "wheel-r62.jpg", note:"해치백 기본 · A 220 세단 무료 선택" } ]}
    ],
    /* 26년식 외장 7가지 — 사진은 차체 · 라인에 맞춰(해치백 / 세단 / AMG A 35 세단 / AMG A 45 S) */
    colors: (function(){
      function c(name, code, mfk){
        var o = { name:name, img:P + "color-" + code + ".jpg", lineImg:{ "SEDAN": P + "sedan-" + code + ".jpg", "Mercedes-AMG|HATCH": P + "a45-" + code + ".jpg" } };
        if (code !== "993u") o.lineImg["Mercedes-AMG|SEDAN"] = P + "a35-" + code + ".jpg";
        if (mfk) o.mfk = true;
        return o;
      }
      return [
        c("폴라 화이트", "149u"), c("나이트 블랙", "696u"), c("코스모스 블랙", "191u"), c("마운틴 그레이", "787u"), c("하이 테크 실버", "922u"),
        c("MANUFAKTUR 마운틴 그레이 마그노", "662u", true), c("MANUFAKTUR 파타고니아 레드", "993u", true)
      ];
    })()
  };
})();
