/* ─────────────────────────────────────────────────────────
   SL 구성 페이지 자료 (model.html?m=SL) — Mercedes-AMG SL 43 · SL 63 4MATIC+ · Mercedes-Maybach SL 680
   - AMG SL: Mercedes-AMG SL 카탈로그(2026-07-01, 26년식) 장비 · 인증 제원 + MY26 AMG SL 오더 가이드라인 v2 (2025-10, 휠 · 시트 · 트림 · 색상)
   - 마이바흐 SL: Mercedes-Maybach SL 카탈로그(2025-11-10, 26년식, Monogram Series) + MY26 마이바흐 SL 오더 가이드라인 v6 (2026-03)
   - SL 63 출력 · 토크 · 가속은 카탈로그 엔진 설명(430kW · 800Nm · 3.6초). SL 43 출력 · SL 63 최고속도처럼 카탈로그에 없는 값은 "—"
   - 가격: 2026-10-20 공식 가격표(27년식 기본, 26년식은 alt). 가격표 묶음이 Mercedes-AMG / Mercedes-Maybach 라 extraRows 로 모은다
   오더 가이드라인은 딜러용 CONFIDENTIAL 이라 옵션 코드 · NST 코드 · 한정 물량은 싣지 않는다(사양 이름만).
   사진은 images/cars/sl/ — 바꿀 때는 새 파일명으로(같은 이름 덮어쓰기 금지).
   ───────────────────────────────────────────────────────── */
