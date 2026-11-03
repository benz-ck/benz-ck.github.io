/* ─────────────────────────────────────────────────────────
   전기 GLB 구성 페이지 자료 (model.html?m=GLB%20electric) — GLB 250+ electric 1트림
   - 트림 구성 · 사양 · 배터리: MY27 GLB electric 제품 정보 V2(2026-10)
   - 사진 · 휠 · 시트 · 트림 · 색상 · 충전(최대 320kW · 10→80% 약 22분) · 앞 트렁크 127ℓ: 전기 GLB 카탈로그(2026-10-28, 27년식)
     카탈로그 숨은 층 그림(c01_1 · c04_0 · c05_0 · c11_0 · c21_0 · c30_1 · c32_3 = 쪽에 안 보이는 다른 차 그림)과 GLB 200 electric 그림(6 · 7쪽)은 쓰지 않았다
   - WLTP 주행거리 · 10분 충전 · 휠베이스 · 트렁크: 2026-10-28 사전계약 발표 값. 최고출력은 국내 발표가 없어 유럽 발표 값
   - 가격: 2026-10-27 공식 가격표(27년식). 가격표 묶음이 GLB 라 extraRows 로 붙인다.
   제품 정보는 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 생산 표기는 싣지 않는다(사양 이름만).
   사진은 images/cars/glb-ev/ — 바꿀 때는 새 파일명으로. 만든 방법은 소재_GLB전기/홈페이지사진만들기.py
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["GLB electric"] = (function(){
  var P = "images/cars/glb-ev/";
  var ASK = "카탈로그 수록 · 선택 가능 여부 문의";
  return {
    name: "전기 GLB",
    badge: "27년식 The all-new electric GLB",
    tagline: "실내가 넉넉한 GLB, 이제 전기로.<br>GLB 250+ electric 한 가지 — 800V 급속 충전 · MBUX 슈퍼스크린.",
    asof: "MY27 GLB electric 제품 정보 2026년 10월 · 카탈로그 2026년 10월",
    source: "MY27 GLB electric 제품 정보(2026년 10월) · 전기 GLB 카탈로그(2026년 10월 28일, 27년식) · 사전계약 발표(2026년 10월) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5b.jpg"],
    bodies: { SUV: "전기 SUV" },
    extraRows: /^GLB .*electric/,
    lines: { "Progressive": P + "line-prog.jpg" },

    trims: [
      { id:"glb250e", name:"GLB 250+ electric", short:"GLB 250+ electric", body:"SUV", line:"Progressive", price:69900000, row:"27|GLB 250+ electric",
        engine:"glb250e", wheel:"83r", upholstery:"artico", wood:"t59h", highlights:["MBUX 슈퍼스크린 14+14인치", "800V 급속 충전 10→80% 약 22분", "앞 트렁크 127ℓ · 파노라믹 루프"] }
    ],

    /* 사양 — 단일 트림 (제품 정보 Specification · 기본 적용 사양) */
    features: [
      { g:"파워트레인 · 주행", rows:[
        ["서스펜션", "컴포트"],
        ["800V DC 급속 충전 시스템 (최대 320kW)", "S"],
        ["스페어 타이어", "타이어핏"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "PROGRESSIVE"],
        ["휠", "18인치 5 스포크 경량 알로이"],
        ["LED 고성능 헤드램프 · 어댑티브 상향등 어시스트", "S"],
        ["일루미네이티드 패널 · 일루미네이티드 도어 실", "S"],
        ["파노라믹 루프", "S"],
        ["플러시 도어 핸들 · 키레스 고 패키지", "S"],
        ["전면 트렁크 (프렁크 127ℓ) · 전동 트렁크", "S"],
        ["MB.DRIVE 주차 어시스트 360° · 파크트로닉", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "컴포트 시트 · ARTICO 가죽"],
        ["트림", "앤트러사이트 아노다이즈드 룩"],
        ["다기능 스포츠 스티어링 휠 (나파 가죽) · 열선", "S"],
        ["앞좌석 열선 시트 · 메모리 패키지", "S"],
        ["2존 자동 온도 조절", "S"],
        ["앰비언트 라이트", "S"]
      ]},
      { g:"MBUX · 안전", rows:[
        ["MBUX 슈퍼스크린 (14인치 센터 + 14인치 동승석)", "S"],
        ["4세대 MBUX (MB.OS) · 내비게이션", "S"],
        ["헤드업 디스플레이", "S"],
        ["셀피/비디오 카메라 · 얼굴 인식", "S"],
        ["스마트폰 연동 · 앞좌석 무선 충전", "S"],
        ["톨 정산 시스템", "S"],
        ["MB.DRIVE 어시스트 (차선 변경 · 차선 이탈 방지 · 스티어링 · 사각지대)", "S"],
        ["MB.CHARGE Public PLUS 요금제 1년", "S"]
      ]}
    ],
    featureNote: "27년식 제품 정보 · 카탈로그(2026년 10월) 기준입니다. 국내에는 GLB 250+ electric 한 가지가 먼저 들어오고, 고객 인도는 11월 말부터입니다.",

    engineNote: "800V 전기 아키텍처로 최대 320kW 급속 충전, 배터리 10%→80% 약 22분(카탈로그).",
    engines: {
      glb250e: { name:"GLB 250+ electric", kind:"전기 모터 · 85kWh 배터리 · 800V", chips:["85kWh", "WLTP 631km", "10→80% 약 22분"],
                 desc:"WLTP(유럽) 기준 최대 <b>631km</b>, 10분 충전으로 최대 260km(WLTP). 국내 인증 주행거리 · 전비는 인도 시점에 발표됩니다." }
    },

    specs: { rows: [
      ["최고출력", "국내 발표 전 (유럽 발표 200kW · 272마력)"],
      ["배터리", "85kWh (NMC)"],
      ["주행거리 (WLTP · 유럽)", "최대 631km"],
      ["국내 인증 주행거리 · 전비", "—"],
      ["급속 충전", "최대 320kW · 10→80% 약 22분"],
      ["10분 충전", "최대 260km 주행분 (WLTP)"],
      ["휠베이스", "2,889mm (이전 GLB보다 60mm 길다)"],
      ["트렁크", "540~1,715ℓ · 앞 트렁크 127ℓ"],
      ["서스펜션", "컴포트"]
    ] },
    specNote: "배터리는 제품 정보, 급속 충전 · 앞 트렁크는 카탈로그, 주행거리 · 10분 충전 · 휠베이스 · 트렁크는 2026년 10월 사전계약 발표 값입니다. 주행거리는 유럽(WLTP) 수치이고 최고출력은 유럽 발표 값입니다. 국내 인증 전비 · 주행거리 · 크기(—)는 인도 시점에 발표되는 대로 채워 넣겠습니다.",

    wheels: {
      "83r": { name:"18인치 5 스포크 경량 알로이 휠", img:P + "wheel-83r.jpg" }
    },
    upholstery: {
      artico: { name:"ARTICO 가죽", colors:[
        { name:"블랙", img:P + "seat-black.jpg" },
        { name:"아이보리 베이지 / 블랙", img:P + "seat-ivory.jpg" } ]}
    },
    woods: {
      t59h: { name:"앤트러사이트 아노다이즈드 룩 트림", img:P + "trim-59h.jpg" }
    },
    extraCfg: [
      { title:"휠", sub:"카탈로그 휠 3가지", items:[
        { name:"18인치 5 스포크 경량 알로이 휠", img:P + "wheel-83r.jpg", note:"기본" },
        { name:"19인치 에어로 다이나믹 멀티 스포크 경량 알로이 휠", img:P + "wheel-28r.jpg", note:ASK },
        { name:"18인치 경량 휠", img:P + "wheel-r19.jpg", note:ASK } ]},
      { title:"가죽 시트", sub:"카탈로그 수록", items:[
        { name:"가죽 브라운 / 블랙", img:P + "seat-brown.jpg", note:ASK } ]},
      { title:"스티어링 휠 · 루프 라이너", sub:"기본", items:[
        { name:"다기능 스포츠 스티어링 휠", img:P + "steering.jpg", base:true },
        { name:"블랙 루프 라이너 · 파노라믹 루프", img:P + "roofliner.jpg", base:true } ]},
      { title:"앞 트렁크", sub:"전자식 프렁크 127ℓ · 최대 20kg", items:[
        { name:"보닛 엠블럼을 터치하거나 운전석 도어 버튼으로 여는 앞 트렁크", img:P + "frunk.jpg", base:true } ]}
    ],
    /* 카탈로그 「Colours」 3가지 */
    colors: [
      { name:"폴라 화이트", img:P + "color-149u.jpg" },
      { name:"아쿠아 민트", img:P + "color-341u.jpg" },
      { name:"제트 블랙", img:P + "color-696u.jpg" }
    ]
  };
})();
