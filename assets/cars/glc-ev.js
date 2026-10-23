/* ─────────────────────────────────────────────────────────
   전기 GLC 구성 페이지 자료 (model.html?m=GLC%20electric) — GLC 300 4MATIC electric 런치 에디션 2트림
   - 트림 구성 · 사양 · 배터리: MY27 GLC electric 제품 정보 V3(2026-10)
   - 사진 · 휠 · 시트 · 트림 · 색상 · 충전(최대 330kW · 10→80% 약 22분): GLCEV 카탈로그(2026-07-09, 27년식)
   - 출력 · WLTP 주행거리 · 트렁크: 2026-07 사전계약 발표 값(블로그 「전기 GLC 성수 팝업」 편과 같은 값). 국내 인증 전비 · 주행거리는 아직 없다
   - 가격: 2026-10-20 공식 가격표(27년식). 가격표 묶음이 GLC 라 extraRows 로 붙인다.
   제품 정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드는 싣지 않는다(사양 이름만).
   GLC 400 4MATIC electric 은 제품 정보에 「추후 업데이트 예정」이라 넣지 않았다.
   사진은 images/cars/glc-ev/ — 바꿀 때는 새 파일명으로.
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["GLC electric"] = (function(){
  var P = "images/cars/glc-ev/";
  var LAUNCH = "런치 에디션 사전계약 차량이라 " + PRICE_MONTH + "월 프로모션 대상이 아닙니다. 고객 인도는 2026년 4분기부터이고, 보조금 · 금융 조건은 문의 주세요.";
  return {
    name: "전기 GLC",
    badge: "27년식 The all-new electric GLC",
    tagline: "GLC 그대로, 이제 전기로.<br>GLC 300 4MATIC electric 런치 에디션 두 가지.",
    asof: "MY27 GLC electric 제품 정보 2026년 10월 · 카탈로그 2026년 7월",
    source: "MY27 GLC electric 제품 정보(2026년 10월) · 전기 GLC 카탈로그(2026년 7월, 27년식) · 사전계약 발표(2026년 7월) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg"],
    bodies: { SUV: "전기 SUV" },
    extraRows: /^GLC .*electric/,
    lines: { "AMG Line": P + "line-amg.jpg", "AMG Line+": P + "line-amgp.jpg" },

    trims: [
      { id:"glc300e", name:"GLC 300 4MATIC electric AMG Line (Launch Edition)", short:"GLC 300 4M electric AMG Line", body:"SUV", line:"AMG Line", price:90000000, row:"27|GLC 300 4M electric AMG Line (Launch Edition)", dealNote:LAUNCH,
        engine:"glc300e", wheel:"rrn", upholstery:"artico", wood:"t26h", highlights:["MBUX 하이퍼스크린", "부메스터® 하이엔드 4D 사운드", "800V 급속 충전"] },
      { id:"glc300ep", name:"GLC 300 4MATIC electric AMG Line+ (Launch Edition)", short:"GLC 300 4M electric AMG Line+", body:"SUV", line:"AMG Line+", price:94800000, row:"27|GLC 300 4M electric AMG Line+ (Launch Edition)", dealNote:LAUNCH,
        engine:"glc300e", wheel:"rvq", upholstery:"artico", wood:"th75", highlights:["에어매틱", "리어 액슬 스티어링 4.5°", "20인치 AMG 10 스포크 휠"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 (제품 정보 Specification) */
    features: [
      { g:"파워트레인 · 주행", rows:[
        ["구동", "4MATIC 사륜구동", "4MATIC 사륜구동"],
        ["서스펜션", "컴포트", "에어매틱"],
        ["리어 액슬 스티어링", "-", "4.5°"],
        ["800V 급속 충전 시스템 (최대 330kW)", "S", "S"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "AMG Line", "AMG Line"],
        ["휠", "20인치 AMG 5 스포크", "20인치 AMG 10 스포크"],
        ["일루미네이티드 아이코닉 그릴 · 디지털 라이트", "S", "S"],
        ["일루미네이티드 파노라믹 루프", "S", "S"],
        ["플러시 도어 핸들 키레스 고 · 핸즈 프리 액세스", "S", "S"],
        ["전자식 전면부 트렁크 (프렁크)", "S", "S"],
        ["360° 카메라가 포함된 주차 어시스트 · 파크트로닉", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "ARTICO 가죽", "ARTICO 가죽"],
        ["트림", "브라운 오픈포어 파인라인 버치 우드", "블랙 / 실버 메탈릭 혼방 패브릭"],
        ["AMG Line 스포츠 시트 패키지", "S", "S"],
        ["앞좌석 열선 · 통풍 · 마사지 · 메모리", "S", "S"],
        ["뒷좌석 열선 시트", "S", "S"],
        ["다기능 스포츠 스티어링 휠 · 열선", "S", "S"],
        ["자동 온도 조절 · 액티브 앰비언트 라이트", "S", "S"]
      ]},
      { g:"MBUX · 안전", rows:[
        ["MBUX 하이퍼스크린 (39.1인치) · 동승석 디스플레이", "S", "S"],
        ["헤드업 디스플레이 · MBUX 증강 현실 내비게이션", "S", "S"],
        ["부메스터® 하이엔드 4D 서라운드 사운드", "S", "S"],
        ["MB.OS · 스마트폰 통합 패키지 · 앞좌석 무선 충전", "S", "S"],
        ["MB.DRIVE 어시스트 · PRE-SAFE® 임펄스 사이드", "S", "S"],
        ["공기 청정 패키지", "S", "S"],
        ["MB.CHARGE Public PLUS 요금제 1년", "S", "S"]
      ]}
    ],
    featureNote: "27년식 제품 정보(2026년 10월) 기준입니다. 두 트림의 차이는 서스펜션(에어매틱) · 리어 액슬 스티어링 · 휠 · 실내 트림이고, 나머지는 모두 같습니다.",

    engineNote: "800V 전기 아키텍처로 최대 330kW 급속 충전, 배터리 10%→80% 약 22분(카탈로그). 두 트림의 모터 · 배터리는 같습니다.",
    engines: {
      glc300e: { name:"GLC 300 4MATIC electric", kind:"전기 모터 · 4MATIC 사륜구동 · 85kWh", chips:["310kW (약 421마력)", "85kWh", "10→80% 약 22분"],
                 desc:"WLTP(유럽) 기준 최대 <b>616km</b>. 국내 인증 주행거리는 출고 시점에 발표됩니다." }
    },

    specs: { rows: [
      ["최고출력", "310kW (약 421마력)", "310kW (약 421마력)"],
      ["배터리", "85kWh (NMC)", "85kWh (NMC)"],
      ["주행거리 (WLTP · 유럽)", "최대 616km", "최대 616km"],
      ["국내 인증 주행거리 · 전비", "—", "—"],
      ["급속 충전", "최대 330kW · 10→80% 약 22분", "최대 330kW · 10→80% 약 22분"],
      ["구동", "4MATIC 사륜구동", "4MATIC 사륜구동"],
      ["서스펜션", "컴포트", "에어매틱 · 리어 액슬 스티어링 4.5°"],
      ["트렁크", "570~1,740ℓ · 앞 트렁크 128ℓ", "570~1,740ℓ · 앞 트렁크 128ℓ"]
    ] },
    specNote: "배터리는 제품 정보, 급속 충전은 카탈로그, 출력 · 주행거리 · 트렁크는 2026년 7월 사전계약 발표 값입니다. 주행거리는 유럽(WLTP) 수치이고, 국내 인증 전비 · 주행거리 · 중량 · 크기(—)는 출고 시점에 발표되는 대로 채워 넣겠습니다.",

    wheels: {
      rrn: { name:"20인치 AMG 5 스포크 경량 알로이 휠", img:P + "wheel-rrn.jpg" },
      rvq: { name:"20인치 AMG 10 스포크 경량 알로이 휠", img:P + "wheel-rvq.jpg" }
    },
    upholstery: {
      artico: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-black.jpg" },
        { name:"비치 브라운 / 블랙", img:P + "seat-brown.jpg" },
        { name:"아이보리 베이지 / 블랙", img:P + "seat-ivory.jpg" } ]}
    },
    woods: {
      t26h: { name:"브라운 오픈포어 파인라인 버치 우드 트림", img:P + "trim-26h.jpg" },
      th75: { name:"블랙 / 실버 메탈릭 혼방 패브릭 트림", img:P + "trim-h75.jpg" },
      t73h: { name:"하이 글로스 실버 메탈릭 혼방 패브릭 트림", img:P + "trim-73h.jpg", note:"카탈로그 수록 · 선택 가능 여부 문의" }
    },
    extraCfg: [
      { title:"휠", sub:"카탈로그 휠 4가지", items:[
        { name:"20인치 AMG 5 스포크 경량 알로이 휠", img:P + "wheel-rrn.jpg", note:"AMG Line 기본" },
        { name:"20인치 AMG 10 스포크 경량 알로이 휠", img:P + "wheel-rvq.jpg", note:"AMG Line+ 기본" },
        { name:"20인치 AMG 5 스포크 경량 알로이 휠", img:P + "wheel-rrm.jpg", note:"카탈로그 수록(디자인 다름) · 선택 가능 여부 문의" },
        { name:"21인치 AMG Y 스포크 경량 알로이 휠", img:P + "wheel-rwd.jpg", note:"카탈로그 수록 · 선택 가능 여부 문의" } ]},
      { title:"앞 트렁크", sub:"전자식 프렁크 128ℓ", items:[
        { name:"보닛 엠블럼을 터치해 여는 전자식 전면부 트렁크", img:P + "frunk.jpg", base:true } ]}
    ],
    /* 카탈로그 「Colours」 8가지 (MANUFAKTUR 2가지 포함) */
    colors: [
      { name:"폴라 화이트", img:P + "color-149u.jpg" },
      { name:"옵시디안 블랙", img:P + "color-197u.jpg" },
      { name:"라벤더 실버", img:P + "color-689u.jpg" },
      { name:"시어 블루", img:P + "color-809u.jpg" },
      { name:"소달라이트 블루", img:P + "color-842u.jpg" },
      { name:"하이 테크 실버", img:P + "color-922u.jpg" },
      { name:"MANUFAKTUR 알파인 그레이", img:P + "color-956u.jpg", mfk:true },
      { name:"MANUFAKTUR 오팔라이트 화이트", img:P + "color-885u.jpg", mfk:true }
    ]
  };
})();
