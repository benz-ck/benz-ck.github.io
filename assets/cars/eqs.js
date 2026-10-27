/* ─────────────────────────────────────────────────────────
   EQS SUV 구성 페이지 자료 (model.html?m=EQS) — EQS SUV 2트림 + 마이바흐 EQS 680 SUV
   - 트림 구성 · 휠 · 시트 · 트림 · 색상: MY26 EQS SUV 오더 가이드라인 V2(2025-12) · MY26 마이바흐 EQS 680 SUV 오더 가이드라인 V1(2025-06)
   - 사양 · 제원(출력 · 전비 · 주행거리 · 중량 · 크기) · 사진: EQS SUV 카탈로그(2026-09-07, 26년식) · 마이바흐 EQS SUV 카탈로그(2026-03-17)
   - 토크 · 0→100 · 최고속도 · 트렁크(EQS) · 마이바흐 배터리 kWh: 어프로치 북(2026-07, 26년식)
   - 가격: 2026-10-27 공식 가격표(26년식). 마이바흐는 가격표 묶음이 Mercedes-Maybach 라 extraRows 로 붙인다.
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드는 싣지 않는다(사양 이름만).
   마이바흐 색상 · 휠 사진은 카탈로그 쪽을 그려 잘라 냈다(mb-*). 사진은 images/cars/eqs/ — 바꿀 때는 새 파일명으로.
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["EQS"] = (function(){
  var P = "images/cars/eqs/";
  return {
    name: "EQS SUV",
    badge: "26년식 EQS SUV · Mercedes-Maybach EQS SUV",
    tagline: "벤츠 전기 SUV 의 기함.<br>EQS SUV 2트림과 마이바흐 EQS 680 SUV 를 한눈에.",
    asof: "MY26 EQS SUV 오더 가이드라인 2025년 12월 · 카탈로그 2026년 9월",
    source: "MY26 EQS SUV 오더 가이드라인(2025년 12월) · MY26 마이바흐 EQS 680 SUV 오더 가이드라인(2025년 6월) · EQS SUV 카탈로그(2026년 9월, 26년식) · 마이바흐 EQS SUV 카탈로그(2026년 3월) · 공식 가격표(2026년 10월 27일)",
    hero: [P + "hero-1.jpg", P + "mb-hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "mb-hero-3.jpg", P + "hero-4.jpg"],
    bodies: { SUV: "대형 전기 SUV", MB: "마이바흐" },
    extraRows: /^Maybach EQS/,
    lines: { "Electric Art": P + "line-ea.jpg", "AMG Line": P + "line-amg.jpg", "Maybach": P + "line-mb.jpg" },

    trims: [
      { id:"eqs450", name:"EQS 450 4MATIC SUV", short:"EQS 450 4M SUV", body:"SUV", line:"Electric Art", price:166000000, row:"26|EQS 450 4M SUV",
        engine:"eqs450", wheel:"w19r", upholstery:"leather", wood:"h08", highlights:["1회 충전 503km", "MBUX 하이퍼스크린", "부메스터® 3D 서라운드 사운드"] },
      { id:"eqs580", name:"EQS 580 4MATIC SUV", short:"EQS 580 4M SUV", body:"SUV", line:"AMG Line", price:192000000, row:"26|EQS 580 4M SUV",
        engine:"eqs580", wheel:"rpe", upholstery:"nappa", wood:"h39", highlights:["544마력 · 0→100 4.6초", "나파 가죽 시트", "22인치 AMG 멀티 스포크 휠"] },
      { id:"mb680", name:"Mercedes-Maybach EQS 680 SUV", short:"Maybach EQS 680 SUV", body:"MB", line:"Maybach", price:235000000, row:"26|Maybach EQS 680 SUV",
        engine:"mb680", wheel:"r06", upholstery:"mbnappa", wood:"mb06h", highlights:["마이바흐 첫 순수 전기차", "뒷좌석 이그제큐티브 시트", "부메스터® 4D 서라운드 사운드"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 */
    features: [
      { g:"파워트레인 · 주행", rows:[
        ["구동", "4MATIC 사륜구동", "4MATIC 사륜구동", "4MATIC 사륜구동"],
        ["서스펜션", "에어매틱", "에어매틱", "에어매틱"],
        ["리어 액슬 스티어링", "4.5°", "4.5°", "10°"]
      ]},
      { g:"익스테리어", rows:[
        ["외장 디자인", "Electric Art", "AMG Line", "Maybach"],
        ["휠", "21인치 5 스포크", "22인치 AMG 멀티 스포크", "22인치 마이바흐 7홀"],
        ["디지털 라이트 · 파노라믹 선루프", "S", "S", "S"],
        ["키레스 고 · 파워 클로징 · 전동 트렁크", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["시트", "가죽", "나파 가죽", "마이바흐 익스클루시브 나파 가죽"],
        ["뒷좌석", "전동 · 열선 시트", "전동 · 열선 시트", "이그제큐티브 시트 (통풍 · 마사지 · 목 어깨 온열)"],
        ["트림", "앤트러사이트 라임 우드", "선상 오픈 포어 월넛 우드", "MANUFAKTUR 브라운 오픈 포어 월넛 우드"],
        ["스티어링 휠", "다기능, 나파 가죽", "다기능, 나파 가죽", "다기능, 우드 · 가죽"],
        ["뒷좌석 편의", "뒷좌석 패키지", "뒷좌석 패키지 · 뒷좌석 엔터테인먼트", "MBUX 하이엔드 뒷좌석 엔터테인먼트 · 7인치 MBUX 태블릿"],
        ["앞좌석 멀티컨투어 시트 · 열선 · 통풍 · 메모리", "S", "S", "S"],
        ["4존 자동 온도 조절 · 액티브 앰비언트 라이트", "S", "S", "S"],
        ["어쿠스틱 컴포트 패키지", "S", "S", "S"]
      ]},
      { g:"MBUX · 안전", rows:[
        ["헤드업 디스플레이", "헤드업 디스플레이", "증강 현실 헤드업 디스플레이", "증강 현실 헤드업 디스플레이"],
        ["사운드 시스템", "부메스터® 3D 서라운드", "부메스터® 3D 서라운드", "부메스터® 4D 서라운드"],
        ["MBUX 하이퍼스크린 · 증강 현실 내비게이션", "S", "S", "S"],
        ["드라이빙 어시스턴스 패키지 플러스 · 360° 카메라", "S", "S", "S"],
        ["공기 청정 · 에어 밸런스 패키지", "S", "S", "S"]
      ]}
    ],
    featureNote: "26년식 오더 가이드라인 · 카탈로그 기준입니다. 마이바흐 EQS 680 SUV 는 마이바흐 카탈로그(2026년 3월) 기준이고, 뒷좌석 일등석 시트는 유료 옵션입니다.",

    engineNote: "세 트림 모두 4MATIC 사륜구동에 에어매틱 에어 서스펜션과 리어 액슬 스티어링이 기본입니다. 마이바흐는 리어 액슬 스티어링이 10°까지 꺾여 최소회전반경이 5.95m 입니다.",
    engines: {
      eqs450: { name:"EQS 450 4MATIC SUV", kind:"전기 모터 · 4MATIC 사륜구동", chips:["265kW (360마력)", "81.6kg·m", "1회 충전 503km"],
                desc:"EQS SUV 가운데 <b>주행거리가 가장 긴</b> 트림. 복합 전비 3.7km/kWh, 트렁크 645~2,100ℓ." },
      eqs580: { name:"EQS 580 4MATIC SUV", kind:"전기 모터 · 4MATIC 사륜구동", chips:["400kW (544마력)", "87.5kg·m", "0→100 4.6초"],
                desc:"AMG Line 외관과 22인치 AMG 휠, <b>나파 가죽 · 선상 오픈 포어 월넛 우드</b>가 기본인 상위 트림입니다." },
      mb680: { name:"Maybach EQS 680", kind:"전기 모터 · 4MATIC 사륜구동", chips:["484kW (658마력)", "96.9kg·m", "1회 충전 464km"],
               desc:"메르세데스-마이바흐의 <b>첫 순수 전기차</b>. 뒷좌석에도 통풍 · 마사지 · 목 어깨 온열이 들어간 이그제큐티브 시트가 기본입니다." }
    },

    specs: { rows: [
      ["모터 최고출력", "265kW (360마력)", "400kW (544마력)", "484kW (658마력)"],
      ["최대토크", "81.6kg·m", "87.5kg·m", "96.9kg·m"],
      ["배터리", "308Ah", "308Ah", "118kWh (308Ah)"],
      ["1회 충전 주행거리 (복합)", "503km", "483km", "464km"],
      ["복합 전비", "3.7km/kWh", "3.5km/kWh", "3.4km/kWh"],
      ["도심 · 고속 전비", "3.8 · 3.6km/kWh", "3.6 · 3.5km/kWh", "3.4 · 3.4km/kWh"],
      ["0→100km/h", "6.0초", "4.6초", "4.6초"],
      ["최고속도", "210km/h", "210km/h", "210km/h"],
      ["공차중량", "2,865kg", "2,905kg", "3,020kg"],
      ["전장 · 전폭 · 전고", "5,125 · 1,965 · 1,745mm", "5,135 · 1,965 · 1,745mm", "5,125 · 1,965 · 1,720mm"],
      ["트렁크", "645~2,100ℓ", "645~2,100ℓ", "440ℓ"]
    ] },
    specNote: "출력 · 배터리(Ah) · 전비 · 주행거리 · 중량 · 크기는 EQS SUV 카탈로그(2026년 9월)와 마이바흐 EQS SUV 카탈로그(2026년 3월)의 인증 차량 제원, 토크 · 0→100km/h · 최고속도 · EQS 트렁크 · 마이바흐 배터리 kWh 는 어프로치 북(2026년 7월) 기준입니다. 마력은 kW 를 환산한 값이고, 마이바흐 인증 차량은 21인치 휠 기준입니다.",

    wheels: {
      w19r: { name:"21인치 5 스포크 경량 알로이 휠", img:P + "wheel-19r.jpg" },
      rpe: { name:"22인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rpe.jpg" },
      r06: { name:"22인치 마이바흐 7홀 경량 알로이 휠", img:P + "mb-wheel-06r.jpg" }
    },
    upholstery: {
      leather: { name:"가죽", colors:[
        { name:"블랙 / 스페이스 그레이", img:P + "seat-201a.jpg" },
        { name:"블랙 / 발라오 브라운 (유료 옵션)", img:P + "seat-211a.jpg" },
        { name:"블랙 / 비스케이 블루 (유료 옵션)", img:P + "seat-221a.jpg" },
        { name:"마키아토 베이지 / 스페이스 그레이 (유료 옵션)", img:P + "seat-205a.jpg" },
        { name:"네바 그레이 / 발라오 브라운 (유료 옵션)", img:P + "seat-209a.jpg" } ]},
      nappa: { name:"나파 가죽", colors:[
        { name:"블랙 / 스페이스 그레이", img:P + "seat-801a.jpg" },
        { name:"블랙 / 발라오 브라운", img:P + "seat-811a.jpg" },
        { name:"블랙 / 비스케이 블루", img:P + "seat-821a.jpg" },
        { name:"마키아토 베이지 / 스페이스 그레이", img:P + "seat-805a.jpg" } ]},
      mbnappa: { name:"마이바흐 익스클루시브 나파 가죽", colors:[
        { name:"마키아토 베이지 / 브론즈 브라운 펄", img:P + "mb-seat-515a.jpg" },
        { name:"발라오 브라운 펄 / 에스프레소 브라운", img:P + "mb-seat-514a.jpg" },
        { name:"크리스탈 화이트 / 실버 그레이 펄 (유료 옵션)", img:P + "mb-seat-519a.jpg" } ]}
    },
    woods: {
      h08: { name:"앤트러사이트 라임 우드 트림", img:P + "trim-h08.jpg" },
      h39: { name:"선상 오픈 포어 월넛 우드 트림", img:P + "trim-h39.jpg" },
      mb06h: { name:"MANUFAKTUR 브라운 오픈 포어 월넛 우드 트림", img:P + "mb-trim-06h.jpg" },
      mb05h: { name:"MANUFAKTUR 브라운 오픈 포어 벌치 우드 트림", img:P + "mb-trim-05h.jpg", note:"마이바흐 무료 선택" },
      mbh17: { name:"MANUFAKTUR 플로잉 라인 피아노 라커 트림, 블랙", img:P + "mb-trim-h17.jpg", note:"마이바흐 무료 선택" }
    },
    extraCfg: [
      { title:"마이바흐 휠", sub:"Maybach EQS 680 SUV · 4가지", items:[
        { name:"22인치 마이바흐 7홀 경량 알로이 휠", img:P + "mb-wheel-06r.jpg", note:"기본" },
        { name:"21인치 마이바흐 멀티 스포크 경량 알로이 휠", img:P + "mb-wheel-03r.jpg", note:"무료 선택" },
        { name:"21인치 마이바흐 5홀 단조 휠", img:P + "mb-wheel-88r.jpg", note:"무료 선택" },
        { name:"21인치 마이바흐 멀티 스포크 경량 알로이 휠", img:P + "mb-wheel-23r.jpg", note:"유료 옵션 (디자인 다름)" } ]}
    ],
    /* EQS SUV 10가지(MANUFAKTUR 3가지 포함) · 마이바흐는 에메랄드 그린과 투톤 5가지가 더해진다 */
    colors: (function(){
      function c(name, code, mfk){ var o = { name:name, img:P + "color-" + code + ".jpg", lineImg:{ "Maybach": P + "mb-" + code + ".jpg" } }; if (mfk) o.mfk = true; return o; }
      function t(name, code){ return { name:"마이바흐 투톤, " + name, img:P + "mb-" + code + ".jpg", only:"Maybach" }; }
      return [
        c("옵시디안 블랙", "197u"), c("블랙", "040u"), c("폴라 화이트", "149u"), c("소달라이트 블루", "842u"),
        c("하이 테크 실버", "922u"), c("셀레나이트 그레이", "992u"), c("벨벳 브라운", "771u"),
        { name:"에메랄드 그린", img:P + "mb-989u.jpg", only:"Maybach" },
        c("MANUFAKTUR 오팔라이트 화이트 브라이트", "885u", true), c("MANUFAKTUR 알파인 그레이 솔리드", "956u", true), c("MANUFAKTUR 파타고니아 레드", "993u", true),
        t("세틴 브라운 / 오닉스 블랙", "c40"), t("옵시디안 블랙 / 셀레나이트 그레이", "c12"), t("하이 테크 실버 / 노틱 블루", "c20"),
        t("옵시디안 블랙 / MANUFAKTUR 칼라하리 골드", "c23"), t("하이 테크 실버 / 옵시디안 블랙", "c35")
      ];
    })()
  };
})();