var CARS = window.CARS || {};
CARS["SL"] = (function(){
  var P = "images/cars/sl/";
  return {
    name: "SL",
    badge: "Mercedes-AMG SL · Mercedes-Maybach SL",
    tagline: "클래식 소프트 탑으로 돌아온 전설의 로드스터.<br>AMG SL 43 · SL 63 4MATIC+ 와 마이바흐 SL 680.",
    asof: "AMG SL 카탈로그 2026년 7월 · 마이바흐 SL 카탈로그 2025년 11월",
    source: "Mercedes-AMG SL 카탈로그(2026년 7월, 26년식) · MY26 AMG SL 오더 가이드라인(2025년 10월) · Mercedes-Maybach SL 카탈로그(2025년 11월) · 공식 가격표(2026년 10월 20일)",
    hero: [P + "hero-1.jpg", P + "hero-2.jpg", P + "hero-3.jpg", P + "hero-4.jpg", P + "hero-5.jpg", P + "hero-7.jpg"],
    bodies: { R: "2+2 로드스터", M: "2인승 로드스터" },
    extraRows: /^(AMG SL|Maybach SL)/,
    lines: { "Mercedes-AMG": P + "line-sl63.jpg", "Maybach": P + "line-mb680.jpg", sl43: P + "line-sl43.jpg" },

    trims: [
      { id:"sl43", name:"Mercedes-AMG SL 43", short:"AMG SL 43", body:"R", line:"Mercedes-AMG", price:161800000, row:"27|AMG SL 43", alt:["26|AMG SL 43"],
        engine:"m139", wheel:"rvm", upholstery:"nappa", wood:"h70", imgNote:"AMG SL 43 · 카탈로그 이미지",
        highlights:["4기통 터보 · 후륜구동 로드스터", "20인치 AMG 멀티스포크 휠", "복합연비 8.8km/ℓ"] },
      { id:"sl63", name:"Mercedes-AMG SL 63 4MATIC+", short:"AMG SL 63 4MATIC+", body:"R", line:"Mercedes-AMG", price:252800000, row:"27|AMG SL 63 4M+",
        engine:"m177", wheel:"rwf", upholstery:"nappa", wood:"h70", imgNote:"AMG SL 63 4MATIC+ · 카탈로그 이미지",
        highlights:["V8 585마력 · 0→100km/h 3.6초", "AMG 액티브 라이드 컨트롤", "AMG 퍼포먼스 4MATIC+"] },
      { id:"mb680", name:"Mercedes-Maybach SL 680 Monogram Series", short:"Maybach SL 680", body:"M", line:"Maybach", price:348000000, row:"27|Maybach SL 680", alt:["26|Maybach SL 680"],
        engine:"m177mb", wheel:"r29", upholstery:"mb", wood:"h72", imgNote:"Mercedes-Maybach SL 680 · 카탈로그 이미지",
        highlights:["MAYBACH 패턴 소프트 탑 · 발광 그릴", "부메스터® 하이엔드 3D 사운드", "에너자이징 패키지 플러스 · 멀티컨투어 시트"] }
    ],

    /* 트림 비교 — 열 순서 = trims. "S" 기본 · "-" 없음 · "문의" 국내 자료에 없음 */
    features: [
      { g:"파워트레인 · 섀시", rows:[
        ["엔진", "직렬 4기통 2.0 터보 (전동식 터보)", "V8 4.0 바이터보", "V8 4.0 바이터보"],
        ["변속기", "AMG SPEEDSHIFT MCT 9G", "AMG SPEEDSHIFT MCT 9G", "SPEEDSHIFT MCT 9G"],
        ["구동", "후륜구동", "AMG 퍼포먼스 4MATIC+", "사륜구동"],
        ["서스펜션", "스포츠 서스펜션", "AMG 액티브 라이드 컨트롤", "AMG 액티브 라이드 컨트롤"],
        ["리어 액슬 스티어링 (2.5°)", "문의", "S", "S"]
      ]},
      { g:"익스테리어", rows:[
        ["휠", "20인치 AMG 멀티스포크 경량 알로이", "21인치 AMG 멀티 스포크 경량 알로이", "21인치 MAYBACH 멀티 스포크 단조"],
        ["전면 디자인", "AMG 전용 라디에이터 그릴", "AMG 전용 그릴 · 하이글로스 크롬 프론트 스플리터", "발광 라디에이터 그릴 · MAYBACH 레터링"],
        ["소프트 탑", "블랙", "블랙", "MAYBACH 패턴 패브릭, 블랙"],
        ["외장 색상", "6가지 + 유료 14가지", "6가지 + 유료 14가지", "모노그램 투톤 2가지 (블랙 보닛)"],
        ["디지털 라이트 · 에어스카프 · 키레스 고", "S", "S", "S"]
      ]},
      { g:"인테리어", rows:[
        ["좌석", "2+2", "2+2", "2인승"],
        ["시트", "나파 가죽 (레드 페퍼/블랙 기본)", "나파 가죽 (레드 페퍼/블랙 기본)", "MANUFAKTUR 익스클루시브 나파 가죽, 크리스탈 화이트"],
        ["트림", "AMG 알루미늄", "AMG 알루미늄", "실버 크롬"],
        ["스티어링 휠", "AMG 퍼포먼스, 나파 가죽", "AMG 퍼포먼스, 나파 가죽", "다기능, 우드/가죽"],
        ["앞좌석 열선 · 통풍 시트 · 메모리 패키지 · 열선 스티어링 휠", "S", "S", "S"]
      ]},
      { g:"MBUX · 안전", rows:[
        ["사운드", "부메스터® 서라운드", "부메스터® 서라운드", "부메스터® 하이엔드 3D 서라운드"],
        ["12.3인치 계기반 · 11.9인치 센트럴 디스플레이", "S", "S", "S"],
        ["MBUX 증강현실 내비게이션 · 헤드업 디스플레이", "S", "S", "S"],
        ["드라이빙 어시스턴스 패키지 · PRE-SAFE®", "S", "S", "S"],
        ["액티브 주차 · 메모리 주차 어시스트", "S", "S", "S"]
      ]}
    ],
    featureNote: "AMG SL 은 26년식 카탈로그 · 오더 가이드라인, 마이바흐 SL 680 은 마이바흐 SL 카탈로그 기준입니다. 마이바흐 SL 680 은 프론트 액슬 리프트, AMG 전자식 리어 액슬 리미티드 슬립 디퍼렌셜, 에너자이징 패키지 플러스, 원격 주차 패키지까지 기본입니다.",

    engineNote: "세 트림 모두 9단 MCT 변속기를 쓰고, 버튼 하나로 약 15초(최대 60km/h) 만에 소프트 탑이 열립니다(카탈로그).",
    engines: {
      m139: { name:"M 139", kind:"직렬 4기통 2.0리터 터보 + 48V 전동식 터보", chips:["1,991cc", "후륜구동", "복합 8.8km/ℓ"],
              desc:"메르세데스-AMG 의 가장 강력한 4기통 양산 엔진. <b>48V 전동식 배기 터보차저</b>와 벨트 구동 스타터 제너레이터가 반응을 끌어올립니다(카탈로그)." },
      m177: { name:"M 177", kind:"AMG 4.0리터 V8 바이터보", chips:["585마력", "81.6kg·m", "0→100 3.6초"],
              desc:"'원 맨, 원 엔진' 원칙으로 한 사람이 조립하는 V8. 실린더 헤드 사이 트윈 스크롤 터보, 나노슬라이드 코팅 실린더로 반응과 내구성을 잡았습니다(카탈로그)." },
      m177mb: { name:"M 177 (Maybach)", kind:"V8 4.0리터 바이터보", chips:["585마력", "81.6kg·m", "0→100 4.1초"],
              desc:"여유로운 주행에서도 차분하고 부드러운 V8. <b>AMG 액티브 라이드 컨트롤 · 리어 액슬 스티어링 · 프론트 액슬 리프트</b>가 모두 기본입니다." }
    },

    specs: { rows: [
      ["엔진", "M 139 직렬 4기통 터보", "M 177 V8 바이터보", "M 177 V8 바이터보"],
      ["배기량", "1,991cc", "3,982cc", "3,982cc"],
      ["최고출력", "—", "585마력", "585마력"],
      ["최대토크", "—", "81.6kg·m", "81.6kg·m"],
      ["0→100km/h", "—", "3.6초", "4.1초"],
      ["최고속도", "—", "—", "260km/h"],
      ["구동 · 변속기", "후륜 · 9단", "사륜 · 9단", "사륜 · 9단"],
      ["복합연비 (등급)", "8.8km/ℓ (5등급)", "6.5km/ℓ (5등급)", "6.5km/ℓ (5등급)"],
      ["도심 · 고속 연비", "7.4 · 11.3km/ℓ", "5.5 · 8.3km/ℓ", "5.5 · 8.3km/ℓ"],
      ["CO₂ 배출", "196g/km", "271g/km", "269g/km"],
      ["공차중량", "1,775kg", "1,930kg", "1,990kg"],
      ["전장 · 전폭 · 전고", "4,705 · 1,915 · 1,365mm", "4,705 · 1,915 · 1,365mm", "4,695 · 1,915 · 1,365mm"],
      ["휠베이스 · 최소회전반경", "—", "—", "2,700mm · 6.175m"],
      ["트렁크", "—", "—", "240ℓ"]
    ] },
    specNote: "카탈로그의 인증 차량 제원입니다(SL 63 출력 · 토크 · 가속은 카탈로그 엔진 설명). 카탈로그에 없는 칸(—)은 공식 자료가 나오는 대로 채워 넣겠습니다.",

    wheels: {
      rvm: { name:"20인치 AMG 멀티스포크 경량 알로이 휠", img:P + "wheel-rvm.jpg" },
      rwf: { name:"21인치 AMG 멀티 스포크 경량 알로이 휠", img:P + "wheel-rwf.jpg" },
      r29: { name:"21인치 MAYBACH 멀티 스포크 단조 휠", img:P + "wheel-r29.jpg" }
    },
    upholstery: {
      nappa: { name:"나파 가죽", colors:[
        { name:"레드 페퍼/블랙 (기본)", img:P + "seat-807.jpg" },
        { name:"블랙", img:P + "seat-801.jpg" },
        { name:"시에나 브라운/블랙", img:P + "seat-804.jpg" },
        { name:"세이지 그레이/블랙", img:P + "seat-808.jpg" } ]},
      mb: { name:"MANUFAKTUR 익스클루시브 나파 가죽", colors:[
        { name:"크리스탈 화이트", img:P + "seat-mb509.jpg" } ]}
    },
    woods: {
      h70: { name:"AMG 알루미늄 트림", img:P + "trim-h70.jpg" },
      h72: { name:"실버 크롬 트림", img:P + "trim-mb72h.jpg" },
      h73: { name:"AMG 카본 트림", img:P + "trim-h73.jpg", note:"SL 63 유료 옵션" },
      h94: { name:"MANUFAKTUR 블랙 크롬 트림", img:P + "trim-h94.jpg", note:"유료 옵션" },
      h97: { name:"오픈 포어 그레이 우드 트림", img:P + "trim-h97.jpg", note:"유료 옵션" },
      h98: { name:"오픈 포어 브라운 애쉬 우드 트림, 알루미늄 라인", img:P + "trim-h98.jpg", note:"유료 옵션" }
    },
    extraCfg: [
      { title:"소프트 탑", sub:"AMG SL 4가지 · 마이바흐 SL 전용 패턴", items:[
        { name:"블랙", img:P + "top-740.jpg", base:true, note:"AMG SL 기본" },
        { name:"레드", img:P + "top-747.jpg", note:"유료 옵션" },
        { name:"그레이", img:P + "top-751.jpg", note:"유료 옵션" },
        { name:"MANUFAKTUR 미드나이트 블루", img:P + "top-744.jpg", note:"유료 옵션" },
        { name:"MAYBACH 패턴 패브릭, 블랙", img:P + "top-mb756.jpg", base:true, note:"마이바흐 SL 680 기본" } ]},
      { title:"휠", sub:"트림별 기본과 선택", items:[
        { name:"20인치 AMG 멀티스포크", img:P + "wheel-rvm.jpg", base:true, note:"SL 43 기본" },
        { name:"21인치 AMG 멀티 스포크", img:P + "wheel-rwf.jpg", base:true, note:"SL 63 기본" },
        { name:"21인치 AMG 멀티 스포크, 블랙", img:P + "wheel-rwg.jpg" },
        { name:"21인치 AMG 10트윈 스포크 단조", img:P + "wheel-rwd.jpg" },
        { name:"21인치 AMG 10트윈 스포크 단조, 블랙", img:P + "wheel-rwe.jpg" },
        { name:"21인치 MAYBACH 멀티 스포크 단조", img:P + "wheel-r29.jpg", base:true, note:"마이바흐 SL 680 기본" },
        { name:"21인치 MAYBACH 5홀 단조", img:P + "wheel-r76.jpg", note:"마이바흐 SL 680 선택" } ]},
      { title:"MANUFAKTUR 나파 가죽", sub:"AMG SL · 다이아몬드 퀼팅 · 선택 사양", items:[
        { name:"요트 블루/블랙", img:P + "seat-952.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"토바코 브라운/블랙", img:P + "seat-954.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"사바나 베이지/블랙", img:P + "seat-955.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"셰이디 그린/블랙", img:P + "seat-956.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"미스틱 레드/블랙", img:P + "seat-957.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"로제 그레이/블랙", img:P + "seat-958.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"클래식 레드/블랙", img:P + "seat-967.jpg", note:"MANUFAKTUR 인테리어 패키지" },
        { name:"트러플 브라운/블랙", img:P + "seat-824.jpg", note:"유료 옵션" },
        { name:"크리스탈 화이트/블랙", img:P + "seat-825.jpg", note:"유료 옵션" },
        { name:"마키아토 베이지/티타늄 그레이", img:P + "seat-835.jpg", note:"유료 옵션" } ]}
    ],
    /* AMG SL: 기본 6가지(옵시디안 블랙 기본) + 유료 14가지 / 마이바흐 SL: 모노그램 시리즈 투톤 2가지 */
    colors: (function(){
      function c(name, code, mfk){ var o = { name:name, img:P + "color-" + code + ".jpg", only:"Mercedes-AMG" }; if (mfk) o.mfk = true; return o; }
      return [
        c("옵시디안 블랙", "197u"), c("하이퍼 블루", "888u"), c("썬 옐로우", "914u"), c("하이테크 실버", "922u"), c("스펙트럴 블루", "970u"), c("셀레나이트 그레이", "992u"),
        c("AMG 몬자 그레이 마그노 (유료)", "054u"), c("MANUFAKTUR 나이트 블랙 마그노", "056u", 1), c("MANUFAKTUR 실리콘 그레이", "190u", 1),
        c("MANUFAKTUR 그라파이트 그레이 마그노", "818u", 1), c("MANUFAKTUR 하이테크 실버 마그노", "734u", 1), c("MANUFAKTUR 알파인 그레이 솔리드", "956u", 1),
        c("MANUFAKTUR 오팔라이트 화이트 브라이트", "885u", 1), c("MANUFAKTUR 오팔라이트 화이트 마그노", "659u", 1), c("MANUFAKTUR 코트다쥐르 라이트 블루", "385u", 1),
        c("MANUFAKTUR 빈티지 블루 솔리드", "934u", 1), c("MANUFAKTUR 스펙트럴 블루 마그노", "593u", 1), c("MANUFAKTUR 아일랜드 미드 그린 마그노", "599u", 1),
        c("MANUFAKTUR 루벨라이트 레드", "660u", 1), c("MANUFAKTUR 파타고니아 레드 브라이트", "993u", 1),
        { name:"MANUFAKTUR 가넷 레드 메탈릭 · 블랙 보닛 (레드 앰비언스)", img:P + "mb-393u.jpg", mfk:true, only:"Maybach" },
        { name:"MANUFAKTUR 오팔라이트 화이트 마그노 · 블랙 보닛 (화이트 앰비언스)", img:P + "mb-659u.jpg", mfk:true, only:"Maybach" }
      ];
    })()
  };
})();
